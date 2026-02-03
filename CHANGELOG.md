# Changelog

All notable changes to MCP App Builder will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-02-02

### Added

#### Scaffolding
- New Server wizard with interactive prompts
- Three templates: basic, with-ui, full
- Auto-generation of mcp.json, mcp-tools.json, TypeScript sources
- Transport selection (stdio, HTTP)

#### Schema System
- JSON Schemas for mcp.json and mcp-tools.json
- Zod-based runtime validation
- VS Code diagnostic integration
- IntelliSense support for config files

#### Type Generation
- Generate TypeScript types from mcp-tools.json
- Strongly-typed tool input interfaces
- ToolInputMap and ToolName union types
- Type-safe createToolCaller factory

#### UI Components
- 20+ primitive components (text, table, chart, form, etc.)
- Higher-level builders (dashboard, wizard, confirmation, etc.)
- MCP Apps standard compliance (January 2026)
- Event handler support for tool callbacks

#### Testing
- Test harness with output channel
- Auto-generated tests from tool definitions
- Output validation (type, contains, regex, custom)
- Test suite with pass/fail reporting

#### Dashboard
- Webview-based visual interface
- Quick action buttons for all commands
- VS Code theme integration
- Keyboard shortcuts

### Infrastructure
- VS Code extension scaffold
- TypeScript configuration
- MCP SDK integration
- Comprehensive type definitions

## [Unreleased]

### Planned
- AI-assisted tool generation
- One-click publishing
- Visual UI builder
