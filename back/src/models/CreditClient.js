const { DataTypes } = require("sequelize");
//Costo y nombres de las tarifas bonos
module.exports = (sequelize) => {
  sequelize.define(
    "CreditClient",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      usosRestantes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, 
      },
      createDate: {
        type: DataTypes.DATE,
        allowNull: false, // Llevara la fecha de registro para luego desactivarla pasado los 30 dias(por ejemplo)
      },
    },

    { timestamps: true }
  );
};