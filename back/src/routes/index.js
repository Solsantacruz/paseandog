const {Router} = require('express');
const handlerUser = require('../handler/user');
const handler = require('../handler/toDo');


const router = Router();

router.use('/user', handlerUser);
// router.use('/todo', handlerToDo);

module.exports = router;