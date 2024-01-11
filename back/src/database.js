require("dotenv").config();
require("pg");
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
//Para trabajo local
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_BASE } = process.env;
//para deploy
// const { DB_DEPLOY } = process.env;
const DogsModels = require("./models/Dogs");
const DogObservationsModels = require("./models/DogObservations");
const DogOwnersModels = require("./models/DogOwners");
const UserModels = require("./models/User");



// Para conexion local
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BASE}`,
  { logging: false, native: false }
);

//conexion deploy
// const sequelize = new Sequelize(
//     DB_DEPLOY,
//     { logging: false,
//       native: false,
//       dialectOptions: {
//         ssl: {
//           require: true,
//           rejectUnauthorized: false, // Solo para desarrollo local. En producción, configúralo correctamente.
//         },
//       },
//     }
//   );


DogsModels(sequelize);
DogObservationsModels(sequelize);
DogOwnersModels(sequelize);
UserModels(sequelize);

const { Dogs, DogObservations, DogOwners, User} = sequelize.models;


// Se define las relaciones
User.hasMany(DogOwners);
DogOwners.hasMany(Dogs);
// Dogs.hasOne(DogOwners);
Dogs.hasMany(DogObservations);
DogObservations.hasOne(Dogs);




  //exportamos los modelos 
module.exports = {
    Dogs, 
    DogObservations, 
    DogOwners, 
    User,
    conn: sequelize,
  };