const { DataTypes } = require("sequelize");
// Detalles de los paseos
module.exports = (sequelize) => {
  sequelize.define(
    "Billlñ",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      observation: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      }
    },

    { timestamps: true }
  );
};