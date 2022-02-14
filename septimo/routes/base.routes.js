const router = require('express').Router()
const bcryptjs = require('bcryptjs')
const User = require('./../models/User.model')

const saltRounds = 10

// const Group = require('./..models/Group.model')
// const Message = require('./..models/Message.model')


router.get("/", (req, res, next) => {

    res.render("index");
});

router.get("/registro", (req, res, next) => {
    res.render("auth/sign-up")
})

router.post("/registro", (req, res, next) => {

    const { username, userPwd, favoritesMovies, email, birth, sex } = req.body

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(userPwd, saltRounds))
        .then(password => {


            User
                .create({ username, password, favoritesMovies, email, birth, sex })
                .then(user => res.redirect("/"))
                .catch(err => next(err))

        })
        .then(createdUser => res.redirect("/"))
        .catch(error => next(error))
})

router.get("/acceso", (req, res, next) => {
    res.render("auth/login")
})

router.post("/acceso", (req, res, next) => {
    const { username, password } = req.body



    //     User
    //         .findById()
})




module.exports = router;