const router = require('express').Router();

router.use('/squads', require('./squad-routes'));

router.use('/members', require('./members-routes'));

router.use('/ranks', require('./ranks-routes'));

module.exports = router;