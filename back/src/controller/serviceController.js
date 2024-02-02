const {Service, Calendar } = require('../database');
const { Sequelize} = require('sequelize');



const createService = async (name) => {

    const ob = Service.create({name});
    return ob;
}

const getService = async () => {
    const result = Service.findAll({
        include: Calendar,
      });
    return result;
}

//busqueda por nombre
const getByName = async (name) => {
    // console.log("a ver que hay", name)
    const nameSer = await Service.findAll({where: {name:{
      //Este metodo hace la busqueda por nombre sin importar las mayusculas y minusculas.
      [Sequelize.Op.iLike]: name 
    }}
    });
    return nameSer;
  
  }


const getById = async (id) => {

    const serviceId = await Service.findOne({where: {id:id}});
    return serviceId;
  }

  //desactivar servicio
const desactivService = async (id, newData) => {
    await Service.update( newData ,{ where: { id: id } });
    const Desa = await Service.findByPk(id);
    return Desa;
  }

const updateService = async (id, newData) => {
    // Actualiza los datos
    await Service.update(newData, {
      where: { id: id },
    });
    
    // Después de la actualización, obtén los datos actualizado
    const newDate = await Service.findByPk(id);
    return newDate;
  };



module.exports = {
    createService,
    getService,
    getByName,
    getById,
    updateService,
    desactivService
}