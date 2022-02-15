const ApiHandler = require('../api/api_movies.handler')
const router = require('express').Router()
const handler = new ApiHandler()


router.post('/buscar', (req, res, next) => {
    const {query} = req.body

    handler.searchMovie(query)
        .then(movies => {
            let results = movies.data.results
            res.render('index', {results})
        })
        .catch(err => next(err))
})

//router.post('')

module.exports = router;