var express = require('express');
var router = express.Router();

/* GET INDEX products /products */
router.get('/', (req, res, next) => {
    res.send('/products');
});

/* GET NEW product /products/new */
router.get('/new', (req, res, next) => {
    res.send('NEW /product');
});

/* POST CREATE product /products */
router.post('/', (req, res, next) => {
    res.send('CREATE /product');
});

/* GET SHOW product /products/:id */
router.get('/:id', (req, res, next) => {
    res.send('SHOW /product');
});

/* GET EDIT product /products/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /product');
});

/* PUT UPDATE product /products/:id */
router.get('/:id', (req, res, next) => {
    res.send('UPDATE /product');
});

/* DELETE DESTROY product /products/:id */
router.get('/:id', (req, res, next) => {
    res.send('DESLETE /product');
});

module.exports = router;