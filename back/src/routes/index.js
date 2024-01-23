const {Router} = require('express');
const handlerUser = require('../handler/admin');
const handlerDogOwners = require("../handler/dogOwners");
const handlerDog = require('../handler/dog');
const handlerCalendar = require('../handler/calendarHandler.js');


const router = Router();

router.use('/user', handlerUser);
router.use('/dogOwners', handlerDogOwners);
router.use('/dog', handlerDog);
router.use('/calendar', handlerCalendar);

module.exports = router;