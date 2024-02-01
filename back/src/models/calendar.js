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
        type: DataTypes.DATE,
        allowNull: false,
      },
      detalle: {
        type: DataTypes.TEXT,
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