const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(403).json({"msg": "Requisicao sem campo de autorizacao"})
    }

    let token =req.headers.authorization.replace('Bearer ', '');
    let usuario;
    try {
        usuario = jwt.verify(token, 'jacare')
        console.log(usuario)
        
    } catch (error) {
        res.status(403).json({'msg': 'token invalido'})
        
    }

    req.usuario = usuario
    next();
}