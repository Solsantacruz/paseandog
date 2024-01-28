const {PriceBono } = require('../database');
const {Sequelize} = require('sequelize');



const createBono = async (name, cantidadServicios, precio) => {
    const newBono = PriceBono.create({name, cantidadServicios, precio});
    return newBono;
}

const getBono = async () => {
    const bonos = await PriceBono.findAll();
    return bonos;
}

const getByNameBono = async (name) => {
    const bonoName = PriceBono.findAll({where: {name:{
        //Este metodo hace la busqueda por nombre sin importar las mayusculas y minusculas.
        [Sequelize.Op.iLike]: name 
      }}
      })
      return bonoName;
}

const updateBono = async (id, newData) => {
    // Actualiza los datos del cliente
    await PriceBono.update(newData, {
      where: { id: id },
    });
    
    // Después de la actualización, obtén los datos actualizado
    const newDate = await PriceBono.findByPk(id);
    return newDate;
  };


module.exports = {
    createBono,
    getBono,
    getByNameBono,
    updateBono
}