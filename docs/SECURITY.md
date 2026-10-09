# Souveraineté, confidentialité et sécurité

## Doctrine
**Local-first, privacy-by-default, zero silent egress.** Souveraineté = contrôle technique vérifiable, portabilité, maîtrise du déploiement, cadre juridique et dépendances auditées ; une entreprise française ou un serveur en France ne suffisent pas seuls.

## Threat model initial
Actifs : conversations, code source, identifiants, secrets, décisions internes, clés et jetons.
Adversaires : contenu adversarial injecté dans les messages/outils, agent compromis, utilisateur local non autorisé, connecteur malveillant, compromission de chaîne d'approvisionnement, exfiltration réseau.
Frontières : outil externe -> connecteur -> moteur local -> stockage -> MCP -> autre agent ; chaque frontière doit être contrôlée.

## Contrôles P0
1. Opt-in explicite par connecteur et par projet, aperçu des données importées et bouton pause.
2. Politique deny-by-default avec scopes read/write séparés et accès par projet, agent et identité.
3. Secret scanning/redaction avant stockage et avant transmission ; règles configurables, quarantaine de contenu sensible ; documenter faux positifs.
4. API loopback et authentification même en local ; protection CSRF/CORS selon mode d'exposition, limites de taille/rate limits.
5. Stockage chiffré au repos selon modèle de menace choisi, clés protégées par coffre système quand disponible ; préciser limites contre un OS compromis.
6. Protéger les prompts contre instructions issues des sources : traiter tous les souvenirs récupérés comme **données non fiables**, séparées des instructions système.
7. Export et import autorisés, vérification d'intégrité et chiffrement optionnel des sauvegardes.
8. Logs minimisés, secrets jamais écrits en clair, journal d'audit des accès aux données.
9. SBOM, dépendances épinglées, scans SCA, CI sans secrets en PR externes.
10. Tests d'isolation multi-projets, prompt injection, exfiltration, path traversal, corruption SQLite et restauration.

## RGPD et marché français/européen
Cartographier responsables/sous-traitants selon déploiement ; base légale, information, minimisation, conservation, droits des personnes, suppression et export ; DPIA si les conditions le rendent nécessaire. Les offres cloud futures demanderont analyses de transferts, contrats et localisation effective. Aucune certification annoncée par anticipation.

## Politique de données
Aucune télémetrie activée par défaut. Les analytics diagnostiques nécessitent consentement spécifique. Données locales jamais envoyées à un service externe par simple installation. Intégration d'une API LLM distante uniquement après choix et avertissement de l'utilisateur.

## Publication responsable
Ne pas publier de tokens, données de conversation ou dumps utilisateurs dans GitHub Issues. Avant lancement public, publier SECURITY.md à la racine, politique de vulnérabilités et programme de traitement des incidents.
