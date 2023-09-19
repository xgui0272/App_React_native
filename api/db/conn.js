/**
 * Sequelize
 */

const {Sequelize, OptimisticLockError} = require('sequelize');

/**
 * Dados para a conexão com o Mysql
 */

const sequelize = new Sequelize('app', 'root', 'senha-de-root', {
    host: 'localhost',
    dialect: 'mysql'
});

/**
 * Autenticando a conexão!
 */

try {
    sequelize.authenticate();
    console.log('Conectado com sucesso ao banco de dados!');
} catch (error) {
    console.log(`Não foi possivel conectar ${error}`);
}

module.exports = sequelize;


