const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/about', { title: 'About'});
});
module.exports = router;