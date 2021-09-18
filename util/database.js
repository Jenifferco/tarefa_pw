//IMPORTA O MODULO DE MANIPULAÇÇAO DO SGBDR MYSQL.
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({

     host: 'localhost',
     user: 'root',
     password: '',
     database: 'PW3'

});

mysqlConnection.connect( (error)=>{

    if (error) {

        console.log(`ERRO NO BANCO DE DADOS: ${error}`);
        
    } else {

        console.log('CONEXÃO EFETUADA COM SUCESSO!');
        
    }

} );

module.exports = mysqlConnection;