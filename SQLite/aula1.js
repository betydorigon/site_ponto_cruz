const sqlite3 = require('sqlite3').verbose()

//Conecta ao banco de dados(ou cria es não existir)
const db = new sqlite3.Database('./meu_banco.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }

    db.run(`
    CREATE TABLE IF NOT EXISTS clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        idade INTEGER
        )
        `, (err) => {
        if (err) {
            console.error('Erro ao criar a tabela', err.message);
        } else {
            console.log('Tabela "clientes" criada com sucesso.');
        }
    })

    // db.run(`
    //     INSERT INTO clientes (nome,idade)
    //     VALUES ('Elisabete', 30), ('Diego', 35)
    //     `, function(err){
    //         if(err){
    //             console.error('Erro ao inserir dados', err.message);
    //         }else {
    //             console.log('Dados inseridos com sucesso. ID do último registro: ${this.lastID}');
    //         }
    //     })

    db.all('SELECT * FROM clientes', (err, rows) => {
        if (err) {
            console.error('Erro ao consultar dados', err.message);
        } else {
            console.log('Dados da tabela "clientes":');
            rows.forEach((row) => {
                console.log(`ID: ${row.id}, Nome: ${row.nome}, Idade: ${row.idade}`);
            })
        }
    })

    db.all('SELECT * FROW clientes WHERE idade > 25 ORDER BY nome', (err, rows) => {
        if (err) {
            console.error('Erro ao consultar dados', err.message);
        } else {
            console.log('Clients com mais de 25 anos, ordenados por nome:');
            rows.forEach((row) => {
                console.log(`ID: ${row.id}, Nome: ${row.nome}, Idade: ${row.idade}`);
            })
        }
    })

    db.run(`
                UPDATE clientes
                SET nome = 'Rafael'
                WHERE id = 3
                `, function (err) {
        if (err) {
            console.error('Erro ao atualizar dados', err.message);
        } else {
            console.log('Dados atualizados com sucesso.');
        }
    })

    db.run(`
                    UPDATE clientes
                    SET nome = 'Ana Clara'
                    WHERE id = 4
                    `, function (err) {
        if (err) {
            console.error('Erro ao atualizar dados', err.message);
        } else {
            console.log('Dados atualizados com sucesso.');
        }
    })

    db.run(`
                        UPDATE clientes
                        SET nome = 'Sophia'
                        WHERE id = 7
                        `, function (err) {
        if (err) {
            console.error('Erro ao atualizar dados', err.message);
        } else {
            console.log('Dados atualizados com sucesso.');
        }
    })

    db.run(`
                            UPDATE clientes
                            SET nome = 'Raziel'
                            WHERE id = 8
                            `, function (err) {
        if (err) {
            console.error('Erro ao atualizar dados', err.message);
        } else {
            console.log('Dados atualizados com sucesso.');
        }
    })

    db.run(`
                                DELETE FROM clientes
                                WHERE id = 9
                                `, function (err) {
        if (err) {
            console.error('Erro ao excluir dados', err.message);
        } else {
            console.log('Dados excluídos com sucesso.');
        }
    })

    db.run(`
                                    DELETE FROM clientes
                                    WHERE id = 12 
                                    `, function (err) {
        if (err) {
            console.error('Erro ao excluir dados', err.message);
        } else {
            console.log('Dados excluídos com sucesso.');
        }
    })









});