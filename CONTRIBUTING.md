# Contribuer à Sovereign

Le projet est au stade de conception ; avant toute contribution, la licence et la politique IP doivent être finalisées. Les PR doivent inclure objectif, risques, tests et impact souveraineté.

## Règles
- Documentation et UX françaises de référence ; traduction anglaise entretenue.
- Ne jamais pousser de clés, journaux privés, données clients ou exports de conversations.
- PR petites et testables ; toute modification de schéma inclut migration et rollback.
- Ajouter tests de permissions pour toute route exposant des données.
- Les agents IA doivent déclarer ce qu'ils ont réellement testé et ce qu'ils supposent.
- Pas de publication de dépendances ou collecte de télémétrie sans décision explicite.

## Workflow
Issue -> ADR si nécessaire -> branche -> PR -> revue -> CI -> merge. Respecter la liste de contrôle de sécurité des PR.
