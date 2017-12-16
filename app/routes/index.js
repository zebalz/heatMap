const router = require('express').Router()
const clientRoutes = require('./client.routes')
// const heatRoutes = require('./heat.routes')

module.exports = router


router.use(clientRoutes)

useAPIErrorHandlers(router)

function useAPIErrorHandlers(router) {

    router.use('/api/*', (req, res, next) => {
        res.sendStatus(404)
    })

    router.use((err, req, res, next) => {
        if (!err) {
            return next()
        }

        console.log(err.stack)

        res.sendStatus(500)
    })
}
