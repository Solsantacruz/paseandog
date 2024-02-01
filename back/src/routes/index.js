const {Router} = require('express');
const handlerAdmin = require('../handler/admin');
const handlerUser = require('../handler/user.js')
const handlerDogOwners = require("../handler/dogOwners");
const handlerDog = require('../handler/dog');
const handlerPriceUnique = require('../handler/priceUnique.js');
const handlerPriceBono = require('../handler/priceBono.js')
const handlerCalendar = require('../handler/calendarHandler.js');
const handlerCreditClient = require('../handler/creditClientHandler.js')


const router = Router();

router.use('/admin', handlerAdmin);
router.use('/user', handlerUser);
router.use('/dogOwners', handlerDogOwners);
router.use('/dog', handlerDog);
router.use('/calendar', handlerCalendar);
router.use('/priceUnique', handlerPriceUnique);
router.use('/priceBono', handlerPriceBono);
router.use('/credit', handlerCreditClient);
module.exports = router;