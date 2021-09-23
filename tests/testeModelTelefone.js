const {Telefone, sequelize} = require('../database/models');

// Telefone.findByPk(1).then(
//     u => console.log(u.toJSON())
// )

async function teste(){
    let resultado = await Telefone.create({
        numero: '998889999',
        contatos_id: 2
    
    })
    let telefones = await Telefone.findAll();
    console.log(telefones.map( c=> c));
    sequelize.close();

}

teste();