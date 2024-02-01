const { User, Dog} = require('../database');
const {Sequelize} = require("sequelize");


// Controller Nuevo Cliente 
const createUser = async (name, phone, email, address ) => {
  
      const newUser = await User.create({
        name, 
        phone, 
        email, 
        address
      });
      return newUser;
    }

    // Controller llamado a todos los usuarios (paseadores)
const getAllUser = async () => {
    const user = await User.findAll({
      include: Dog,
    });
    return user;
  };

const getUserById = async (id) => {

  const userId = await User.findOne({where: {id:id}});
  return userId;
}

//busqueda por nombre
const getByName = async (name) => {
  // console.log("a ver que hay", name)
  const userName = await User.findAll({where: {name:{
    //Este metodo hace la busqueda por nombre sin importar las mayusculas y minusculas.
    [Sequelize.Op.iLike]: name 
  }}
  });
  return userName;

}



//desactivar ficha del cliente
const desactivUser = async (id, newData) => {
  await User.update( newData ,{ where: { id: id } });
  const userDesa = await User.findByPk(id);
  return userDesa;
}


//editar ficha del cliente
const updateUser = async (id, newData) => {
    // Actualiza los datos del cliente
    await User.update(newData, {
      where: { id: id },
    });
    
    // Después de la actualización, obtén los datos actualizado
    const putUser = await User.findByPk(id);
    return putUser;
  };



    module.exports = {
        createUser,
        getAllUser,
        getUserById,
        getByName,
        updateUser,
        desactivUser
    }