const {Router} = require('express');
const handlerUser = require('../handler/user');
const handlerDogOwners = require("../handler/dogOwners");


const router = Router();

router.use('/user', handlerUser);
router.use('/dogOwners', handlerDogOwners);

module.exports = router;