// importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose()

// criar o objeto de banco de dados
const db = new sqlite3.Database('./src/database/database.db')

// permite a utilização do db em outros arquivos
module.exports = db

// variável para iniciar ou não o banco
const startDB = false
// utilizar o objeto de banco de dados para nossas operações
if (startDB) {
    db.serialize(() => {
        // criar uma tabela
        db.run(`
            CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                name TEXT,
                address TEXT,
                address2 TEXT,
                state TEXT,
                city TEXT,
                items TEXT
            );
        `)
    
        // inserir dados na tabela
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
            'https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80',
            'Colectoria',
            'Guilherme Gemballa, Jardim América',
            'Número 260',
            'Santa Catarina',
            'Rio do Sul',
            'Resíduos Eletrônicos, Lâmapdas'
        ]
    
        const values2 = [
            'https://images.unsplash.com/photo-1558583082-409143c794ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
            'Papersider',
            'Luiz Garcia, Jardim Colonial',
            'Número 350',
            'São Paulo',
            'São Paulo',
            'Papéis e Papelão'
        ]
    
        function afterInsertData(err) {
            if(err) {
                return console.log(err)
            }
    
            console.log('Cadastrado com sucesso')
            console.log(this)
        }
    
        db.run(query, values, afterInsertData)
        db.run(query, values2, afterInsertData)
    
        // consultar dados da tabela
        // db.all(`SELECT * FROM places`, function(err, rows) {
        //     if(err) {
        //         return console.log(err)
        //     }
    
        //     console.log('Aqui estão seus registros: ')
        //     console.log(rows)
        // })
    
        // deletar dados da tabela
        // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
        //     if(err) {
        //         return console.log(err)
        //     }
    
        //     console.log('Deletado com sucesso!')
        // })
    })
}
