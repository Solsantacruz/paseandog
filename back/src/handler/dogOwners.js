const { Router } = require("express");
const {
    createOwner,
    getAllOwners,
} = require("../controller/dogOwners");

const router = Router();

// Crear un nuevo usuario
router.post('/', async(req, res) => {
    const {name, phone, email, address, postalCode, district, emergencyContact, avatar,UserId} = req.body;
    console.log(req.body);
    try {
        const response = await createOwner(name, phone, email, address, postalCode, district, emergencyContact, avatar, UserId );
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

// Obtener usuario
router.get("/", async (req, res) => {
    try {
      const users = await getAllOwners();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });




module.exports = router;