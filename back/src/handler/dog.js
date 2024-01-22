const { Router } = require("express");
const {
 createDog,
 getAllDogs,
 getDogById,
 desactivDog,
 updateDog
} = require("../controller/dogController");

const router = Router();

// Crear un nueva ficha de perro
router.post('/', async(req, res) => {
    const {name, years, race, size, gender, weight, energyLevel, avatar, medicalDescription, behavior, status, DogOwnerId } = req.body;
    console.log(req.body);
    try {
        const response = await createDog(name, years, race, size, gender, weight, energyLevel, avatar, medicalDescription, behavior, status, DogOwnerId);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

// Obtener perro
router.get("/", async (req, res) => {
    try {
      const perro = await getAllDogs();
      res.status(200).json(perro);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  //Busqueda por ID
 router.get("/:id", async (req, res) => {
    const { id} = req.params;
  
    try {
      const result = await getDogById(id);
  
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  //Modifica datos del perro.
router.put("/update/:id", async (req, res) => {
    const {...newData} = req.body;
    console.log(req.body)
    const {id} = req.params;

    try {
        const result = await updateDog(id, {...newData});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//Ruta para desactivar ficha de perro
router.put('/desactive/:id', async (req, res) => {
    const { id } = req.params;
    const {status, ...newData} = req.body;
    try {
     const result = await desactivDog(id,{ ...newData, status});
      res.status(200).json(result);
    } catch (error) {
      console.log('error');
      res.status(400).send({ error: 'Desactive Fail' });
    }
  });




module.exports = router;