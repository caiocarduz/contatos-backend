const {Contato, sequelize} = require('../database/models');


// Telefone.findByPk(1).then(
//     u => console.log(u.toJSON())
// )

async function teste(){
    let resultado = await Contato.create({
        nome: "jose",
        email: "caio@uol.com",
        usuarios_id:1
    
    })
    let contatos = await Contato.findAll();
    console.log(contatos.map( c=> c));
    sequelize.close();

}

teste();
