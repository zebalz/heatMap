const router = require('express').Router()
const heatCtrl = require('../controllers/heat.controller')


module.exports = router

// api routes
router.get('/', heatCtrl.readAll)
router.post('/', heatCtrl.post)
