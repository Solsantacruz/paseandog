const { Router } = require("express");
const {
 addCredit,
 getCredit
} = require("../controller/creditClientController");

const router = Router();


router.post('/', async(req, res) => {
    const {DogOwnerId, PriceBonoId} = req.body;
    // console.log(req.body);
    try {
        const result = await addCredit(DogOwnerId, PriceBonoId);

        res.status(200).json(result);
        console.log("result",result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/', async(req, res) => {
    try {
        const result = await getCredit();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})






module.exports = router;