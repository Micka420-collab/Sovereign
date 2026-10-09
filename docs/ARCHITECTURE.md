# Architecture technique — proposition ADR-0001

## Vue logique

```text
Codex / Claude Code / adapters / manual import
                  |
          Consent + connector boundary
                  |
          Local Ingestion Gateway
    validate -> redact -> dedupe -> persist
                  |
     Append-only Event Store (SQLite)
          |               |
      FTS5 index     Derived memories
          |               |
          +---- Context Engine ----+
                   |
           Provenance + ACL check
                   |
             Handoff / MCP
                   |
       Sovereign desktop dashboard
```

## Stack MVP
- Monorepo : pnpm + Cargo ; TypeScript strict et Rust stable.
- Core Rust (API HTTP loopback, stockage SQLite WAL + FTS5, migrations SQL).
- Application web React/TypeScript/Vite, desktop Tauri à valider après prototype.
- SDK TypeScript ; connecteurs découplés ; serveur MCP exposant uniquement des capacités autorisées.
- Recherche vectorielle et modèles d'embeddings locaux **optionnels** après baseline FTS5 ; ne pas introduire Qdrant obligatoire au MVP.
- API versionnée, JSON Schema / OpenAPI ; validation à la frontière des entrées.

## Modèle canonique des événements
Event : id UUIDv7, schema_version, workspace_id, project_id, session_id, agent_id, connector_id, external_event_id, kind, occurred_at, captured_at, payload_encrypted_or_reference, content_hash, sensitivity, provenance, visibility_policy.

Types initiaux : message, tool_call, tool_result, file_change, git_commit, test_result, decision, task_state, checkpoint.

Distinguer :
- SourceEvent immuable : ce qui a réellement été observé.
- Claim dérivé : assertion attribuée avec confiance et statut de vérification.
- Decision : choix lié aux événements sources et à son cycle de vie (proposée/validée/remplacée).
- Handoff : instantané construit à la demande, comportant IDs de sources et versions.

## Garanties et limites
- Idempotence : (connector_id, external_event_id) unique si disponible ; hash normalisé avec fenêtre temporelle autrement.
- Ordre causal : timestamps + sequence par session ; pas de garantie d'horloge globale exacte.
- Archive sans compression destructive des événements accessibles ; pas de capture des raisonnements internes non exposés.
- Contexte restitué avec budget de tokens, scores de pertinence, récence, priorité des décisions actives et citations obligatoires.
- Retrieval filtré par ACL **avant** ranking et avant rendu du prompt.
- Les agents ne peuvent pas modifier les événements sources, seulement ajouter événements/corrections reliés.

## Première API (draft)
- `POST /v1/events` — ingest avec scopes et idempotency key.
- `GET /v1/projects`, `GET /v1/sessions`.
- `POST /v1/search` — réponse avec source IDs et offsets.
- `POST /v1/context/assemble` — projet, tâche, agent, budget.
- `POST /v1/handoffs`, `GET /v1/handoffs/:id`.
- `POST /v1/export` (action privilégiée), `GET /v1/health`.

## MCP draft
`sovereign.search`, `sovereign.get_context`, `sovereign.record_event`, `sovereign.create_handoff`, `sovereign.get_handoff`.
Éviter les appels qui retournent des mémoires non filtrées. L'accès doit être déterminé par le moteur de politique, pas par une consigne dans le prompt.

## Topologie
Par défaut, API bindée sur 127.0.0.1, aucune exposition réseau, aucune télémétrie. Multi-user et synchronisation envisagés dans une phase ultérieure après nouveau threat model.

## Contraintes de performance visées (à mesurer)
Recherche FTS p95 < 300 ms pour corpus de test défini ; construction contexte p95 < 1.5 s hors génération LLM ; budget ressources documenté. Aucun chiffre présenté comme acquis avant benchmark.
