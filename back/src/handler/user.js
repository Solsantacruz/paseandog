const { Router } = require("express");
const {
  createUser,
  getAllUser,
  getByName,
  getUserById,
  updateUser,
  desactivUser
} = require("../controller/userController");

const router = Router();

// Crear un nuevo usuario
router.post('/', async(req, res) => {
    const {name, phone, email, address } = req.body;
    console.log(req.body);
    try {
        const response = await createUser(name, phone, email, address);
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
        const result = name ? await getByName(name) : await getAllUser();
        // console.log(req.query);
        result.length ?
          res.status(200).json(result) : res.status(404).json({error: error.message})
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    //Busqueda de user por ID
  router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
      const owner = await getUserById(id);
      res.status(200).json(owner);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

 //Modifica datos del paseador(user).
router.put("/update/:id", async (req, res) => {
    const {...newData} = req.body;
    console.log(req.body)
    const {id} = req.params;
  
    try {
        const result = await updateUser(id, {...newData});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  //Ruta para desactivar ficha de paseador(user)
  router.put('/desactive/:id', async (req, res) => {
    const { id } = req.params;
    const {status, ...newData} = req.body;
    try {
     const result = await desactivUser(id,{ ...newData, status});
      res.status(200).json(result);
    } catch (error) {
      console.log('error');
      res.status(400).send({ error: 'Desactive Fail' });
    }
  });





module.exports = router;