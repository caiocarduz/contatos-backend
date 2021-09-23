module.exports =(sequelize, Datatypes) =>{
    const c = sequelize.define(
        'Contato',
        {
            nome: Datatypes.STRING(),
            email: Datatypes.STRING(),
            usuarios_id: Datatypes.INTEGER()
        },

        {
            tableName: "contatos",
            timestamps: false

        }
    );

    c.associate =(models) =>{
        c.hasMany(models.Telefone, {as: 'telefones', foreignKey:'contatos_id'});
        c.belongsTo(models.Usuario, {as:'usuario', foreignKey:'usuarios_id'});


    }

    // Telefone.hasOne(Contato);
    // Contato.belongsTo(Telefone);
    return c

}