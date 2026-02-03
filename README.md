# MCP App Builder

> VS Code extension for building MCP servers with interactive UI components

[![GitHub](https://img.shields.io/badge/GitHub-mcp--tool--shop--org-blue)](https://github.com/mcp-tool-shop-org/mcp-app-builder)
[![MCP](https://img.shields.io/badge/MCP-1.0-green)](https://modelcontextprotocol.io)

## Overview

**MCP App Builder** helps developers rapidly create, test, and deploy MCP (Model Context Protocol) servers. It supports the new **MCP Apps** standard (January 2026), enabling interactive UI components directly in AI conversations.

## Features

### Scaffolding
- **New Server Wizard**: Create MCP servers with guided setup
- **Templates**: Basic, With-UI, and Full server configurations
- **Auto-configuration**: TypeScript, MCP SDK, and project structure

### Development
- **Schema Validation**: Real-time validation of `mcp.json` and `mcp-tools.json`
- **Type Generation**: Generate TypeScript types from tool definitions
- **IntelliSense**: JSON Schema support for config files

### Testing
- **Test Harness**: Run tests against your MCP tools
- **Auto-generated Tests**: Tests created from tool definitions and examples
- **Output Channel**: Formatted test results with pass/fail status

### Dashboard
- **Visual Interface**: Quick access to all commands
- **Workspace Integration**: Detects MCP projects automatically
- **Status Bar**: MCP indicator when in an MCP project

## Quick Start

1. **Install the extension** from VS Code Marketplace (coming soon)
2. **Create a new server**: `Cmd+Shift+P` → "MCP: New Server"
3. **Choose a template**:
   - `basic` - Simple hello world server
   - `with-ui` - Server with table and chart UI components
   - `full` - Complete server with tools, resources, and prompts

## Commands

| Command | Description |
|---------|-------------|
| `MCP: New Server` | Create a new MCP server project |
| `MCP: Validate Schema` | Validate the current mcp.json or mcp-tools.json |
| `MCP: Generate Types` | Generate TypeScript types from tool definitions |
| `MCP: Test Server` | Run tests against your MCP tools |
| `MCP: Open Dashboard` | Open the visual dashboard |

## Configuration

```json
{
  "mcp-app-builder.defaultTemplate": "basic",
  "mcp-app-builder.autoValidate": true,
  "mcp-app-builder.testPort": 3000
}
```

## MCP Apps UI Components

The extension provides builders for MCP Apps UI components:

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

## File Structure

Generated MCP server projects follow this structure:

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

## Development

### Prerequisites

- Node.js 18+
- VS Code 1.85+

### Setup

```bash
git clone https://github.com/mcp-tool-shop-org/mcp-app-builder
cd mcp-app-builder
npm install
npm run compile
```

### Running

Press `F5` in VS Code to launch Extension Development Host.

### Testing

```bash
npm test
```

## Roadmap

### Phase 1 (Current) - Deterministic Foundation
- [x] Project scaffolding with templates
- [x] Schema validation system
- [x] Type generation from schemas
- [x] UI component primitives
- [x] Test harness foundation
- [x] Dashboard webview

### Phase 2 - AI-Assisted Development
- [ ] AI tool generation from natural language
- [ ] Smart code completion for tool handlers
- [ ] Automated documentation generation

### Phase 3 - Publishing & Distribution
- [ ] One-click publishing to MCP registries
- [ ] Version management
- [ ] Dependency resolution

### Phase 4 - Visual Builder
- [ ] Drag-and-drop UI component builder
- [ ] Live preview of MCP Apps
- [ ] Visual flow editor

## Contributing

Contributions are welcome! Please read our contributing guidelines (coming soon).

## License

MIT

## Links

- [Model Context Protocol](https://modelcontextprotocol.io)
- [MCP Apps Specification](http://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/)
- [GitHub Organization](https://github.com/mcp-tool-shop-org)

---

Built with MCP App Builder
