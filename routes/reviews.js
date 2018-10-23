var express = require('express');
var router = express.Router({ mergeParams: true });

/* GET INDEX reviews /reviews */
router.get('/', (req, res, next) => {
    res.send('/reviews');
});

/* POST CREATE review /reviews */
router.post('/', (req, res, next) => {
    res.send('CREATE /review');
});

/* GET EDIT review /reviews/:id/edit */
router.get('/:review_id/edit', (req, res, next) => {
    res.send('EDIT /review');
});

/* PUT UPDATE review /reviews/:id */
router.get('/:review_id', (req, res, next) => {
    res.send('UPDATE /review');
});

/* DELETE DESTROY review /reviews/:id */
router.get('/:review_id', (req, res, next) => {
    res.send('DESLETE /review');
});

module.exports = router;