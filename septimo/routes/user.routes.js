const router = require('express').Router()
const User = require('../models/User.model')

router.get('/perfil', (req, res, next) => {
    res.render("auth/profile")
    User
        .find({ _id: req.session.currentUser._id })
        .then(user => (console.log(user)))
        .catch(err => next(err))
})



module.exports = router;