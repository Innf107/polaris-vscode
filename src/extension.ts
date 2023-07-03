import * as vscode from 'vscode';

import * as lspclient from 'vscode-languageclient/node'
import { LanguageClient } from 'vscode-languageclient/node';

let client: lspclient.LanguageClient | null = null;

export function activate(_context: vscode.ExtensionContext) {

	const config = vscode.workspace.getConfiguration("polaris")
	const argumentString : string = config.get("lspArguments")!

	const serverOptions: lspclient.ServerOptions = {
		command: "polarislsp", 
		args: argumentString.split(" ")
	}

	const clientOptions: lspclient.LanguageClientOptions = {
		documentSelector: [{ scheme: "file", language: "polaris" }],
	}

	client = new LanguageClient("polarislsp", "Polaris Language Server", serverOptions, clientOptions);

	client.start()
}

export function deactivate() {
	if (client !== null){
		client.stop();
	}
}
