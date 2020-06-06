const express = require('express')
const server = express()

const db = require('./database/db')

// configurar pasta public
server.use(express.static('public'))

// habilitar o req.body
server.use(express.urlencoded({extended: true}))

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
    
    // console.log(req.query)

    return res.render('create-point.html')
})

server.post('/save-point', (req, res) => {
        
    // console.log(req.body)

    // inserir dados no db
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send('Erro no Cadastro')
        }

        console.log('Cadastrado com sucesso')
        console.log(this)

        return res.render('create-point.html', {saved: true})
    }

    db.run(query, values, afterInsertData)
})

// search-result
server.get('/search-results', (req, res) => {

    const search = req.query.search

    if(search == '') {
        return res.render('search-results.html', {total: 0})
    }

    // pegar os dados do db
    db.all(`SELECT * FROM places WHERE city like '%${search}%'`, function(err, rows) {

        if(err) {
            console.log(err)
            return res.send('Erro na Consulta')
        }
        console.log('Registros retornados com sucesso!')

        const total = rows.length

        // mostrar a página HTML com os dados do db
        return res.render('search-results.html', {places: rows, total})
    })
})

// ligar o server
server.listen(3000)