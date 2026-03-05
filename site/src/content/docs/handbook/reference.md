---
title: Reference
description: Complete reference for MCP App Builder — commands, settings, UI components, project structure, and security model.
sidebar:
  order: 2
---

This page is the full reference for every command, setting, UI component, and convention in MCP App Builder.

## Commands

All commands are accessible through the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`). They also appear in the **MCP** category when filtering.

| Command | Description | When available |
|---------|-------------|----------------|
| **MCP: New Server** | Launch the New Server Wizard to scaffold a project from a template. | Always |
| **MCP: Validate Schema** | Check the active `mcp.json` or `mcp-tools.json` against its JSON Schema. Errors appear inline and in the Problems panel. | Workspace open |
| **MCP: Generate Types** | Read `mcp-tools.json` and emit TypeScript interfaces for every tool's input and output shapes. | Workspace open |
| **MCP: Test Server** | Start the test harness on the configured port. Tests are auto-generated from the `examples` field in each tool definition. | Workspace open |
| **MCP: Open Dashboard** | Open a webview panel showing project status, detected tools, and quick-action buttons. | Workspace open |

## Settings

Configure these in VS Code's Settings UI or in `.vscode/settings.json`.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `mcp-app-builder.defaultTemplate` | `string` | `"basic"` | Which template the New Server Wizard selects by default. Options: `basic`, `with-ui`, `full`. |
| `mcp-app-builder.autoValidate` | `boolean` | `true` | When enabled, `mcp.json` and `mcp-tools.json` are validated every time you save. Disable if validation is too noisy during rapid edits. |
| `mcp-app-builder.testPort` | `number` | `3000` | The localhost port the test harness binds to. Change this if port 3000 is already in use. |

## MCP Apps UI components

The MCP Apps standard (January 2026) defines a set of interactive components that AI hosts can render inline. MCP App Builder ships builders for the most common ones.

### table

Render tabular data with optional sorting and pagination.

```typescript
import { table } from '@mcp-app-builder/ui-components';

const results = table(
  [
    { key: 'name', header: 'Name', sortable: true },
    { key: 'status', header: 'Status' },
  ],
  data,
  { pageSize: 10 }
);
```

**Parameters:**
- `columns` — array of `{ key, header, sortable? }` objects defining each column.
- `data` — array of row objects. Keys must match the column `key` values.
- `options` — optional. `{ pageSize?: number }` controls how many rows display before pagination.

### chart

Display line, bar, or area charts from numeric data.

```typescript
import { chart } from '@mcp-app-builder/ui-components';

const lineChart = chart('line', {
  labels: ['Jan', 'Feb', 'Mar'],
  series: [{ name: 'Users', values: [100, 250, 400] }],
});
```

### form

Collect structured input from users through form fields.

```typescript
import { form } from '@mcp-app-builder/ui-components';

const searchForm = form([
  { name: 'query', type: 'text', label: 'Search', required: true },
  { name: 'limit', type: 'number', label: 'Max results', default: 10 },
]);
```

### card and dashboard

Group metrics and visualizations into a summary view.

```typescript
import { dashboard } from '@mcp-app-builder/ui-components';

const overview = dashboard({
  title: 'Analytics',
  metrics: [
    { label: 'Users', value: 1234, change: 12 },
    { label: 'Revenue', value: '$5,678', change: -3 },
  ],
  chart: lineChart,
});
```

## Generated project structure

When you scaffold a new server, the extension creates this file layout:

```
my-mcp-server/
├── mcp.json           # Server identity, capabilities, transport config
├── mcp-tools.json     # Tool definitions: name, description, inputSchema, examples
├── package.json       # Node.js manifest with MCP SDK dependency
├── tsconfig.json      # TypeScript configuration (strict mode)
└── src/
    ├── index.ts       # Server entry point — registers tools and starts listening
    ├── resources.ts   # Resource handlers (full template only)
    └── prompts.ts     # Prompt handlers (full template only)
```

**Key files:**

- **`mcp.json`** — Declares the server's name, version, supported transport (stdio or HTTP), and capabilities list. The extension validates this against a bundled JSON Schema.
- **`mcp-tools.json`** — Defines every tool the server exposes: its name, description, Zod-compatible input schema, and example invocations (used by the test harness).
- **`src/index.ts`** — The runtime entry point. Imports the MCP SDK, registers tool handlers, and starts the server. This is where your business logic lives.

## Security model

MCP App Builder is designed to stay out of your way and off the network.

**What the extension accesses:**
- Workspace files: `mcp.json`, `mcp-tools.json`, generated TypeScript, and `package.json`.
- VS Code settings (read/write for extension configuration).
- Extension output channels (for test results and validation messages).
- Localhost network — only when the test harness is running, bound to the configured port.

**What the extension does NOT access:**
- Source code beyond MCP configuration files.
- Git history, credentials, or environment variables.
- External networks (no telemetry, no phone-home, no registry calls).
- Other extensions' data or workspaces.

For the full security policy, see [SECURITY.md](https://github.com/mcp-tool-shop-org/mcp-app-builder/blob/main/SECURITY.md) in the repository.
