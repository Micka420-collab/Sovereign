# Prototype context-core (non production)

Première tranche de code exécutable sans dépendances externes. Sert à valider le contrat des événements, le filtrage d'un corpus et la génération d'un handoff sourcé **en mémoire vive**.

```bash
cd prototypes/context-core
node --version # Node >= 20
npm test
npm run demo
```

**Limites connues** : aucune persistance ni chiffrement, aucune authentification, aucun contrôle de secrets, index naïf O(n), pas de limite de tokens, pas de connecteur réel. La méthode handoff assume un appelant **déjà autorisé** ; interdiction de la publier comme API sans moteur de politiques. Les chaînes de démonstration ne sont pas des données utilisateur.

Étape suivante : transférer les contrats vers un core Rust, SQLite et des politiques d'accès testées. Voir docs/ARCHITECTURE.md.
