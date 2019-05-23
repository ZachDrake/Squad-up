const { all, getOne, create, update, destroy } = require('../controllers/squad');
const { Squad, Member } = require('../models');

const router = require('express').Router();

router.use((req, res, next) => {
    res.locals.Squad = Squad;
    res.locals.Member = Member;
    next();
})

router.get('/all', all);

router.post('/create', create);

router.get('/profile/:name', getOne);

router.get('/profile', getOne);

router.put('/update/:squadName/:name', update);

router.delete('/delete/:id', destroy);

module.exports = router;