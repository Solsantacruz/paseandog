const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "DogObservations",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },

    { timestamps: false }
  );
};