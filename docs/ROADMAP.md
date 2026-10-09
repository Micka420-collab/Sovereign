# Plan de livraison & gates

## P0 — Foundation / sprint 0
- ADR et contrats d'événements, monorepo, lint/format/test, licence choisie.
- Prototypes UI et de capture sur versions identifiées des CLI.
- Threat model et politique de permissions.
**Gate** : décisions documentées, build reproductible, demo de données synthétiques.

## P1 — Vertical slice
- Core Rust + SQLite migrations + append-only ingest + FTS5.
- REST loopback authentifiée, SDK TypeScript, fixtures.
- UI projets, événements, recherche, sources.
**Gate** : ingestion -> recherche -> citation prouvée en test automatisé.

## P2 — Connectors & Handoff
- Deux connecteurs pilotes Codex/Claude, repli export/import si contraintes fournisseur.
- Package de handoff, décisions, tâches ouvertes, liens Git.
- Tests de cohérence, isolation et évaluation quantitative.
**Gate** : passation fonctionnelle entre deux agents avec mesure vs baseline.

## P3 — Premium MVP
- Installation/désinstallation, onboarding, settings, coffre et backup/restore.
- Design system FR/EN, accessibilité, logs diagnostics, signature release.
- Tests de sécurité, perf, robustesse, documentation opérateur.
**Gate** : installation neuve, mode offline, restauration, absence de fuite sur suite définie.

## P4 — Beta commerciale
- Pilotes de développeurs puis petites équipes, entretiens, mesures de rétention.
- Pricing expérimental, politiques de support, packaging et conditions légales.
**Gate** : valeur payante validée par usages observés, non par hypothèses.

## Backlog — hors MVP
Sync E2EE, hébergement français/européen, équipe multi-utilisateurs, SSO/OIDC, audit avancé, mémoire vectorielle locale optionnelle, graphe interactif, nouveaux agents et plugins.

## Risques critiques
- APIs/hooks des CLI changeants ; maintenir matrice de compatibilité et tests par version.
- Stocker toutes les conversations peut exposer des secrets ; opt-in, redaction et quotas.
- Retrieval défectueux pouvant propager une hallucination ; confiance/citation/contradiction et benchmark.
- Surcoût architectural ; commencer SQLite FTS5, enrichir seulement après mesures.
- Nom/marque/licence inconnus ; décision juridique requise avant commercialisation.

## Definition of Done
Code et tests, documentation FR, validation sécurité, accessibilité de base, instrumentation non intrusive, migration des données, plan de rollback, démonstration reproductible.
