const { Router } = require("express");
const {
 createDog,
 getAllDogs,
 getDogById
} = require("../controller/dogController");

const router = Router();

// Crear un nueva ficha de perro
router.post('/', async(req, res) => {
    const {name, years, race, size, gender, weight, energyLevel, avatar, medicalDescription, behavior, status } = req.body;
    console.log(req.body);
    try {
        const response = await createDog(name, years, race, size, gender, weight, energyLevel, avatar, medicalDescription, behavior, status);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

// Obtener usuario
router.get("/", async (req, res) => {
    try {
      const users = await getAllDogs();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

 router.get("/:id", async (req, res) => {
    const { id} = req.params;
  
    try {
      const result = await getDogById(id);
  
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })




module.exports = router;