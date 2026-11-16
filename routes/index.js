var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'My Projects' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});

router.post('/contact', function(req, res) {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('Please complete all fields.');
    }

    res.render('contact', {
        title: 'Contact Me',
        success: true
    });
});


module.exports = router;
