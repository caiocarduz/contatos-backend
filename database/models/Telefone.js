module.exports =(sequelize, Datatypes) =>{
    const tel = sequelize.define(
        'Telefone',
        {
            numero: Datatypes.STRING(25),
            contatos_id: Datatypes.INTEGER(),
        },

        {
            tableName: "telefones",
            timestamps: false

        }
    );

    // Telefone.hasOne(Contato);
    // Contato.belongsTo(Telefone);
    return tel

}