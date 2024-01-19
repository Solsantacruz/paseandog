const { Router } = require("express");
const {
    createOwner,
    getAllOwners,
    getOwnerById,
    getByName,
} = require("../controller/dogOwners");

const router = Router();

// Crear un nuevo usuario
router.post('/', async(req, res) => {
    const {name, phone, email, address, postalCode, district, emergencyContact, avatar, AdminId } = req.body;
    console.log(req.body);
    try {
        const response = await createOwner(name, phone, email, address, postalCode, district, emergencyContact, avatar, AdminId );
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

// Obtener usuario
router.get("/", async (req, res) => {
  const {name} = req.query;
    try {
      // Si hay nombre lo busca y sino, devuelve todos los clientes. 
      const result = name ? await getByName(name) : await getAllOwners();
      console.log(req.query);
      result.length ?
        res.status(200).json(result) : res.status(404).json({error: error.message})
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  //Busqueda de cliente por ID
  router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
      const owner = await getOwnerById(id);
      res.status(200).json(owner);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  //Busqueda por nombre 
  



module.exports = router;