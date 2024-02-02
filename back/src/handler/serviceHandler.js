const { Router } = require("express");
const {
createService,
getService,
getById,
getByName,
updateService,
desactivService,
} = require("../controller/serviceController");

const router = Router();


router.post('/', async(req, res) => {

    const {name} = req.body;

    try {
        const result = await createService(name);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
})

router.get("/", async (req, res) => {
    const { name } = req.query;

    try {
      const result = name ? await getByName(name) : await getService();
      console.log(req.query);
      result.length ?
        res.status(200).json(result) : res.status(404).json({error: error.message})
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

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
        const result = await updateService(id, {...newData});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });

  router.put('/desactive/:id', async (req, res) => {
    const { id } = req.params;
    const {status, ...newData} = req.body;
    try {
     const result = await desactivService(id,{ ...newData, status});
      res.status(200).json(result);
    } catch (error) {
      console.log('error');
      res.status(400).send({ error: 'Desactive Fail' });
    }
  });









module.exports = router;