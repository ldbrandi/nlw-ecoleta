// npn init -m
// npm install express
// npm install nodemon -D   --- Serve para reiniciar o server sozinho
// npm install nunjucks     --- serve para transformar o HTML em um arquivo inteligente (template engine)
const express = require('express')
const server = express()

// configurar pasta public
server.use(express.static('public'))

// template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// configurar caminhos da aplicação
// pagina inicial
server.get('/', (req, res) => {
    return res.render('index.html', {
        title: 'Seu marketplace de coleta de resíduos'
    })
})
// create-point
server.get('/create-point', (req, res) => {
    return res.render('create-point.html')
})
// search-result
server.get('/search-results', (req, res) => {
    return res.render('search-results.html')
})

// ligar o server
server.listen(3000)