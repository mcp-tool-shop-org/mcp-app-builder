/**
 * MCP Test Client
 *
 * A lightweight client for testing MCP servers during development.
 * This is used by the extension's test harness to simulate client interactions.
 */

import type {
    MCPServerConfig,
    MCPToolDefinition,
    MCPToolResult,
    MCPResource,
    MCPPrompt,
    MCPTransportConfig,
} from './types';

export interface MCPClientOptions {
    transport: MCPTransportConfig;
    timeout?: number;
}

export interface MCPClientState {
    connected: boolean;
    serverInfo: MCPServerConfig | null;
    lastError: Error | null;
}

export class MCPTestClient {
    private readonly options: MCPClientOptions;
    private state: MCPClientState = {
        connected: false,
        serverInfo: null,
        lastError: null,
    };

    constructor(options: MCPClientOptions) {
        this.options = {
            timeout: 30000,
            ...options,
        };
    }

    // ========================================================================
    // Connection Management
    // ========================================================================

    async connect(): Promise<MCPServerConfig> {
        // In Phase 1, we simulate connection for testing
        // Full transport implementation comes in later phases
        this.state.connected = true;

        // Return mock server info for now
        const mockServerInfo: MCPServerConfig = {
            name: 'test-server',
            version: '1.0.0',
            description: 'Test MCP Server',
            capabilities: {
                tools: true,
                resources: true,
                prompts: true,
            },
        };

        this.state.serverInfo = mockServerInfo;
        return mockServerInfo;
    }

    async disconnect(): Promise<void> {
        this.state.connected = false;
        this.state.serverInfo = null;
    }

    isConnected(): boolean {
        return this.state.connected;
    }

    getServerInfo(): MCPServerConfig | null {
        return this.state.serverInfo;
    }

    // ========================================================================
    // Tool Operations
    // ========================================================================

    async listTools(): Promise<MCPToolDefinition[]> {
        this.ensureConnected();
        // Placeholder - will be implemented with actual transport
        return [];
    }

    async callTool(
        name: string,
        args: Record<string, unknown>
    ): Promise<MCPToolResult> {
        this.ensureConnected();

        // Placeholder response
        return {
            content: [
                {
                    type: 'text',
                    text: `Tool ${name} called with args: ${JSON.stringify(args)}`,
                },
            ],
        };
    }

    // ========================================================================
    // Resource Operations
    // ========================================================================

    async listResources(): Promise<MCPResource[]> {
        this.ensureConnected();
        return [];
    }

    async readResource(uri: string): Promise<MCPResource & { content: string }> {
        this.ensureConnected();
        return {
            uri,
            name: uri.split('/').pop() || uri,
            content: '',
        };
    }

    // ========================================================================
    // Prompt Operations
    // ========================================================================

    async listPrompts(): Promise<MCPPrompt[]> {
        this.ensureConnected();
        return [];
    }

    async getPrompt(
        name: string,
        args?: Record<string, string>
    ): Promise<{ messages: Array<{ role: string; content: string }> }> {
        this.ensureConnected();
        return {
            messages: [
                {
                    role: 'user',
                    content: `Prompt ${name} with args: ${JSON.stringify(args || {})}`,
                },
            ],
        };
    }

    // ========================================================================
    // Private Helpers
    // ========================================================================

    private ensureConnected(): void {
        if (!this.state.connected) {
            throw new Error('Client is not connected. Call connect() first.');
        }
    }
}

/**
 * Factory function to create a test client with stdio transport
 */
export function createStdioTestClient(): MCPTestClient {
    return new MCPTestClient({
        transport: {
            type: 'stdio',
        },
    });
}

/**
 * Factory function to create a test client with HTTP transport
 */
export function createHttpTestClient(port: number, host = 'localhost'): MCPTestClient {
    return new MCPTestClient({
        transport: {
            type: 'http',
            options: { port, host },
        },
    });
}
