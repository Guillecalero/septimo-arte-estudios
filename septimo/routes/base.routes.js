const router = require('express').Router()
const User = require('./../models/User.model')
// const Group = require('./..models/Group.model')
// const Message = require('./..models/Message.model')


router.get("/", (req, res, next) => {

    res.render("index");
});

router.get("/registro", (req, res, next) => {
    res.render("auth/sign-up")
})

router.post("/registro", (req, res, next) => {

    const { username, password, favoritesMovies, email, birth, sex } = req.body

    User
        .create({ username, password, favoritesMovies, email, birth, sex })
        .then(user => res.redirect("/"))
        .catch(err => next(err))

})

router.get("/acceso", (req, res, next) => {
    res.render("auth/login")
})

router.post("/acceso", (req, res, next) => {
    const { username, password } = req.body

    User
        .findById()
})




module.exports = router;