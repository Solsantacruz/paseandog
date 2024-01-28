const { Router } = require("express");
const {
createUnique,
getUnique,
updatePrice
} = require("../controller/priceUniqueController");

const router = Router();


router.post('/', async(req, res) => {

    const {name, price, DogOwnerId} = req.body;

    try {
        const result = await createUnique(name, price, DogOwnerId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
})

router.get('/', async(req, res) => {
    try {
        const result = await getUnique();
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
        const result = await updatePrice(id, {...newData});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });









module.exports = router;