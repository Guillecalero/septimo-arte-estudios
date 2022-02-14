const isLoggedIn = (req, res, next) => {
    if (!req.session.currentUser) {
        res.redirect('/acceso')
        return
    }
    next();
}
module.exports = { isLoggedIn }