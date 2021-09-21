const {Usuario} = require('../database/models');

Usuario.findByPk(1).then(
    u => console.log(u.toJSON())
)

Usuario.create({
    nome: "Iago",
    email: "iago.com",
    senha: "segredo"
})