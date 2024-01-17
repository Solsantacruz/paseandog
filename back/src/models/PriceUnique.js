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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },

    { timestamps: true }
  );
};
