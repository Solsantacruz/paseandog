const { User, Todo} = require('../database')


// Controller Nuevo Usuario 
const createUser = async (email, password) => {
    
    //   const {name, lastName, email, password } = req.body;
      /* console.log({ profile, name, lastName, email, password }); */
  
      const newUser = await User.create({
        email,
        password,
      });
      return newUser;
    }

    // Controller llamado a todos los Administradores
const getAllUser = async () => {
    const admin = await User.findAll();
    return admin;
  };


    module.exports = {
        createUser,
        getAllUser
    }