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
const AdminModels = require("./models/Admin");
const UserModels = require("./models/User");
const CalendarModels = require("./models/calendar");
const PriceUniqueModels = require("./models/PriceUnique");
const PriceBonoModels = require("./models/PriceBono");
const WalksModels = require("./models/Walks");
const BillModels = require("./models/Bill");
const CreditClientModels = require("./models/CreditClient");
const ServiceModels = require("./models/Service");

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
AdminModels(sequelize);
UserModels(sequelize);
CalendarModels(sequelize);
PriceUniqueModels(sequelize);
PriceBonoModels(sequelize);
WalksModels(sequelize);
BillModels(sequelize);
CreditClientModels(sequelize);
ServiceModels(sequelize);

const { 
  Dogs, 
  DogObservations, 
  DogOwners, 
  Admin, 
  User, 
  Calendar, 
  PriceUnique, 
  PriceBono, 
  Walks, 
  Bill, 
  CreditClient, 
  Service} = sequelize.models;



// Relaciones entre modelos

// Un administrador puede tener varios dueños de perros
Admin.hasMany(DogOwners);
DogOwners.belongsTo(Admin);

// Un dueño de perro puede tener varios perros
DogOwners.hasMany(Dogs);
Dogs.belongsTo(DogOwners);

// Un perro puede tener varias observaciones de conducta
Dogs.hasMany(DogObservations);
DogObservations.belongsTo(Dogs);

// Un paseador (User) puede tener varias reserva (Calendar)
User.hasMany(Calendar);
Calendar.belongsTo(User);

// Un cliente (DogOwners) puede tener varias reservas (Calendar)
DogOwners.hasMany(Calendar);
Calendar.belongsTo(DogOwners);

// Una reserva (Calendar) puede estar asociada a un perro (Dogs)
Calendar.belongsTo(Dogs);
Dogs.hasMany(Calendar);

// Una reserva (Calendar) puede estar asociada a un paseo (Walks)
Calendar.hasMany(Walks);
Walks.belongsTo(Calendar);

// En el modelo Calendar
Calendar.belongsTo(PriceUnique);
Calendar.belongsTo(CreditClient);

// Servicios de reserva
Service.hasMany(Calendar);
Calendar.belongsTo(Service);

Service.hasMany(Dogs);
Dogs.belongsTo(Service);


// Relacion entre cliente y pago con bonos
DogOwners.belongsToMany(PriceBono, { through: CreditClient });
PriceBono.belongsToMany(DogOwners, { through: CreditClient });
CreditClient.belongsTo(DogOwners);
CreditClient.belongsTo(PriceBono);

// Relacion entre cliente y pago unico
DogOwners.hasMany(PriceUnique);
PriceUnique.belongsTo(DogOwners);
// PriceUnique.belongsToMany(DogOwners, { through: "cliente_pago"});











  //exportamos los modelos 
module.exports = {
    Dogs, 
    DogObservations, 
    DogOwners, 
    Admin,
    User,
    Calendar,
    PriceUnique,
    PriceBono,
    Walks,
    Bill,
    CreditClient,
    Service,
    conn: sequelize,
  };