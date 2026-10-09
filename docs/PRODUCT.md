# Product requirements — Sovereign v0.1

## Positionnement
Sovereign est la couche de **continuité de contexte vérifiable** entre agents IA : capture autorisée, mémoire persistante, recherche sourcée, handoff, gouvernance. Ce n'est pas un nouveau LLM, une promesse de mémoire omnisciente ni un simple chatbot.

## Utilisateurs cibles
1. Développeur individuel utilisant Codex et Claude Code.
2. Petite équipe d'ingénierie multipliant les agents.
3. DSI/équipes sécurité demandant maîtrise des données, déploiement privé et audit.

## Jobs-to-be-done
- Lorsque je change d'agent, je veux retrouver les décisions, fichiers, tests et travaux ouverts sans réexpliquer le projet.
- Lorsque je cherche une décision, je veux accéder à la source, à sa date et à son statut.
- Lorsque j'autorise un agent, je veux choisir précisément les projets et informations accessibles.
- Lorsque je quitte Sovereign, je veux exporter mes données dans un format documenté.

## MVP strict — fonctionnalités P0
1. Installation Linux (puis macOS et Windows/WSL), diagnostic et désinstallation propre.
2. Service local avec API authentifiée, SQLite, migrations et modèle append-only.
3. Ingestion d'événements explicites depuis deux adaptateurs pilotes : Codex et Claude Code, sous réserve de capacités disponibles selon versions ; prévoir import manuel de repli.
4. Recherche plein texte + extraction de contexte sourcée, filtres projet et session.
5. Handoff explicite entre agents avec décisions, état Git, tâches ouvertes et références.
6. Interface premium : onboarding, accueil, projets, timeline, recherche, fiche source, connecteurs, paramètres/confidentialité.
7. Export JSONL/Markdown, sauvegarde et restauration contrôlées.

## Non-objectifs MVP
Cloud propriétaire, modèle fondation maison, collaboration temps réel, capture de pensées cachées des modèles, enregistrement silencieux de conversations privées, graphes spectaculaires sans utilité mesurable, mobile natif, synchronisation multi-appareils.

## Critères de succès expérimentaux
- Test de passation entre Codex et Claude avec corpus de scénarios et grille de correction.
- Precision@k et recall@k sur informations importantes ; mesure des sources inventées et des décisions obsolètes.
- Temps de reprise d'un projet et tokens consommés face à une condition témoin sans Sovereign.
- 0 fuite inter-projet dans la suite de tests d'isolation ; 0 secret connu retrouvé dans exports non autorisés.
- Installation, onboarding, export et restauration reproductibles en CI.

## Modèle commercial à valider
Community (local), Pro (outils avancés), Team (collaboration et permissions), Enterprise (déploiement privé). Les tarifs évoqués précédemment sont des hypothèses, **pas des prix annoncés**.
Différenciateur défendable : fiabilité des passations, provenance, contrôles locaux et compatibilité multi-agents.

## Contraintes business
Projet conçu et piloté en France ; aucune affirmation de certification, origine intégrale française des dépendances, conformité RGPD automatique ou hébergement qualifié sans vérification. Vérifier disponibilité de la marque Sovereign, domaine et politique de licence avant commercialisation.
