const router = require('express').Router();

router.use('/squads', require('./squad-routes'));

router.use('/members', require('./members-routes'));

module.exports = router;