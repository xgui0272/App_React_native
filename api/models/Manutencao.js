/**
 * Import da biblioteca sequelize responsavel pelos models
 */
const {DataTypes} = require('sequelize');

/**
 * Conexão com o banco de dados
 */
const db = require('../db/conn');


/*
 *Model da tabela de registro de manutençoes
 */
const Manutencao = db.define('Manutencao', {
    titulo: {
        type: DataTypes.STRING,
        required: true
    },
    cliente: {
        type: DataTypes.STRING,
        required: true
    },
    vendedor: {
        type: DataTypes.STRING,
        required: true
    },
    descricao: {
        type: DataTypes.STRING,
        required: true
    },
    valor: {
        type: DataTypes.DECIMAL(10, 2),
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    telefone: {
        type: DataTypes.STRING,
        required: true
    },
    km: {
        type: DataTypes.DECIMAL,
        required: true
    },
    
});

module.exports = Manutencao;
