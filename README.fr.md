<p align="center">
  <img src="assets/logo.png" alt="MCP App Builder" width="400" />
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/mcp-app-builder/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/mcp-app-builder/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" />
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-1.0-green" alt="MCP" /></a>
  <a href="https://mcp-tool-shop-org.github.io/mcp-app-builder/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page" /></a>
</p>

# Constructeur d'applications MCP

Créez des serveurs MCP avec des composants d'interface utilisateur interactifs, directement depuis VS Code.

## Aperçu

**MCP App Builder** aide les développeurs à créer, tester et déployer rapidement des serveurs MCP (Model Context Protocol). Il prend en charge la nouvelle norme **MCP Apps** (janvier 2026), permettant d'intégrer des composants d'interface utilisateur interactifs directement dans les conversations d'intelligence artificielle.

## Caractéristiques

### Échafaudage
- **Assistant de configuration des serveurs :** Créez des serveurs MCP grâce à un processus de configuration guidé.
- **Modèles :** Configurations de serveurs de base, avec interface utilisateur et complètes.
- **Configuration automatique :** TypeScript, SDK MCP et structure de projet.

### Développement
- **Validation du schéma :** Validation en temps réel des fichiers `mcp.json` et `mcp-tools.json`.
- **Validation automatique à la sauvegarde :** Les schémas sont vérifiés automatiquement lorsque vous enregistrez (paramétrable).
- **Génération de types :** Génération de types TypeScript à partir des définitions des outils.
- **IntelliSense :** Prise en charge des schémas JSON pour les fichiers de configuration.

### Tests
- **Environnement de test :** Exécutez des tests sur vos outils MCP.
- **Tests générés automatiquement :** Tests créés à partir des définitions des outils et des exemples.
- **Canal de sortie :** Résultats des tests formatés, indiquant le statut de réussite ou d'échec.

### Tableau de bord
- **Interface graphique :** Accès rapide à toutes les commandes.
- **Intégration à l'environnement de travail :** Détection automatique des projets MCP.
- **Barre d'état :** Indicateur MCP lorsque vous travaillez sur un projet MCP.

## Démarrage rapide

1. **Installez l'extension** depuis le marché de VS Code (bientôt disponible).
2. **Créez un nouveau serveur :** `Cmd+Shift+P` → "MCP : Nouveau serveur"
3. **Choisissez un modèle :**
- `basic` : serveur simple "hello world".
- `with-ui` : serveur avec des composants d'interface utilisateur (tableaux et graphiques).
- `full` : serveur complet avec des outils, des ressources et des exemples.

## Raccourcis clavier

| Raccourci. | Commande. |
| Bien sûr, veuillez me fournir le texte que vous souhaitez que je traduise. | Veuillez fournir le texte à traduire. |
| `Ctrl+Alt+N` (ou `Cmd+Alt+N` sur Mac). | Nouveau serveur. |
| `Ctrl+Alt+V` (ou `Cmd+Alt+V` sur Mac). | Valider le schéma. |

## Commandes

| Commande. | Description. |
| Veuillez fournir le texte à traduire. | Veuillez fournir le texte à traduire. |
| `MCP: New Server` | Créer un nouveau projet de serveur MCP. |
| `MCP: Validate Schema` | Valider le fichier mcp.json ou mcp-tools.json actuel. |
| `MCP: Generate Types` | Générer des types TypeScript à partir des définitions d'outils. |
| `MCP: Test Server` | Effectuez des tests sur vos outils MCP. |
| `MCP: Open Dashboard` | Ouvrez le tableau de bord visuel. |

## Paramètres

| Cadre.
Contexte.
Décor.
Lieu.
Environnement.
Mise en place.
Installation.
Réglage.
Configuration. | Par défaut. | Description. |
| Veuillez fournir le texte à traduire. | Veuillez fournir le texte à traduire. | Bien sûr, veuillez me fournir le texte que vous souhaitez que je traduise. |
| `mcp-app-builder.defaultTemplate` | `basic` | Modèle par défaut pour les nouveaux serveurs (basique/avec interface utilisateur/complet). |
| `mcp-app-builder.autoValidate` | `true` | Valider automatiquement les schémas lors de la sauvegarde. |
| `mcp-app-builder.testPort` | `3000` | Port pour le serveur de test MCP. |

## Composants d'interface utilisateur pour les applications MCP

Cette extension fournit des outils de développement pour les composants d'interface utilisateur des applications MCP.

```typescript
import { table, chart, form, card } from '@mcp-app-builder/ui-components';

// Create a search results table
const results = table(
  [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'status', header: 'Status' },
  ],
  data,
  { pageSize: 10 }
);

// Create a dashboard with metrics
const dashboard = dashboard({
  title: 'Analytics',
  metrics: [
    { label: 'Users', value: 1234, change: 12 },
    { label: 'Revenue', value: '$5,678', change: -3 },
  ],
  chart: lineChart,
});
```

## Structure des fichiers

Les projets de serveur MCP générés suivent la structure suivante :

```
my-mcp-server/
├── mcp.json           # Server configuration
├── mcp-tools.json     # Tool definitions
├── package.json       # Node.js dependencies
├── tsconfig.json      # TypeScript configuration
└── src/
    ├── index.ts       # Server entry point
    ├── resources.ts   # Resource handlers (full template)
    └── prompts.ts     # Prompt handlers (full template)
```

## Développement

### Prérequis

- Node.js version 18 et supérieures.
- VS Code version 1.85 et supérieures.

### Installation

```bash
git clone https://github.com/mcp-tool-shop-org/mcp-app-builder
cd mcp-app-builder
npm install
npm run compile
```

### Course à pied

Appuyez sur la touche `F5` dans VS Code pour lancer l'environnement de développement des extensions.

### Tests

```bash
npm test
```

## Plan d'action.
Feuille de route.
Plan stratégique.
Calendrier.
Programme.
(Selon le contexte, d'autres traductions peuvent être possibles.)

### Phase 1 (Actuelle) – Bases déterministes
- [x] Structure de base du projet avec des modèles.
- [x] Système de validation des schémas.
- [x] Génération de types à partir des schémas.
- [x] Éléments de base pour l'interface utilisateur.
- [x] Infrastructure de base pour les tests.
- [x] Vue web du tableau de bord.

### Phase 2 : Développement assisté par l'intelligence artificielle
- [ ] Génération d'outils d'intelligence artificielle à partir du langage naturel.
- [ ] Complétion intelligente du code pour les utilisateurs des outils.
- [ ] Génération automatique de documentation.

### Phase 3 : Publication et distribution
- [ ] Publication en un clic vers les registres MCP.
- [ ] Gestion des versions.
- [ ] Résolution des dépendances.

### Phase 4 : Constructeur visuel
- [ ] Constructeur d'interfaces utilisateur par glisser-déposer.
- [ ] Prévisualisation en direct des applications MCP.
- [ ] Éditeur de flux de travail visuel.

## Contribuant

Les contributions sont les bienvenues ! Veuillez consulter nos directives de contribution (qui seront bientôt disponibles).

## Licence

MIT.

## Liens

- [Protocole de contexte des modèles](https://modelcontextprotocol.io)
- [Spécifications des applications MCP](http://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/)
- [Organisation GitHub](https://github.com/mcp-tool-shop-org)

---

Construit avec MCP App Builder.
