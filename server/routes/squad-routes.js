const { all, getOne, create } = require('../controllers/squad');
const { Squad } = require('../models');

const router = require('express').Router();

router.use((req, res, next) => {
    res.locals.Squad = Squad;
    next();
})

router.get('/all', all);

router.post('/', create);

router.get('/:id', getOne);

module.exports = router;