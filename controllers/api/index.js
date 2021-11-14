const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const resumeRoutes = require('./resumeRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/resume', resumeRoutes);

module.exports = router;