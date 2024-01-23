const { Router } = require("express");
const {
    createOwner,
    getAllOwners,
    getOwnerById,
    getByName,
    updateOwner,
    desactivOwner
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
  
//Modifica datos del cliente.
router.put("/update/:id", async (req, res) => {
  const {...newData} = req.body;
  console.log(req.body)
  const {id} = req.params;

  try {
      const result = await updateOwner(id, {...newData});
      res.status(200).json(result);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

//Ruta para desactivar ficha de cliente
router.put('/desactive/:id', async (req, res) => {
  const { id } = req.params;
  const {status, ...newData} = req.body;
  try {
   const result = await desactivOwner(id,{ ...newData, status});
    res.status(200).json(result);
  } catch (error) {
    console.log('error');
    res.status(400).send({ error: 'Desactive Fail' });
  }
});


module.exports = router;