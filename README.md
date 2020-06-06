#  Ecoleta - Marketplace de coleta de Resíduos
##### By @rocketseat

## Objetivos

Criar um portal de reciclagem em 5 dias utilizando:
- HTML5 + CSS3
- JavaScript
- Node.js
- SQLite

## Configurações e Tecnologias necessárias

### Setup Inicial

- VS Code
- Chrome
- Node.js
- SQLite

### Configuração VS Code

- launchbase theme
- live server
- nunjucks template 
- vscode-icons

Ajustes no settings.json:

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

### Configuração Node/NPM

- npm install express
- npm install nodemon -D    
--- Serve para reiniciar o server sozinho
- npm install nunjucks  
--- serve para transformar o HTML em um arquivo inteligente (template engine)
- npm install sqlite3   
--- no mac deu bastante problema, precisei reinstalar o CLT/Xcode