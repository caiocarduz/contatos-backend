const Usuario= require("./Usuario");
module.exports =(sequelize, Datatypes) =>{
    const c = sequelize.define(
        'Contato',
        {
            nome: Datatypes.STRING(),
            email: Datatypes.STRING(),
            usuarios_id: Datatypes.INTEGER
        },

        {
            tableName: "contatos1",
            timestamps: false

        }
    );

    c.associate =(models) =>{
        c.hasMany(models.Telefone, { as:"telefones",foreignKey:'contatos_id'});
        c.belongsToMany(
            models.Usuario,
            {
                as:'colegas',
                through: 'amizades',
                foreignKey:'usuarios1_id',
                otherKey:'usuarios2_id',
                timestamps: false
            }
        )


    }

    // Telefone.hasOne(Contato);
    // Contato.belongsTo(Telefone);
    return c

}