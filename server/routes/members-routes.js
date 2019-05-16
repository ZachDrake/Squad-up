const { all, getOne, create } = require('../controllers/member');
const { Member } = require('../models');

const router = require('express').Router();

router.use((req, res, next) => {
    res.locals.Member = Member;
    next();
})

router.get('/all', all);

router.post('/', create);

router.get('/:id', getOne);

module.exports = router;