const { DataTypes } = require("sequelize");
//Costo y nombres de las tarifas bonos
module.exports = (sequelize) => {
  sequelize.define(
    "PriceBono",
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
      cantidadServicios: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      serviciosUtilizados: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },

    { timestamps: true }
  );
};