const { DogOwners, User} = require('../database')


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


    module.exports = {
        createOwner,
        getAllOwners,
    }