const User = require('../models/user');

module.exports = {
    async postRegister(req, res, nex) {

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            image: req.body.image
        });

        await User.register(newUser, req.body.password);
        res.redirect('/');
    }
}

/******************************************************** METHODE 1 */
// postRegister(req, res, nex) {

//     const newUser = new User({
//         username: req.body.username,
//         email: req.body.email,
//         image: req.body.image
//     });

//     User.register(newUser, req.body.password, (err) => {

//         if (err) { return next(err); }

//         res.redirect('/');
//     });
// }

/******************************************************** METHODE 2 */
// async postRegister(req, res, nex) {

//     const newUser = new User({
//         username: req.body.username,
//         email: req.body.email,
//         image: req.body.image
//     });

//     try {
//         await User.register(newUser, req.body.password);
//     } catch(err) {
//         return next(err);
//     }
//     res.redirect('/');
// }