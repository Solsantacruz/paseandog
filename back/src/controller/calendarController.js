const { Calendar, Dogs, DogOwners, PriceBono, PriceUnique, User, Walks } = require("../database");


const createCalendar = async (object) => {
    try {
      const {
        fecha,
        hora,
        detalle,
        DogOwnerId,
        DogId,
        WalkId,
        PriceUniqueId,
        PriceBonoId,
        UserId,
        AdminId,
      } = object;
  
      // Verifica que al menos un campo relacionado esté presente
      if (!(DogOwnerId || UserId || AdminId)) {
        throw new Error("Se debe proporcionar al menos un usuario, un administrador o un perro para la reserva.");
      }
  
      // Determina el performerRole en función de quién realiza la reserva
      const performerRole = UserId ? 'User' : AdminId ? 'Admin' : null;
  
      // Crea la reserva en el calendario con el performerRole determinado
      const newCalendar = await Calendar.create({
        fecha,
        hora,
        detalle,
        DogOwnerId,
        DogId,
        WalkId,
        PriceUniqueId,
        PriceBonoId,
        UserId: performerRole === 'User' ? UserId : null,
        AdminId: performerRole === 'Admin' ? AdminId : null,
        performerRole,
      });
  
      console.log("Reserva de calendario creada:", newCalendar);
  
      return newCalendar;
    } catch (error) {
      console.error("Error al crear la reserva de calendario:", error);
      throw error;
    }
  };






module.exports = {
createCalendar,
}