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

  const loginUser = async (email, password) => {
    try {
      if (!email || !password) throw new Error('Faltan Datos');
      
      const user = await Admin.findOne({ where: { email } });
  
      if (!user) throw new Error('Usuario no encontrado');
  
      const isPasswordCorrect = user.password === password;
  
      return {
        access: isPasswordCorrect,
        message: isPasswordCorrect ? 'Inicio de sesión exitoso' : 'Contraseña incorrecta',
      };
    } catch (error) {
      throw new Error(error.message);
    }
  };


    module.exports = {
        createUser,
        getAllUser,
        loginUser
    }