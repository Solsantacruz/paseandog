const { Router } = require("express");
const {
  createCalendar,
  getAllCalendar,
  desactiveReser,
  upDate
} = require("../controller/calendarController.js");

const router = Router();

// Crear una reserva
router.post('/', async(req, res) => {
    const object = req.body;
    console.log(req.body);
    try {
        const response = await createCalendar(object);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

// Obtener reserva
router.get("/", async (req, res) => {
    try {
      const result = await getAllCalendar();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  router.put('/update/:id', async(req, res) => {
    const {...newData} = req.body;
    // console.log(req.body)
    const {id} = req.params;
    try {
        const result = await upDate(id, {...newData});
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.put('/desactive/:id', async(req, res) => {
    const { id } = req.params;
    const {status, ...newData} = req.body;
    try {
        const result = await desactiveReser(id,{ ...newData, status});
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



module.exports = router;