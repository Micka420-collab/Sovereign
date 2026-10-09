# Sovereign

**Infrastructure française de continuité des connaissances pour agents IA.**

> Changez de modèle, pas de mémoire. / Switch models, keep context.

Sovereign est un projet **local-first**, conçu pour capturer les échanges accessibles des agents IA, préserver leurs sources, reconstruire un contexte utile et transmettre le travail d'un agent à un autre — sans confier automatiquement les données à un cloud tiers.

## État

**Phase de conception et fondations — non prêt pour la production.** Les fonctionnalités décrites dans la documentation sont des objectifs et non des capacités déjà livrées.

## Promesse produit

- **Continuité** : reprendre un projet avec un agent différent.
- **Traçabilité** : distinguer événement brut, affirmation, hypothèse, décision et preuve.
- **Souveraineté** : stockage local par défaut, fonctionnement hors ligne pour les fonctions locales, export libre.
- **Sécurité** : cloisonnement par espace/projet, autorisations explicites et contrôle des données sensibles.
- **Expérience premium** : installation simple, interface française et anglaise, dashboard intuitif.

## Documents

La spécification initiale sera proposée dans une pull request :
- `docs/PRODUCT.md` : vision, utilisateurs, MVP et indicateurs.
- `docs/ARCHITECTURE.md` : composants et contrats.
- `docs/SECURITY.md` : modèle de menace et souveraineté.
- `docs/DESIGN.md` : expérience utilisateur et design system.
- `docs/ROADMAP.md` : phases, critères d'acceptation et lancement.
- `docs/DECISIONS.md` : décisions d'architecture et questions ouvertes.

## Principes non négociables

1. Pas de dépendance à un fournisseur de modèle.
2. Pas de synchronisation ou d'exfiltration silencieuse.
3. Jamais de secrets dans les journaux ou les prompts par défaut.
4. Les sources originales restent distinctes des résumés et inférences.
5. Aucun « contexte complet » illimité promis : archive complète des événements accessibles, récupération ciblée et mesurée.
6. Aucun label de conformité ou de sécurité sans preuves et audit.

## Origine

Projet initié en France, avec l'ambition de développer une technologie souveraine déployable par des particuliers et des organisations.

## Licence

**À déterminer avant toute contribution externe.** Dépôt public ne signifie pas automatiquement open source. Ne pas ajouter de code tiers incompatible.

---
*Documentation et implémentation en construction.*
