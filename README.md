Setup Inicial
- VS Code
- Chrome
- Node.js
- SQLite

Configuração VS Code
- launchbase theme
- live server
- nunjucks template 
- vscode-icons
- ajustes no settings.json

    "files.associations": {
        "*.html": "njk"
    },
    "emmet.includeLanguages": {
        "njk": "html"
    },
    "vsicons.associations.files": [
        {"icon": "html", "extensions": ["html"], "format": "svg"}
    ],
    "workbench.iconTheme": "vscode-icons",
    "editor.minimap.enabled": false

Configuração Node/NPM
- npm install express
- npm install nodemon -D   --- Serve para reiniciar o server sozinho
- npm install nunjucks     --- serve para transformar o HTML em um arquivo inteligente (template engine)
- npm install sqlite3