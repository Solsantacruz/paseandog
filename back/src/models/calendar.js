const { DataTypes } = require("sequelize");
//calendario 
module.exports = (sequelize) => {
  sequelize.define(
    "Calendar",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      hora: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      detalle: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      performerRole: {
        type: DataTypes.ENUM('User', 'Admin'), // Puedes usar un ENUM para limitar los valores
        allowNull: false,
      },
      status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
       }
    },

    { timestamps: true }
  );
};