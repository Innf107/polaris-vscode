# Polaris

Syntax highlighting for the [Polaris Programming Language](https://github.com/Innf107/polaris).

## Features

Syntax Highlighting for `.pol` and `.polaris` files.

## Build Instructions
To build and install polaris-vscode, first install `vsce` (This has to be executed as root)
```
npm install -g vsce
```
To create the package `.vsix` file, run
```
vsce package
```
This will generate a file called `polaris-<version>.vsix`.

In Visual Studio Code, press `Ctrl + P` to open the command prompt, type in
```
>Extensions: Install from VSIX
```
and select the generated `polaris-<version>.vsix` file.

Now reload vscode via
```
>Developer: Reload Window
```
