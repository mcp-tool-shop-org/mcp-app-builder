<p align="center">
  <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/mcp-app-builder/readme.png" alt="MCP App Builder" width="400" />
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/mcp-app-builder/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/mcp-app-builder/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" />
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-1.0-green" alt="MCP" /></a>
  <a href="https://mcp-tool-shop-org.github.io/mcp-app-builder/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page" /></a>
</p>

# Construtor de Aplicativos MCP

Crie servidores MCP com componentes de interface de usuário interativos – diretamente do VS Code.

## Visão geral

**MCP App Builder** auxilia os desenvolvedores a criar, testar e implantar servidores MCP (Model Context Protocol) de forma rápida. Ele suporta o novo padrão **MCP Apps** (janeiro de 2026), permitindo a integração de componentes de interface de usuário interativos diretamente em conversas de inteligência artificial.

## Características

### Andaimes
- **Assistente para criação de servidores:** Crie servidores MCP com configuração guiada.
- **Modelos:** Configurações básicas, com interface gráfica e completas para servidores.
- **Configuração automática:** Suporte para TypeScript, MCP SDK e estrutura de projetos.

### Desenvolvimento
- **Validação de Esquemas:** Validação em tempo real dos arquivos `mcp.json` e `mcp-tools.json`.
- **Validação automática ao salvar:** Os esquemas são verificados automaticamente quando você salva (configurável).
- **Geração de Tipos:** Geração de tipos TypeScript a partir das definições das ferramentas.
- **IntelliSense:** Suporte a JSON Schema para arquivos de configuração.

### Testes
- **Ambiente de Testes:** Execute testes nas suas ferramentas MCP.
- **Testes Gerados Automaticamente:** Testes criados a partir de definições de ferramentas e exemplos.
- **Canal de Saída:** Resultados dos testes formatados, com indicação de aprovação/reprovação.

### Painel de controle
- **Interface Visual:** Acesso rápido a todos os comandos.
- **Integração com o Ambiente de Trabalho:** Detecta projetos MCP automaticamente.
- **Barra de Status:** Indicador de projeto MCP quando estiver trabalhando em um projeto MCP.

## Início rápido

1. **Instale a extensão** na loja do VS Code (em breve).
2. **Crie um novo servidor:** `Cmd+Shift+P` → "MCP: Novo Servidor"
3. **Escolha um modelo:**
- `basic` - Servidor simples de "olá, mundo".
- `with-ui` - Servidor com componentes de interface de usuário, incluindo tabelas e gráficos.
- `full` - Servidor completo, com ferramentas, recursos e exemplos.

## Atalhos de teclado

| Atalho. | Comando. |
| Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. |
| `Ctrl+Alt+N` (ou `Cmd+Alt+N` no Mac). | Novo servidor. |
| `Ctrl+Alt+V` (ou `Cmd+Alt+V` no Mac). | Validar o esquema. |

## Comandos

| Comando. | Descrição. |
| Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | "Please provide the text you would like me to translate." |
| `MCP: New Server` | Crie um novo projeto de servidor MCP. |
| `MCP: Validate Schema` | Valide o arquivo mcp.json ou mcp-tools.json atual. |
| `MCP: Generate Types` | Gerar tipos TypeScript a partir de definições de ferramentas. |
| `MCP: Test Server` | Execute testes nas suas ferramentas MCP. |
| `MCP: Open Dashboard` | Abra o painel de controle visual. |

## Configurações

| Cenário. | Padrão. | Descrição. |
| Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | "Please provide the text you would like me to translate." |
| `mcp-app-builder.defaultTemplate` | `basic` | Modelo padrão para novos servidores (básico/com interface gráfica/completo). |
| `mcp-app-builder.autoValidate` | `true` | Validar automaticamente os esquemas ao salvar. |
| `mcp-app-builder.testPort` | `3000` | Porta para o servidor de teste do MCP. |

## Componentes de interface de usuário para aplicativos MCP

A extensão oferece ferramentas para a criação de componentes de interface de usuário (UI) para aplicativos MCP:

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

## Estrutura de arquivos

Os projetos de servidor MCP gerados seguem esta estrutura:

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

## Desenvolvimento

### Pré-requisitos

- Node.js versão 18 ou superior
- VS Code versão 1.85 ou superior

### Configuração

```bash
git clone https://github.com/mcp-tool-shop-org/mcp-app-builder
cd mcp-app-builder
npm install
npm run compile
```

### Corrida

Pressione a tecla `F5` no VS Code para iniciar o ambiente de desenvolvimento de extensões.

### Testes

```bash
npm test
```

## Roteiro.
Plano de ação.
Cronograma.
Mapa de estradas.
(Dependendo do contexto, pode também ser traduzido como "Guia" ou "Diretrizes".)

### Fase 1 (Atual) – Base Determinística
- [x] Criação de estruturas de projeto com modelos.
- [x] Sistema de validação de esquemas.
- [x] Geração de tipos a partir de esquemas.
- [x] Elementos básicos para componentes de interface do usuário.
- [x] Base para a estrutura de testes.
- [x] Visualização web do painel de controle.

### Fase 2: Desenvolvimento assistido por inteligência artificial
- [ ] Geração de ferramentas de inteligência artificial a partir de linguagem natural.
- [ ] Sugestões inteligentes de código para usuários de ferramentas.
- [ ] Geração automática de documentação.

### Fase 3 – Publicação e Distribuição
- [ ] Publicação com um único clique nos registros do MCP.
- [ ] Gerenciamento de versões.
- [ ] Resolução de dependências.

### Fase 4 – Construtor Visual
- [ ] Construtor de componentes de interface gráfica por arrastar e soltar.
- [ ] Visualização em tempo real de aplicativos MCP.
- [ ] Editor de fluxos de trabalho visual.

## Contribuindo

Aceitamos contribuições! Por favor, leia nossas diretrizes de contribuição (que serão disponibilizadas em breve).

## Licença

MIT.

## Links

- [Protocolo de Contexto do Modelo](https://modelcontextprotocol.io)
- [Especificação de Aplicações MCP](http://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/)
- [Organização no GitHub](https://github.com/mcp-tool-shop-org)

---

Criado por <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
