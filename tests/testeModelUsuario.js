const {Usuario, sequelize} = require('../database/models');

Usuario.findByPk(1, {include:['contatos', 'colegas']}).then(
    u => {
        console.log(u.toJSON())
        sequelize.close();
    }
);

// Usuario.create({
//     nome: "Iago",
//     email: "iago.com",
//     senha: "segredo"
// })