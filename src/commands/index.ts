import * as vscode from 'vscode';
import { OutputChannelLogger } from '../utils/logger';

export function registerCommands(
    context: vscode.ExtensionContext,
    logger: OutputChannelLogger
): void {
    const commands: Array<{ id: string; handler: () => Promise<void> }> = [
        {
            id: 'mcp-app-builder.newServer',
            handler: async () => {
                logger.info('Command: New Server');
                vscode.window.showInformationMessage('MCP: New Server - Coming in next commit');
            },
        },
        {
            id: 'mcp-app-builder.validateSchema',
            handler: async () => {
                logger.info('Command: Validate Schema');
                vscode.window.showInformationMessage('MCP: Validate Schema - Coming soon');
            },
        },
        {
            id: 'mcp-app-builder.generateTypes',
            handler: async () => {
                logger.info('Command: Generate Types');
                vscode.window.showInformationMessage('MCP: Generate Types - Coming soon');
            },
        },
        {
            id: 'mcp-app-builder.testServer',
            handler: async () => {
                logger.info('Command: Test Server');
                vscode.window.showInformationMessage('MCP: Test Server - Coming soon');
            },
        },
        {
            id: 'mcp-app-builder.openDashboard',
            handler: async () => {
                logger.info('Command: Open Dashboard');
                vscode.window.showInformationMessage('MCP: Dashboard - Coming soon');
            },
        },
    ];

    for (const { id, handler } of commands) {
        const disposable = vscode.commands.registerCommand(id, async () => {
            try {
                await handler();
            } catch (error) {
                logger.error(`Command ${id} failed`, error);
                vscode.window.showErrorMessage(
                    `MCP App Builder: Command failed. See output for details.`
                );
            }
        });
        context.subscriptions.push(disposable);
        logger.debug(`Registered command: ${id}`);
    }
}
