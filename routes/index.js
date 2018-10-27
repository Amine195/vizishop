var express = require('express');
var router = express.Router();
const { postRegister } = require('../controllers');
const { errorHandler } = require('../middleware');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: "Vizishop || Home"});
});

/* GET Regsiter. */
router.get('/register', (req, res, next) => {
  res.send('Get Register');
});

/* POST Register. */
router.post('/register', errorHandler(postRegister));

/* GET Login. */
router.get('/login', (req, res, next) => {
  res.send('Get login');
});

/* POST Login. */
router.post('/login', (req, res, next) => {
  res.send('Post Login');
});

/* GET Profile. */
router.get('/profile', (req, res, next) => {
  res.send('Get profile');
});

/* PUT Profile. */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('Put profile');
});

/* GET Forgot Password. */
router.get('/forgot-pw', (req, res, next) => {
  res.send('Get forgot');
});

/* PUT Forgot Password. */
router.put('/forgot-pw', (req, res, next) => {
  res.send('Put forgot');
});

/* GET Forgot Password. */
router.get('/reset-pw/:token', (req, res, next) => {
  res.send('Get forgot');
});

/* PUT Forgot Password. */
router.put('/reset-pw/:token', (req, res, next) => {
  res.send('Put forgot');
});

module.exports = router;