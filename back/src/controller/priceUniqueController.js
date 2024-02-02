const {PriceUnique, DogOwners } = require('../database');



const createUnique = async (importe, DogOwnerId) => {

  const pago = parseFloat(importe)

    const newBono = PriceUnique.create( {importe:pago}, DogOwnerId);
    return newBono;
}

const getUnique = async () => {
    const bonos = PriceUnique.findAll({
        include: DogOwners,
      });
    return bonos;
}

const updatePrice = async (id, newData) => {
    // Actualiza los datos del cliente
    await PriceUnique.update(newData, {
      where: { id: id },
    });
    
    // Después de la actualización, obtén los datos actualizado
    const newDate = await PriceUnique.findByPk(id);
    return newDate;
  };



module.exports = {
    createUnique,
    getUnique,
    updatePrice
}