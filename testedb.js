const {Sequelize, QueryTypes} = require('sequelize');

const config = require('./database/config/config.json').development;


const conexao = new Sequelize(config);

//executar consulta teste

conexao.query("select * from usuarios", {type:QueryTypes.SELECT}).then(
    dados => {
        console.log(dados)
        conexao.close();
    }

);

