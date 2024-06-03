var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

const userModel = {
    getUserIdByEmail: (email, callback) => {
        db.query(`SELECT id FROM usuario WHERE email = ${email}`, [email], (err, rows) => {
            if (err) {
                return callback(err, null);
            }
            if (rows.length === 0) {
                return callback(null, null); // Retorna null se nenhum usuário com esse email for encontrado
            }
            callback(null, rows[0].id);
        });
    },
    getUser: (userId, callback) => {
        db.query(`SELECT * FROM usuarios WHERE id = ${userId}`, [userId], (err, rows) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, rows[0]);
        });
    },
    updateUser: (userId, userData, callback) => {
        const {
            name,
            email,
            password
        } = userData;
        db.query(`UPDATE usuario SET nome = '${nome}' , email = '${email}', senha = '${senha}' WHERE id = ${userId}`, [nome, email, senha, userId], (err, result) => {
            if (err) {
                return callback(err);
            }
            callback(null);
        });
    }
};

module.exports = {
    userModel,
    autenticar,
    cadastrar
};