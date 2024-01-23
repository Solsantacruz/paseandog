const { DataTypes } = require("sequelize");
// Detalles de los paseos
module.exports = (sequelize) => {
  sequelize.define(
    "Walks",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      observation: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      }
    },

    { timestamps: true }
  );
};