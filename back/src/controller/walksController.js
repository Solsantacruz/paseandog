const {Walks, Calendar } = require('../database');



const createWalk = async (observation, CalendarId) => {

    const newBono = Walks.create( {observation, CalendarId, date: new Date()});
    return newBono;
}

const getWalk = async () => {
    const walk = Walks.findAll({
        include: Calendar,
      });
    return walk;
}

const updateWalk = async (id, newData) => {
    // Actualiza los datos del cliente
    await Walks.update(newData, {
      where: { id: id },
    });
    
    // Después de la actualización, obtén los datos actualizado
    const newDate = await Walks.findByPk(id);
    return newDate;
  };



module.exports = {
    createWalk,
    getWalk,
    updateWalk
}