const { DataTypes } = require("sequelize");
//Procesos de cada perro
module.exports = (sequelize) => {
  sequelize.define(
    "Service",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
       },

    },

    { timestamps: false }
  );
};