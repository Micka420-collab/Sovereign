# Product design — Sovereign

## Identité
Sovereign : « Changez d'IA, gardez votre mémoire. »
Positionnement premium, français d'origine, international dès la conception. Direction visuelle distincte de toute marque existante. Vérifier disponibilité juridique du nom.

## Palette proposée
Obsidian #090D18 ; Midnight #151D2F ; Iris #627CFF ; Mint #4DDBB0 ; Frost #F0F3FA.
Typographie : sans-serif lisible sous licence compatible, monospace pour références techniques. Prévoir dark + light, WCAG 2.2 AA visé, contrastes testés.

## Navigation MVP
- Overview : activité, santé des connecteurs, projets récents, handoffs.
- Projects : espaces, membres locaux, permissions, état courant.
- Timeline : provenance, types d'événement, filtres temporels, détails bruts.
- Search : résultat cité + aperçu source + statut de validité.
- Handoffs : préparation, revue, transmission, confirmation de réception.
- Connectors : détecter / autoriser / tester / pause / supprimer.
- Settings : sécurité, export, restauration, stockage, langue, diagnostics.

## Onboarding
1. Valeur expliquée en une phrase ; aucune création de compte exigée pour le local.
2. Choisir coffre local et emplacement des données.
3. Détecter les connecteurs possibles ; afficher précisément leurs permissions.
4. Importer une session de démonstration **fictive** ou une vraie session avec consentement.
5. Effectuer une première recherche puis un handoff démonstratif.
6. Montrer comment exporter et effacer ses données.

## Design quality bar
États loading, empty, success, error, offline, permission denied ; clavier/command palette ; animations respectant prefers-reduced-motion ; aucune maquette trompeuse avec chiffres réels fictifs ; interface FR/EN dès le départ via i18n ; tests d'accessibilité automatisés et revues manuelles.

## Démo investisseur/client
Une tâche commence sur Codex, passe sur Claude Code ; vue comparative contexte/handoff avec sources, tests et décisions. Le moment « wow » repose sur une continuité prouvable, non sur une animation de graphe abstraite.
