const {Usuario, sequelize} = require("../database/models");
const bodyParser = require('body-parser');
bcrypt = require('bcrypt');
const { Op } = require("sequelize");

module.exports = {
    registrar: async (req, res)=>{
       console.log('registrando...');
       let usuario ={
            nome : req.body.nome.toString(),
            email : req.body.email.toString(),
            senha : bcrypt.hashSync(req.body.senha.toString(), 10)
       }

    //    let usuarioObj = JSON.parse(usuario)
    //    let nome = req.body.nome;
    //    let email = req.body.email;
    //    let senha = req.body.senha;

       await Usuario.create(usuario)
       sequelize.close();

       return res.send('usuario cadastrado com sucesso');
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
    }
}