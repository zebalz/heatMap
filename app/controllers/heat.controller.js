const heatService = require('../services/heat.services')
const apiPrefix = '/api/heaters'


module.exports = {
    readAll,
    post
}

function readAll(req, res) {
    heatService.readAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(500)
        })
}

function post(req, res) {
    heatService.post(req.body)
        .then(id => id)
        .catch(err => {
            console.log(err)
            res.status(500)
        })
}
