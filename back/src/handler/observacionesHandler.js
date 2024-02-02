const { Router } = require("express");
const {
createObser,
getObser,
getById,
updateObser,
desactivObser
} = require("../controller/observacionesController");

const router = Router();


router.post('/', async(req, res) => {

    const {description, DogId} = req.body;

    try {
        const result = await createObser(description, DogId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
})

router.get('/', async(req, res) => {
    try {
        const result = await getObser();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
})

//Busqueda por ID
router.get("/:id", async (req, res) => {
    const { id} = req.params;
  
    try {
      const result = await getById(id);
  
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

router.put("/update/:id", async (req, res) => {
    const {...newData} = req.body;
    console.log(req.body)
    const {id} = req.params;
  
    try {
        const result = await updateObser(id, {...newData});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });

  router.put('/desactive/:id', async (req, res) => {
    const { id } = req.params;
    const {status, ...newData} = req.body;
    try {
     const result = await desactivObser(id,{ ...newData, status});
      res.status(200).json(result);
    } catch (error) {
      console.log('error');
      res.status(400).send({ error: 'Desactive Fail' });
    }
  });









module.exports = router;