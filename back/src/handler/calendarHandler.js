const { Router } = require("express");
const {
  createCalendar,
  getAllCalendar
} = require("../controller/calendarController.js");

const router = Router();

// Crear un nuevo usuario
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

// Obtener usuario
router.get("/", async (req, res) => {
    try {
      const users = await getAllUser();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });




module.exports = router;