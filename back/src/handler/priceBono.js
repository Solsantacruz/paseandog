const { Router } = require("express");
const {
createBono,
getBono,
getByNameBono,
updateBono,
} = require("../controller/priceBonoController");

const router = Router();


router.post('/', async(req, res) => {

    const {name, cantidadServicios, precio} = req.body;

    try {
        const result = await createBono(name, cantidadServicios, precio);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
})

router.get('/', async(req, res) => {
    try {
        const result = await getBono();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
})

router.get('/', async(req, res) => {
    const {name} = req.body;
    try {
        const result = await getByNameBono(name);
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
        const result = await updateBono(id, {...newData});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });









module.exports = router;