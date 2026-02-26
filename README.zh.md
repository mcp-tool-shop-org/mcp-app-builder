<p align="center">
  <img src="assets/logo.png" alt="MCP App Builder" width="400" />
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/mcp-app-builder/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/mcp-app-builder/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" />
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-1.0-green" alt="MCP" /></a>
  <a href="https://mcp-tool-shop-org.github.io/mcp-app-builder/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page" /></a>
</p>

# MCP 应用构建器

使用交互式用户界面组件，从 VS Code 中构建 MCP 服务器。

## 概述

**MCP 应用构建器** 帮助开发者快速创建、测试和部署 MCP（模型上下文协议）服务器。它支持新的 **MCP 应用** 标准（2026年1月），从而可以在人工智能对话中直接集成交互式用户界面组件。

## 功能特点

### 脚手架
- **新服务器向导：** 通过引导设置创建 MCP 服务器。
- **模板：** 提供基础、带用户界面以及完整配置的服务器模板。
- **自动配置：** 支持 TypeScript、MCP SDK 以及项目结构。

### 发展
- **模式验证：** 实时验证 `mcp.json` 和 `mcp-tools.json` 文件。
- **自动验证：** 保存时自动进行模式检查（可配置）。
- **类型生成：** 从工具定义生成 TypeScript 类型。
- **智能感知：** 支持 JSON Schema，用于配置文件。

### 测试
- **测试框架：** 用于对您的 MCP 工具进行测试。
- **自动生成的测试：** 基于工具定义和示例生成的测试。
- **输出通道：** 格式化的测试结果，包含通过/失败状态。

### 仪表盘
- **可视化界面：** 快速访问所有命令。
- **工作区集成：** 自动检测 MCP 项目。
- **状态栏：** 在 MCP 项目中，状态栏会显示 MCP 指示器。

## 快速入门指南

1. **安装扩展程序**：从 VS Code 市场下载（即将上线）。
2. **创建新的服务器**：按下 `Cmd+Shift+P` 组合键，然后选择 "MCP: 创建新服务器"。
3. **选择模板**：
- `basic`：一个简单的 "Hello, World" 服务器。
- `with-ui`：带有表格和图表用户界面的服务器。
- `full`：一个完整的服务器，包含工具、资源和提示。

## 键盘快捷键

| 快捷方式 | 命令。 |
| 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 |
| `Ctrl+Alt+N` (在 macOS 系统上为 `Cmd+Alt+N`)。 | 新服务器。 |
| `Ctrl+Alt+V` (在 macOS 系统上为 `Cmd+Alt+V`)。 | 验证模式。 |

## 命令

| 命令。 | 描述。 |
| 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 |
| `MCP: New Server` | 创建一个新的 MCP 服务器项目。 |
| `MCP: Validate Schema` | 验证当前的 mcp.json 或 mcp-tools.json 文件。 |
| `MCP: Generate Types` | 从工具定义中生成 TypeScript 类型。 |
| `MCP: Test Server` | 对您的 MCP 工具进行测试。 |
| `MCP: Open Dashboard` | 打开可视化仪表盘。 |

## 设置

| 场景设置。 | 默认设置。 | 描述。 |
| 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 |
| `mcp-app-builder.defaultTemplate` | `basic` | 新服务器的默认模板（基础版/带UI版/完整版）。 |
| `mcp-app-builder.autoValidate` | `true` | 自动在保存时验证模式。 |
| `mcp-app-builder.testPort` | `3000` | 用于MCP测试服务器的端口。 |

## MCP应用程序用户界面组件

该扩展提供了用于构建 MCP 应用用户界面组件的工具。

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

## 文件结构

生成的 MCP 服务器项目遵循以下结构：

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

## 发展

### 先决条件

- Node.js 18.0 及以上版本
- VS Code 1.85 及以上版本

### 设置

```bash
git clone https://github.com/mcp-tool-shop-org/mcp-app-builder
cd mcp-app-builder
npm install
npm run compile
```

### 跑步

在 VS Code 中，按下 `F5` 键可以启动扩展开发主机。

### 测试

```bash
npm test
```

## 路线图

### 第一阶段（当前阶段）- 确定性基础
- [x] 基于模板的项目脚手架
- [x] 模式验证系统
- [x] 从模式生成类型定义
- [x] 用户界面组件基础
- [x] 测试框架基础
- [x] 面板式Web视图

### 第二阶段：人工智能辅助开发
- [ ] 通过自然语言生成人工智能工具。
- [ ] 为工具操作者提供智能代码补全功能。
- [ ] 自动生成文档。

### 第三阶段：出版与发行
- [ ] 一键发布到 MCP 注册中心。
- [ ] 版本管理。
- [ ] 依赖项解析。

### 第四阶段 - 视觉化构建工具
- [ ] 可通过拖放方式构建用户界面组件。
- [ ] 提供 MCP 应用的实时预览功能。
- [ ] 具有可视化流程编辑器。

## 贡献

欢迎您的贡献！请阅读我们的投稿指南（即将发布）。

## 许可

麻省理工学院。

## 链接

- [模型上下文协议](https://modelcontextprotocol.io)
- [MCP 应用规范](http://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/)
- [GitHub 组织](https://github.com/mcp-tool-shop-org)

---

使用 MCP 应用构建器构建。
