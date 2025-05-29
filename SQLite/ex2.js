const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./livro.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Criando a tabela
db.run(`
    CREATE TABLE IF NOT EXISTS livro (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        autor TEXT,
        ano_publicacao INTEGER DEFAULT 0
    )
`, (err) => {
    if (err) {
        console.error('Erro ao criar a tabela', err.message);
    } else {
        console.log('Tabela "livro" criada com sucesso.');
    }
});

// Inserindo dados
db.run(`
    INSERT INTO livro (titulo, autor, ano_publicacao)
    VALUES 
        ("Dom Casmurro", "Machado de Assis", 1899), 
        ("1984", "George Orwell", 1949),
        ("O Senhor dos Anéis", "J.R.R. Tolkien", 1954), 
        ("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997)
`, function(err) {
    if (err) {
        console.error('Erro ao inserir dados', err.message);
    } else {
        console.log(`Dados inseridos com sucesso. ID do último registro: ${this.lastID}`);
    }
});
