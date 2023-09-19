/**
 * Model da tabela de Mannutenção
 */
const Manutencao = require('../models/Manutencao');

/**
 * Classe com todos os controllers do model da tabela
 * de manutenção
 */

module.exports = class ManutencaoController {

    /**
     * Controller para fazer o cadastro de novas manutenção
     */
    static async insertManutencao(req, res) {

        /**
        * Objeto com as informaçoes vindo do body
        * para serem inseridas no banco de dados
        */
        const manutencao = {
            titulo: req.body.titulo,
            cliente: req.body.cliente,
            vendedor: req.body.vendedor,
            descricao: req.body.descricao,
            valor: req.body.valor,
            email: req.body.email,
            telefone: req.body.telefone,
            km: req.body.km
        }

        await Manutencao.create(manutencao);

        res.redirect('/');
    }

    /**
     * Controller para trazer todas as manutenção
     * do cliente pelo seu email, o email chega no body da req
     */

    static async showManutencaoEmail(req, res) {
        try {

            const {email} = req.query;
            const dadosFiltrados = await Manutencao.findAll({where: {email: email}});
            res.json(dadosFiltrados);

          } catch (error) {
            
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar dados filtrados por email' });
          }
    }

    static async show(req, res) {
        const budget = await Manutencao.findAll({order: [['createdAt', 'DESC']], raw: true});
        res.json(budget);
    }
}