const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('portfolio', {});
});

router.get('/resume', async (req, res) => {
    res.render('resume', {});
});

module.exports = router;
