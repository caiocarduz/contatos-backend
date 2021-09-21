const Contato = require("./Contato");

module.exports =(sequelize, Datatypes) =>{
    const u = sequelize.define(
        'Usuario',
        {
            nome: Datatypes.STRING(45),
            email: Datatypes.STRING(45),
            senha: Datatypes.STRING(45)
        },

        {
            tableName: "usuarios",
            timestamps: false

        }
    );

    // Usuario.hasOne(Contato)
    // Contato.belongTo(Usuario)
    return u

}