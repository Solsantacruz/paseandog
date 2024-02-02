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
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      hora: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      detalle: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tipoPago: {
        type: DataTypes.ENUM('unico', 'bono'),
        allowNull: false
      },
      status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
       }
    },

    { timestamps: true }
  );
};