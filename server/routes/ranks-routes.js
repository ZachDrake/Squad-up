const { all, getOne, create } = require('../controllers/rank');
const { Rank } = require('../models');

const router = require('express').Router();

router.use((req, res, next) => {
    res.locals.Rank = Rank;
    next();
})

router.get('/all', all);

router.post('/', create);

router.get('/:id', getOne);

module.exports = router;