const Contato = require("./Contato");
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

    tel.associate =(models) =>{
        tel.belongsTo(
            models.Contato, {foreignKey:'contatos_id'}
        )
    }
    


    // Telefone.hasOne(Contato);
    // Contato.belongsTo(Telefone);
    return tel

}