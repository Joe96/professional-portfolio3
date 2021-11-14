const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const resumeRoutes = require('./resumeRoutes');


router.use('/', homeRoutes);
router.use('/resume', resumeRoutes);

module.exports = router;