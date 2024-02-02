const { DataTypes } = require("sequelize");
//Costo y nombres de las tarifas
module.exports = (sequelize) => {
  sequelize.define(
    "PriceUnique",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      importe: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },

    { timestamps: true }
  );
};
