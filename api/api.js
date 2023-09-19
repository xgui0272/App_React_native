/**
 * Dependencias
 */
const express =  require('express');
const cors = require('cors');

const app = express();

const Manutencao = require('./models/Manutencao');

/**
 * Porta
 */

const port = 5000;



/**
 * Conexão banco de dados
 */
const db = require('./db/conn');

/**
 * Rotas
 */
const router = require('./routes/Router');

/**
 * Config Json no express
 */
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/', router);

db.sync()
.then(() => {
    app.listen(port, () => console.log(`Servidor iniciado com sucesso na porta ${port}`));
})
.catch((err) => console.log(err));



