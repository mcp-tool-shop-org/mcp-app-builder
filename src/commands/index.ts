import * as vscode from 'vscode';
import { OutputChannelLogger } from '../utils/logger';
import { Scaffolder } from '../scaffolding';

export function registerCommands(
    context: vscode.ExtensionContext,
    logger: OutputChannelLogger
): void {
    const scaffolder = new Scaffolder(logger);

    const commands: Array<{ id: string; handler: () => Promise<void> }> = [
        {
            id: 'mcp-app-builder.newServer',
            handler: async () => {
                logger.info('Command: New Server');

                const options = await scaffolder.promptForConfig();
                if (!options) {
                    logger.info('New Server cancelled by user');
                    return;
                }

                const result = await vscode.window.withProgress(
                    {
                        location: vscode.ProgressLocation.Notification,
                        title: 'Creating MCP Server',
                        cancellable: false,
                    },
                    async (progress) => {
                        progress.report({ message: 'Generating files...' });
                        return await scaffolder.scaffold(options);
                    }
                );

                if (result.success) {
                    const openFolder = await vscode.window.showInformationMessage(
                        `Created MCP server with ${result.filesCreated.length} files`,
                        'Open Folder',
                        'Open in New Window'
                    );

                    if (openFolder === 'Open Folder') {
                        await vscode.commands.executeCommand(
                            'vscode.openFolder',
                            options.targetFolder
                        );
                    } else if (openFolder === 'Open in New Window') {
                        await vscode.commands.executeCommand(
                            'vscode.openFolder',
                            options.targetFolder,
                            true
                        );
                    }
                } else {
                    vscode.window.showErrorMessage(
                        `Failed to create server: ${result.errors.join(', ')}`
                    );
                }
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
