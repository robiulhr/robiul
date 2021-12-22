var express = require('express')
var router = express.Router()
const contactController = require('../../controller/home/contact')
router.get('/', contactController.contactGetreq)
router.post('/', contactController.contactPostreq)

module.exports = router