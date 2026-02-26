<p align="center">
  
            <img src="https://raw.githubusercontent.com/mcp-tool-shop-org/brand/main/logos/mcp-app-builder/readme.png"
           alt="MCP App Builder" width="400" />
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/mcp-app-builder/actions/workflows/ci.yml"><img src="https://github.com/mcp-tool-shop-org/mcp-app-builder/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" />
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-1.0-green" alt="MCP" /></a>
  <a href="https://mcp-tool-shop-org.github.io/mcp-app-builder/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page" /></a>
</p>

# Constructor de aplicaciones MCP

Cree servidores MCP con componentes de interfaz de usuario interactivos, directamente desde VS Code.

## Resumen

**MCP App Builder** ayuda a los desarrolladores a crear, probar y desplegar rápidamente servidores MCP (Protocolo de Contexto de Modelo). Es compatible con el nuevo estándar **MCP Apps** (enero de 2026), lo que permite integrar componentes de interfaz de usuario interactivos directamente en las conversaciones de inteligencia artificial.

## Características

### Andamio
- **Asistente para la creación de servidores**: Cree servidores MCP con una configuración guiada.
- **Plantillas**: Configuraciones básicas, con interfaz de usuario y completas para servidores.
- **Configuración automática**: Soporte para TypeScript, el SDK de MCP y la estructura de proyectos.

### Desarrollo
- **Validación de esquemas:** Validación en tiempo real de los archivos `mcp.json` y `mcp-tools.json`.
- **Validación automática al guardar:** Los esquemas se verifican automáticamente al guardar (configurable).
- **Generación de tipos:** Genera tipos de TypeScript a partir de las definiciones de las herramientas.
- **IntelliSense:** Soporte para esquemas JSON en archivos de configuración.

### Pruebas
- **Entorno de pruebas:** Ejecute pruebas en sus herramientas de gestión de configuraciones (MCP).
- **Pruebas generadas automáticamente:** Pruebas creadas a partir de definiciones de herramientas y ejemplos.
- **Canal de salida:** Resultados de las pruebas formateados, con el estado de "aprobado/fallido".

### Panel de control
- **Interfaz visual**: Acceso rápido a todas las funciones.
- **Integración con el entorno de trabajo**: Detecta automáticamente los proyectos de MCP.
- **Barra de estado**: Indicador de MCP cuando se trabaja en un proyecto de MCP.

## Guía de inicio rápido

1. **Instale la extensión** desde el Marketplace de VS Code (próximamente).
2. **Cree un nuevo servidor:** `Cmd+Shift+P` → "MCP: Nuevo Servidor".
3. **Elija una plantilla:**
- `basic` (básico): Servidor simple de "Hola Mundo".
- `with-ui` (con interfaz de usuario): Servidor con componentes de interfaz de usuario de tablas y gráficos.
- `full` (completo): Servidor completo con herramientas, recursos y ejemplos.

## Atajos de teclado

| Atajo. | Comando. |
| Please provide the English text you would like me to translate. I am ready to translate it into Spanish. | Please provide the English text you would like me to translate. I am ready to translate it into Spanish. |
| `Ctrl+Alt+N` (en Mac, `Cmd+Alt+N`) | Nuevo servidor. |
| `Ctrl+Alt+V` (en Mac, `Cmd+Alt+V`) | Validar el esquema. |

## Comandos

| Comando. | Descripción. |
| Please provide the English text you would like me to translate. I am ready to translate it into Spanish. | Please provide the English text you would like me to translate. I am ready to translate it into Spanish. |
| `MCP: New Server` | Crear un nuevo proyecto de servidor MCP. |
| `MCP: Validate Schema` | Verificar la validez del archivo mcp.json o del archivo mcp-tools.json actual. |
| `MCP: Generate Types` | Generar tipos TypeScript a partir de definiciones de herramientas. |
| `MCP: Test Server` | Realice pruebas con sus herramientas de gestión de centros de datos. |
| `MCP: Open Dashboard` | Abrir el panel de control visual. |

## Configuración

| Escenario. | Predeterminado. | Descripción. |
| Please provide the English text you would like me to translate. I am ready to translate it into Spanish. | Please provide the English text you would like me to translate. I am ready to translate it into Spanish. | Please provide the English text you would like me to translate. I am ready to help. |
| `mcp-app-builder.defaultTemplate` | `basic` | Plantilla predeterminada para nuevos servidores (básica/con interfaz gráfica/completa). |
| `mcp-app-builder.autoValidate` | `true` | Validar automáticamente los esquemas al guardar. |
| `mcp-app-builder.testPort` | `3000` | Puerto para el servidor de pruebas de MCP. |

## Componentes de interfaz de usuario para aplicaciones MCP

Esta extensión proporciona herramientas para la creación de componentes de la interfaz de usuario de aplicaciones MCP:

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

## Estructura de archivos

Los proyectos de servidor MCP generados siguen esta estructura:

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

## Desarrollo

### Requisitos previos

- Node.js versión 18 o superior.
- VS Code versión 1.85 o superior.

### Configuración

```bash
git clone https://github.com/mcp-tool-shop-org/mcp-app-builder
cd mcp-app-builder
npm install
npm run compile
```

### Correr

Presione la tecla `F5` en VS Code para iniciar el entorno de desarrollo de extensiones.

### Pruebas

```bash
npm test
```

## Hoja de ruta.
Itinerario.
Plan estratégico.
Guía.
Directrices.
Esquema.
Plan

### Fase 1 (Actual) - Base determinista
- [x] Estructura básica de proyectos con plantillas.
- [x] Sistema de validación de esquemas.
- [x] Generación de tipos a partir de esquemas.
- [x] Componentes básicos de la interfaz de usuario.
- [x] Base para el entorno de pruebas.
- [x] Vista web del panel de control.

### Fase 2: Desarrollo asistido por inteligencia artificial
- [ ] Generación de herramientas de inteligencia artificial a partir del lenguaje natural.
- [ ] Autocompletado inteligente de código para usuarios de herramientas.
- [ ] Generación automatizada de documentación.

### Fase 3: Publicación y distribución
- [ ] Publicación con un solo clic en los registros de MCP.
- [ ] Gestión de versiones.
- [ ] Resolución de dependencias.

### Fase 4: Constructor visual
- [ ] Constructor de componentes de interfaz de usuario mediante arrastrar y soltar.
- [ ] Vista previa en tiempo real de las aplicaciones MCP.
- [ ] Editor de flujos de trabajo visual.

## Contribuyendo

¡Agradecemos sus contribuciones! Por favor, lea nuestras directrices para colaboradores (próximamente disponibles).

## Licencia

MIT.

## Enlaces

- [Protocolo de Contexto del Modelo](https://modelcontextprotocol.io)
- [Especificación de las aplicaciones MCP](http://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/)
- [Organización en GitHub](https://github.com/mcp-tool-shop-org)

---

Construido con MCP App Builder.
