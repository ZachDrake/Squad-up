const { all, getOne, create, update, destroy } = require('../controllers/member');
const { Member, Squad } = require('../models');

const router = require('express').Router();

router.use((req, res, next) => {
    res.locals.Member = Member;
    res.locals.Squad = Squad;
    next();
})

router.get('/all', all);

router.post('/create', create);

router.get('/profile/:name', getOne);

router.get('/profile', getOne);

router.put('/update/:memberName/:name', update);

router.delete('/delete/:id', destroy);

module.exports = router;