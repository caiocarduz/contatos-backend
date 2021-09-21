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

    // Telefone.hasOne(Contato);
    // Contato.belongsTo(Telefone);
    return c

}