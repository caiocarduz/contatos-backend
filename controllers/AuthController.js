const {Usuario, sequelize} = require("../database/models");
const bodyParser = require('body-parser');
bcrypt = require('bcrypt');
const { Op } = require("sequelize");

module.exports = {
    registrar: async (req, res)=>{
       console.log('registrando...');
       let usuario ={
            nome : req.body.nome,
            email : req.body.email,
            senha : bcrypt.hashSync(req.body.senha, 10)
       }

    //    let usuarioObj = JSON.parse(usuario)
    //    let nome = req.body.nome;
    //    let email = req.body.email;
    //    let senha = req.body.senha;

       await Usuario.create(usuario)
    //    sequelize.close();

       return res.send(usuario);
    },
    login: async (req, res) => {
        console.log('logando...');
        const usuario = await Usuario.findOne({ where: { email: req.body.email } 
        
    });
        if (usuario === null) {
            res.send('Not found!');
        } else if (!bcrypt.compareSync(req.body.senha , usuario.senha))  {
            res.send( 'user exist but password is wrong')
        } else{
            res.send('user is logged in')
        }
       return res.send('logando...');
    },
    delete: async (req, res) => {
        const user_id = req.params.id;
        await Usuario.destroy({where: {
            id: user_id
        }})

        return res.send('user has been deleted')
    
    },
    update: async (req, res) => {
        const user_id = req.params.id;
        await Usuario.update({
            nome : req.body.nome,
            email : req.body.email,

        }, {
            where: {
                id : user_id
            }
        })

        return res.send('user has been updated')
    
    }
}