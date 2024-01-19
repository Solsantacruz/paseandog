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



module.exports = {
    createDog,
    getAllDogs,
    getDogById
}