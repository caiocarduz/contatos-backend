const {Usuario, Contato, Telefone, sequelize} = require("../database/models");
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
       try {
            await Usuario.create(usuario)
        //    sequelize.close();
           return res.status(201).json(usuario);
           
       } catch (error) {
           return res.status(403).json({error: 1, msg: 'usuario ja cadastrado'})
           
       }
    },
    login: async (req, res) => {
        console.log('logando...');
        const usuario = await Usuario.findOne({ where: { email: req.body.email } 
        
    });
        if (usuario === null) {
            res.status(403).json({error: 1, msg:'Acesso negado'});
        } else if (!bcrypt.compareSync(req.body.senha , usuario.senha))  {
            res.status(409).json({error:1, msg:'Acesso negado'})
        } else{
            res.status(201).json({error: 1, msg:'user is logged in'})
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
    
    },
    contato: async (req, res) => {
      const c = await Contato.findOne({
            where: {
                nome: req.body.nome
            },
            include : "telefones"
        });
        return res.send(c)
    
    }
}