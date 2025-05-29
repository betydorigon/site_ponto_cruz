const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./tarefas.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }

    db.run(`
        CREATE TABLE IF NOT EXISTS tarefas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            descrição TEXT NOT NULL,
            concluída INTEGER DEFAULT 0
            )
            `, (err) => {
            if (err) {
                console.error('Erro ao criar a tabela', err.message);
            } else {
                console.log('Tabela "tarefas" criada com sucesso.');
            }
        })

        // db.run(`
        //         INSERT INTO tarefas (descrição, concluída)
        //          VALUES ("Estudar SQLite", 0), ("Fazer exercícios de Node.js", 1),("Ler um livro" , 0)
        //          `, function(err){
        //             if(err){
        //                 console.error('Erro ao inserir dados', err.message);
        //             }else {
        //                 console.log('Dados inseridos com sucesso. ID do último registro: ${this.lastID}');
        //             }
        //         })

                db.all('SELECT * FROM tarefas', (err, rows) => {
                    if (err) {
                        console.error('Erro ao consultar dados', err.message);
                    } else {
                        console.log('Dados da tabela "tarefas":');
                        rows.forEach((row) => {
                            console.log(`ID: ${row.id}, Descrição: ${row.descrição}, Concluída: ${row.concluída}`);
                        })
                    }
                })

                db.all('SELECT * FROW tarefas WHERE concluída = 0', (err, rows) => {
                    if (err) {
                        console.error('Erro ao consultar dados', err.message);
                    } else {
                        console.log('Tarefas Concluídas');
                        rows.forEach((row) => {
                            console.log(`ID: ${row.id}, Descrição: ${row.descrição}, Concluída: ${row.concluída}`);
                        })
                    }
                })
    
   

});