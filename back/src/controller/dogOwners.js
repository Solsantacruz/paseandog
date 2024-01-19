const { DogOwners, Dog} = require('../database');
const {Sequelize} = require("sequelize");


// Controller Nuevo Cliente 
const createOwner = async (name, phone, email, address, postalCode, district, emergencyContact, avatar, AdminId ) => {
  
      const newUser = await DogOwners.create({
        name, 
        phone, 
        email, 
        address, 
        postalCode, 
        district, 
        emergencyContact, 
        avatar,
        AdminId
      });
      return newUser;
    }

    // Controller llamado a todos los Clientes
const getAllOwners = async () => {
    const owners = await DogOwners.findAll();
    return owners;
  };

const getOwnerById = async (id) => {

  const ownerId = await DogOwners.findOne({where: {id:id}});
  return ownerId;
}

//busqueda por nombre
const getByName = async (name) => {
  // console.log("a ver que hay", name)
  const ownerName = await DogOwners.findAll({where: {name:{
    //Este metodo hace la busqueda por nombre sin importar las mayusculas y minusculas.
    [Sequelize.Op.iLike]: name 
  }}
  });
  return ownerName;

}


//Modificar datos del cliente




    module.exports = {
        createOwner,
        getAllOwners,
        getOwnerById,
        getByName,
    }