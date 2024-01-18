const { Dogs } = require("../database");


// Crea nueva ficha de perro
const createDog = async (name, years, race, size, gender, weight, energyLevel, avatar, medicalDescription, behavior, status) =>{

    const newDog = await Dogs.create({
        name, years, race, size, gender, weight, energyLevel, avatar, medicalDescription, behavior, status
    });
    return newDog;
};

const getAllDogs = async () => {
    const dog = await Dogs.findAll();
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