const Contato = require("./Contato");
const Telefone = require("./Telefone");

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

    u.associate =(models) =>{
        u.hasMany(models.Contato, {as: 'contatos', foreignKey:'usuarios_id'});
        u.belongsToMany(
            models.Contato,
            {
                as:'colegas',
                through: 'amizades',
                foreignKey:'usuarios1_id',
                otherKey:'usuarios2_id',
                timestamps: false
            }
        )
    }


    // Usuario.hasOne(Contato)
    // u.hasone(models.Perfil, {as: perfil, foreignKey: 'usuarios_id'})
    // Contato.belongTo(Usuario)
    return u

}