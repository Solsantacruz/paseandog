const { Router } = require("express");
const {
  createUser,
  getAllUser,
  loginUser
} = require("../controller/admin");

const router = Router();

// Crear un nuevo usuario
router.post('/', async(req, res) => {
    const {email, password } = req.body;
    console.log(req.body);
    try {
        const response = await createUser(email, password);
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

 router.get("/login", async (req, res) => {
    const { email, password } = req.query;
  
    try {
      const result = await loginUser(email, password);
  
      if (result.access) {
        res.status(200).json(result);
      } else {
        res.status(403).send(result.message);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })




module.exports = router;