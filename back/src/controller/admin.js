const { Admin, Todo} = require('../database')


// Controller Nuevo Usuario 
const createUser = async (email, password) => {
  
      const newUser = await Admin.create({
        email,
        password,
      });
      return newUser;
    }

    // Controller llamado a todos los Administradores
const getAllUser = async () => {
    const admin = await Admin.findAll();
    return admin;
  };


    module.exports = {
        createUser,
        getAllUser
    }