const { all, getOne, create, update, destroy } = require('../controllers/member');
const { Member } = require('../models');

const router = require('express').Router();

router.use((req, res, next) => {
    res.locals.Member = Member;
    next();
})

router.get('/all', all);

router.post('/create', create);

router.get('/:id', getOne);

router.put('/update/:id', update);

router.delete('/delete/:id', destroy);

module.exports = router;