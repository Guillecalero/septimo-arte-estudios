const router = require('express').Router()
const User = require('../models/User.model')

router.get('/perfil', (req, res, next) => {

    console.log(req.session.currentUser._id)
    User
        .findById(req.session.currentUser._id)
        .then(user => res.render("auth/profile", user))
        .catch(err => next(err))
})

router.get('/perfil/editar/:id', (req, res, next) => {
    const { id } = req.params

    User
        .findById(id)
        .then(user => res.render("user/edit", user))
        .catch(err => next(err))
})

router.post('/perfil/editar/:id', (req, res, next) => {
    const { id } = req.params
    const { username, password, email, birth, sex, imageURL } = req.body

    User
        .findByIdAndUpdate(id, { username, password, email, birth, sex, imageURL }, { new: true })
        .then(() => res.redirect('/perfil'))
        .catch(err => next(err))
})

router.get('/perfil/user/lista', (req, res, next) => {

    User
        .find()
        .then(userList => res.render('user/list', { userList }))
        .catch(err => next(err))
})


router.post('/perfil/borrar/:id', (req, res, next) => {
    const { id } = req.params
    console.log(req.params, "pafavaaa")
    User
        .findByIdAndDelete(id)
        .then(() => res.redirect("/perfil/user/lista"))
        .catch(err => next(err))

})

module.exports = router;