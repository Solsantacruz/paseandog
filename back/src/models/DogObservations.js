const { DataTypes } = require("sequelize");
//Procesos de cada perro
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
      status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
       },
       date: {
         type: DataTypes.DATEONLY,
         allowNull: false,
       }

    },

    { timestamps: false }
  );
};