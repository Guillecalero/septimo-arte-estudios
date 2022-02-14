const router = require('express').Router()
const User = require('./../models/User.model')
const bcryptjs = require('bcryptjs')


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


// Login from (render)
router.get('/acceso', (req, res, next) => res.render('auth/login'))

// Login form (handle)
router.post('/acceso', (req, res, next) => {

  const { username, userPwd } = req.body

  if (username.length === 0 || userPwd.length === 0) {
    res.render('auth/login', { errorMessage: 'Por favor, rellena todos los campos' })
    return
  }

  User
    .findOne({ username })
    .then(user => {
      if (!user) {
        res.render('auth/login', { errorMessage: 'Email no registrado en la Base de Datos' })
        return
      } else if (bcryptjs.compareSync(userPwd, user.password) === false) {
        res.render('auth/login', { errorMessage: 'La contraseña es incorrecta' })
        return
      } else {
        req.session.currentUser = user
        console.log(req.session.currentUser);
        
        res.redirect('/perfil')
      }
    })
})

// Logout
router.post('/cerrar-sesion', (req, res) => {
  req.session.destroy(() => res.redirect('/'))
})


module.exports = router;