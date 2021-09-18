
#criacao do banco de dados 
CREATE DATABASE PW3;

#habilitar o banco
USE PW3;

#criacao das tabelas
CREATE TABLE tbl_usuario(
	cod_usuario INT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(150) NOT NULL,
    email VARCHAR(250) NOT NULL,
    celular VARCHAR(20) NOT NULL
);
ALTER TABLE tbl_usuario ADD CONSTRAINT PRIMARY KEY (cod_usuario);