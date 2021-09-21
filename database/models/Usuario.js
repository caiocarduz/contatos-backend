const Contato = require("./Contato");

module.exports =(sequelize, Datatypes) =>{
    const u = sequelize.define(
        'Usuario',
        {
            nome: Datatypes.STRING(),
            email: Datatypes.STRING(),
            senha: Datatypes.STRING()
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