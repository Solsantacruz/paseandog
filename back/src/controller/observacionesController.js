const {Dogs, DogObservations } = require('../database');




const createObser = async (description, DogId) => {

    const ob = DogObservations.create( {description, DogId, date: new Date()});
    return ob;
}

const getObser = async () => {
    const result = DogObservations.findAll({
        include: {
            model: Dogs,
            attributes: ['name'] // Incluye solo el campo 'name' de DogOwners
        },
        
    });
    return result;
}

const getById = async (id) => {
    const result = await DogObservations.findOne({where: {id:id}})
    if (!result) {
        throw new Error("Observacion no encontrada");
      }

    return result;

}

//desactivar observacion
const desactivObser = async (id, newData) => {
    await DogObservations.update( newData ,{ where: { id: id } });
    const Desa = await Service.findByPk(id);
    return Desa;
  }



const updateObser = async (id, newData) => {
    // Actualiza los datos del cliente
    await DogObservations.update(newData, {
      where: { id: id },
    });
    
    // Después de la actualización, obtén los datos actualizado
    const newDate = await DogObservations.findByPk(id);
    return newDate;
  };



module.exports = {
    createObser,
    getObser,
    getById,
    updateObser,
    desactivObser,
}