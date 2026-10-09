# Registre de décisions architecturales

## ADR-0001 — Local-first comme invariant
**Proposé**. Noyau qui fonctionne sans cloud ; sync future facultative. Motif : souveraineté et fidélité produit. Conséquence : complexité de distribution multi-OS.

## ADR-0002 — Events immuables, connaissances dérivées
**Proposé**. Ne jamais remplacer l'historique de source par ses résumés. Motif : provenance, correction et audit.

## ADR-0003 — SQLite/FTS5 en MVP
**Proposé**. Limiter les dépendances d'installation ; mesure avant ajout d'une base vectorielle.

## ADR-0004 — Rust core, TypeScript front et adapters
**Proposé**. Séparer stockage/politique et connecteurs ; coûts de maintenance et recrutement à réévaluer.

## ADR-0005 — Permissions applicatives explicites
**Proposé**. Auth sur localhost et ACL appliquées avant retrieval. Un MCP ne contourne pas les règles par conception.

## ADR-0006 — Marque, licence et stratégie IP
**Ouvert**. Étudier marque française/UE « Sovereign », domaines disponibles, modèle open-core vs licence permissive, propriété intellectuelle et contributions.

## ADR-0007 — Premier couple de connecteurs
**Proposé sous vérification technique** : Codex et Claude Code. Étudier version/capacités officielles avant de garantir capture automatique.

## ADR-0008 — Frontière France/UE
**Ouvert**. Exiger un inventaire de la chaîne de dépendances et des flux sortants ; localisation des traitements future à prouver, pas à présumer.

## Méthode
Chaque changement structurel ajoute ADR avec : contexte, options, décision, alternatives, impact sécurité, migrations, date et statut. Les agents IA doivent proposer des ADR et ne pas changer silencieusement les hypothèses produit.
