const { Calendar, CreditClient, Walks, PriceUnique, Dogs, DogOwners, User, Service } = require("../database");




const createCalendar = async (object) => {
  try {
      const { fecha, hora, detalle, DogOwnerId, DogId, UserId, tipoPago, importe, bonoId, ServiceId } = object;

      const pago = parseFloat(importe)

      let calendarData = {
          fecha,
          hora,
          detalle,
          DogOwnerId,
          DogId,
          UserId,
          tipoPago,
          ServiceId
          
      };

      if (tipoPago === 'unico') {
          // Pago único
          const priceUnique = await PriceUnique.create({ importe: pago, DogOwnerId });
          calendarData.PriceUniqueId = priceUnique.id;
      } else if (tipoPago === 'bono') {
          // Pago con bono
          const creditClient = await CreditClient.findByPk(bonoId);
          if (!creditClient) {
              throw new Error('No se encontró el bono especificado.');
          }
          // Decrementa el contador de usos restantes en el bono
  if (creditClient.usosRestantes > 0) {
    await creditClient.update({ usosRestantes: creditClient.usosRestantes - 1 });
  } else {
    throw new Error("El bono no tiene usos restantes.");
  }
          calendarData.CreditClientId = creditClient.id;
      } else {
          throw new Error('Tipo de pago no válido.');
      }

      const calendar = await Calendar.create(calendarData);
      return calendar;
  } catch (error) {
      throw error;
  }
};

const getAllCalendar = async () => {

  const allCalendar = await Calendar.findAll(
    {
      include: [{
          model: DogOwners,
          attributes: ['name'] // Incluye solo el campo 'name' de DogOwners
      },
      {
          model: Dogs,
          attributes: ['name'] // Incluye solo el campo 'name' de PriceBono
      },
      {
          model: CreditClient,
          attributes: ['usosRestantes'] // Incluye solo el campo 'name' de PriceBono
      },
      {
          model: PriceUnique,
          attributes: ['importe'] // Incluye solo el campo 'name' de PriceBono
      },
      {
          model: User,
          attributes: ['name'] // Incluye solo el campo 'name' de PriceBono
      },
      {
        model: Walks,
        attributes: ['id','observation', 'date' ]
    },
    {
        model: Service,
        attributes: ['name'] 
    },
    
    ]
  }
  );


  return allCalendar;
}

const getReserById = async (id) => {

  const reserId = await Calendar.findOne({where: {id:id},
    
      include: [{
          model: DogOwners,
          attributes: ['name'] // Incluye solo el campo 'name' de DogOwners
      },
      {
          model: Dogs,
          attributes: ['name'] 
      },
      {
          model: CreditClient,
          attributes: ['usosRestantes'] 
      },
      {
          model: PriceUnique,
          attributes: ['importe'] 
      },
      {
          model: User,
          attributes: ['name']
      },
      {
          model: Walks,
          attributes: ['observation']
      },
      {
          model: Service,
          attributes: ['name'] // Incluye solo el campo 'name' de PriceBono
      },
    
    ]
  });
  return reserId;
}



const upDate = async (id, newData) => {
  // Actiualiza los datos de la reserva
  await Calendar.update(newData, {
      where: { id: id },
    });
    
    // Después de la actualización, obtén los datos actualizado
    const putCredit = await CreditClient.findByPk(id);
    return putCredit;
}

const desactiveReser = async (id, newData) => {
  await Calendar.update( newData ,{ where: { id: id } });
  const planDesa = await Calendar.findByPk(id);
  return planDesa;
}









module.exports = {
createCalendar,
getAllCalendar,
getReserById,
upDate,
desactiveReser
}