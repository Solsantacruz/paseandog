const { Router } = require("express");
const {
createWalk,
getWalk,
updateWalk,
desactivWalk
} = require("../controller/walksController");

const router = Router();


router.post('/', async(req, res) => {

    const {observation, CalendarId} = req.body;

    try {
        const result = await createWalk(observation, CalendarId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
})

router.get('/', async(req, res) => {
    try {
        const result = await getWalk();
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
        const result = await updateWalk(id, {...newData});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });

  router.put('/desactive/:id', async (req, res) => {
    const { id } = req.params;
    const {status, ...newData} = req.body;
    try {
     const result = await desactivWalk(id,{ ...newData, status});
      res.status(200).json(result);
    } catch (error) {
      console.log('error');
      res.status(400).send({ error: 'Desactive Fail' });
    }
  });









module.exports = router;