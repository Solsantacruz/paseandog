const {CreditClient, PriceBono, DogOwners} = require('../database');
const {Sequelize } = require('sequelize')


const addCredit = async (DogOwnerId, PriceBonoId) => {
    // Obtener la información del bono
    const bono = await PriceBono.findByPk(PriceBonoId);
        console.log('bono', bono)
    // Verificar si el bono existe
    // if (!bono) {
    //     throw new Error('El bono especificado no existe.');
    // }
    
    // Crear la entrada en la tabla intermedia
    const asignacionBono = await CreditClient.create({
        DogOwnerId: DogOwnerId,
        PriceBonoId: PriceBonoId,
        usosRestantes: bono.cantidadServicios, // Establecer usos restantes como la cantidad total de servicios del bono
        createDate: new Date(), // Agregar la fecha de creación
    });

    return asignacionBono;

}


const getCredit = async () => {
    const res = await CreditClient.findAll({
        include: [{
            model: DogOwners,
            attributes: ['name'] // Incluye solo el campo 'name' de DogOwners
        },
        {
            model: PriceBono,
            attributes: ['name'] // Incluye solo el campo 'name' de PriceBono
        }]
    });
    return res;
}




module.exports = {
    addCredit,
    getCredit
}