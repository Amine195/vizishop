var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Vizishop - Acceuil' });
});

/* GET Regsiter. */
router.get('/register', (req, res, next) => {
  res.render('index', { title: 'Vizishop - Acceuil' });
});


/* POST Register. */
router.post('/register', (req, res, next) => {
  res.render('index', { title: 'Vizishop - Acceuil' });
});

/* GET Login. */
router.get('/login', (req, res, next) => {
  res.render('index', { title: 'Vizishop - Acceuil' });
});

/* POST Login. */
router.post('/login', (req, res, next) => {
  res.render('index', { title: 'Vizishop - Acceuil' });
});

/* GET Profile. */
router.get('/profile', (req, res, next) => {
  res.render('index', { title: 'Vizishop - Acceuil' });
});

/* PUT Profile. */
router.put('/profile/:user_id', (req, res, next) => {
  res.render('index', { title: 'Vizishop - Acceuil' });
});

module.exports = router;