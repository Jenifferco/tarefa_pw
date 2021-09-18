/* IMPORTAÇÕES DE PACOTES: */
const express = require('express');

const mysqlConnection = require('./util/database');

/* CONFIGURAÇÃO DO SISTEMA DE ROTAS DA API: */
const router = express.Router();


//SELECT DA TABELA USUARIO
router.get('/list', (request, response)=>{

    mysqlConnection.query('SELECT * FROM tbl_usuarios',
        (error, rows, fields)=>{
            if (error) {
            response.json({status: 'ERRO AO SELECIONAR OS DADOS'});

            } else {
                response.json(rows);

            }
        }
    );
});


//INSERT 

router.post('/insert', (request, response)=>{

  let {nome, sobrenome, email, celular} = request.body;

  mysqlConnection.query(
        'INSERT INTO tbl_usuario (nome, sobrenome, email, celular) VALUES (?, ?, ?, ?)',
        [nome, sobrenome, email, celular],
        (error, rows, fields)=>{
            if (error) {

                response.json({status : 'Erro ao inserir os dados!'})

            } else {

                response.json({status : 'Dados inseridos com sucesso!'})

            }
        }
    );
});


/* ROTA DE ALTERAÇÃO DE DADOS DE PESSOA: (PUT) */
router.put('/alter/:cod_usuario', (request, response)=>{

  let { nome, sobrenome, email, celular} = request.body;
  let { cod_pessoa } = request.params;

  mysqlConnection.query(
      'UPDATE tbl_usuario SET nome = ?, sobrenome = ?, email = ?, celular = ? WHERE cod_pessoa = ?',
      [nome, sobrenome, email, celular, cod_pessoa],
      (error, rows, fields)=>{
          if (error) {

             response.json({status : 'Erro ao alterar os dados!'})

          } else {

             response.json({status : 'Dados alterados com sucesso!'})

            }
        }
    );
});

//delete
/* ROTA DE EXCLUSÃO DE DADOS DE PESSOA: (DELETE) */
router.delete('/delete/:cod_usuario', (request, response)=>{

  let { cod_usuario } = request.params;

  mysqlConnection.query('DELETE FROM tbl_usuario WHERE cod_usuario = ?',
                        [cod_usuario],
                        (error, rows, fields)=>{
                          if (error) {
                              console.log(error);
                          response.json({status : 'Erro ao excluir os dados!'})

                          } else {

                        response.send('EXCLUSÃO DE DADOS!');
                        response.json({status : 'Dados excluidos com sucesso!'})                        
    }
  })
});
module.exports = router;