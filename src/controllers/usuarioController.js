var usuarioModel = require("../models/usuarioModel");


// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].id,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha,
                            // aquarios: resultadoAquarios
                        });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }
    //  else if (empresaId == undefined) {
    //     res.status(400).send("Sua empresa está undefined!");
    // } 
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


const userController = {
    getUserByEmail: (req, res) => {
        const {
            email
        } = req.body;

        userModel.getUserIdByEmail(email, (err, userId) => {
            if (err) {
                return res.status(500).send('Erro ao buscar usuário');
            }
            if (!userId) {
                return res.status(404).send('Usuário não encontrado');
            }

            userModel.getUser(userId, (err, user) => {
                if (err) {
                    return res.status(500).send('Erro ao buscar usuário');
                }
                res.json(user);
            });
        });
    },
    updateUser: (req, res) => {
        const {
            nome,
            email,
            senha
        } = req.body;

        userModel.getUserIdByEmail(email, (err, userId) => {
            if (err) {
                return res.status(500).send('Erro ao buscar usuário');
            }
            if (!userId) {
                return res.status(404).send('Usuário não encontrado');
            }

            userModel.updateUser(userId, {
                nome,
                email,
                senha
            }, (err) => {
                if (err) {
                    return res.status(500).send('Erro ao atualizar usuário');
                }
                res.send('Dados do usuário atualizados com sucesso');
            });
        });
    }
};




module.exports = {
    autenticar,
    cadastrar,
    getUserByEmail,   // Exporte a função diretamente aqui
    updateUser         // E a outra função também
};
