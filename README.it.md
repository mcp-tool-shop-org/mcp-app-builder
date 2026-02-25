<p align="center">
  <img src="assets/logo.png" alt="MCP App Builder" width="400" />
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/mcp-app-builder/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/mcp-app-builder/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" />
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-1.0-green" alt="MCP" /></a>
  <a href="https://mcp-tool-shop-org.github.io/mcp-app-builder/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page" /></a>
</p>

# MCP App Builder

Creare server MCP con componenti di interfaccia utente interattivi, direttamente da VS Code.

## Panoramica

**MCP App Builder** aiuta gli sviluppatori a creare, testare e implementare rapidamente server MCP (Model Context Protocol). Supporta il nuovo standard **MCP Apps** (gennaio 2026), consentendo l'integrazione di componenti di interfaccia utente interattivi direttamente nelle conversazioni con l'intelligenza artificiale.

## Caratteristiche

### Impalcatura
- **Procedura guidata per la creazione di server**: Creazione di server MCP con configurazione assistita.
- **Modelli:** Configurazioni di server di base, con interfaccia utente e complete.
- **Configurazione automatica:** Supporto per TypeScript, MCP SDK e struttura del progetto.

### Sviluppo
- **Validazione dello schema:** Validazione in tempo reale dei file `mcp.json` e `mcp-tools.json`.
- **Validazione automatica al salvataggio:** Gli schemi vengono controllati automaticamente quando si salva (configurabile).
- **Generazione di tipi:** Generazione di tipi TypeScript a partire dalle definizioni degli strumenti.
- **IntelliSense:** Supporto per gli schemi JSON per i file di configurazione.

### Test
- **Ambiente di test:** Eseguire test sugli strumenti MCP.
- **Test generati automaticamente:** Test creati a partire dalle definizioni degli strumenti e dagli esempi.
- **Canale di output:** Risultati dei test formattati, con indicazione dello stato di superamento/fallimento.

### Cruscotto
- **Interfaccia grafica**: Accesso rapido a tutti i comandi.
- **Integrazione con l'ambiente di lavoro**: Rileva automaticamente i progetti MCP.
- **Barra di stato**: Indicatore MCP quando si lavora su un progetto MCP.

## Avvio rapido

1. **Installare l'estensione** dal marketplace di VS Code (disponibile prossimamente).
2. **Creare un nuovo server**: `Cmd+Shift+P` → "MCP: Nuovo server".
3. **Scegliere un modello:**
- `basic` - Server semplice con un esempio "hello world".
- `with-ui` - Server con componenti dell'interfaccia utente, tra cui tabelle e grafici.
- `full` - Server completo con strumenti, risorse e suggerimenti.

## Scorciatoie da tastiera

| Scorciatoia. | Comando. |
| Certainly. Please provide the English text you would like me to translate. | Certo, ecco la traduzione:

"Please provide the English text you would like me to translate into Italian." |
| `Ctrl+Alt+N` (su Mac: `Cmd+Alt+N`) | Nuovo server. |
| `Ctrl+Alt+V` (su Mac: `Cmd+Alt+V`) | Convalidare lo schema. |

## Comandi

| Comando. | Descrizione. |
| Certo, ecco la traduzione:

"Please provide the English text you would like me to translate into Italian." | Certo, ecco la traduzione:

"Please provide the English text you would like me to translate into Italian." |
| `MCP: New Server` | Crea un nuovo progetto per un server MCP. |
| `MCP: Validate Schema` | Verificare la validità del file mcp.json o del file mcp-tools.json corrente. |
| `MCP: Generate Types` | Generare tipi TypeScript a partire dalle definizioni degli strumenti. |
| `MCP: Test Server` | Eseguire dei test sui vostri strumenti MCP. |
| `MCP: Open Dashboard` | Aprire il pannello di controllo grafico. |

## Impostazioni

| Ambientazione. | Predefinito. | Descrizione. |
| Certo, ecco la traduzione:

"Please provide the English text you would like me to translate into Italian." | Certo, ecco la traduzione:

"Please provide the English text you would like me to translate into Italian." | Certo, ecco la traduzione:

"Please provide the English text you would like me to translate into Italian." |
| `mcp-app-builder.defaultTemplate` | `basic` | Modello predefinito per i nuovi server (base/con interfaccia utente/completo). |
| `mcp-app-builder.autoValidate` | `true` | Convalidare automaticamente gli schemi al momento del salvataggio. |
| `mcp-app-builder.testPort` | `3000` | Porta per il server di test di MCP. |

## Componenti dell'interfaccia utente per le applicazioni MCP

Questa estensione fornisce strumenti per la creazione di componenti dell'interfaccia utente per le applicazioni MCP.

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

## Struttura dei file

I progetti di server MCP generati seguono questa struttura:

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

## Sviluppo

### Prerequisiti

- Node.js versione 18 o superiore
- VS Code versione 1.85 o superiore

### Configurazione

```bash
git clone https://github.com/mcp-tool-shop-org/mcp-app-builder
cd mcp-app-builder
npm install
npm run compile
```

### Corsa

Premere il tasto `F5` in VS Code per avviare l'ambiente di sviluppo delle estensioni.

### Test

```bash
npm test
```

## Roadmap
(oppure: Piano strategico, Piano di sviluppo, Guida)

### Fase 1 (attuale) – Fondamento deterministico
- [x] Creazione di una struttura di base per il progetto con modelli predefiniti.
- [x] Sistema di validazione degli schemi.
- [x] Generazione automatica di tipi di dati a partire dagli schemi.
- [x] Elementi fondamentali per la creazione di interfacce utente.
- [x] Fondamenta per la creazione di un ambiente di test.
- [x] Interfaccia web per il pannello di controllo.

### Fase 2: Sviluppo assistito dall'intelligenza artificiale
- [ ] Generazione di strumenti di intelligenza artificiale a partire da linguaggio naturale.
- [ ] Completamento intelligente del codice per gli sviluppatori di strumenti.
- [ ] Generazione automatica della documentazione.

### Fase 3: Pubblicazione e distribuzione
- [ ] Pubblicazione con un solo clic nei registri MCP.
- [ ] Gestione delle versioni.
- [ ] Risoluzione delle dipendenze.

### Fase 4: Costruttore visivo
- [ ] Costruttore di componenti dell'interfaccia utente con funzionalità di trascinamento e rilascio.
- [ ] Anteprima in tempo reale delle applicazioni MCP.
- [ ] Editor di flussi di lavoro visuale.

## Contribuendo

Siamo lieti di ricevere contributi! Si prega di leggere le nostre linee guida per i contributi (che saranno pubblicate a breve).

## Licenza

MIT.

## Collegamenti

- [Protocollo di contesto del modello](https://modelcontextprotocol.io)
- [Specifiche delle applicazioni MCP](http://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/)
- [Organizzazione GitHub](https://github.com/mcp-tool-shop-org)

---

Realizzato con MCP App Builder.
