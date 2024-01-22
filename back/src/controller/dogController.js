const { Dogs, DogOwners } = require("../database");


// Crea nueva ficha de perro
const createDog = async (name, years, race, size, gender, weight, energyLevel, avatar, medicalDescription, behavior, status, DogOwnerId) =>{

    const newDog = await Dogs.create({
        name, years, race, size, gender, weight, energyLevel, avatar, medicalDescription, behavior, status, DogOwnerId
    });
    return newDog;
};

// Trae la fichade todos los perros con la informacion
// de su dueño (cliente)
const getAllDogs = async () => {
    const dog = await Dogs.findAll({
        include: DogOwners,
    });
    return dog;
}


const getDogById = async (id) => {
    const dogId = await Dogs.findOne({where: {id:id}})
    if (!dogId) {
        throw new Error("Dog no encontrado");
      }

    return dogId;

}

//funcion para desactivar ficha de perro
const desactivDog = async (id, newData) => {
    await Dogs.update( newData ,{ where: { id: id } });
    const dogDesa = await Dogs.findByPk(id);
    return dogDesa;
  }
  
  
  //funcion para editar ficha de perro
  const updateDog = async (id, newData) => {
      // Utiliza el método update de Sequelize para modificar los datos en la base de datos
      await Dogs.update(newData, {
        where: { id: id },
      });
      
      // Después de la actualización, obtén los datos actualizado
      const putDog = await Dogs.findByPk(id);
      return putDog;
    };



module.exports = {
    createDog,
    getAllDogs,
    getDogById,
    updateDog,
    desactivDog
}