const { DogOwners, User} = require('../database')


// Controller Nuevo Cliente 
const createOwner = async (name, phone, email, address, postalCode, district, emergencyContact, avatar, UserId ) => {
  
      const newUser = await DogOwners.create({
        name, 
        phone, 
        email, 
        address, 
        postalCode, 
        district, 
        emergencyContact, 
        avatar,
        UserId
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