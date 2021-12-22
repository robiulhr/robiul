var express = require('express')
var router = express.Router()
const portfolioController = require('../../controller/home/portfolio')
router.get('/', portfolioController.portfolioGetreq)
router.post('/', portfolioController.portfolioPostreq)

module.exports = router