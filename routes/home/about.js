var express = require('express')
var router = express.Router()
const aboutController = require('../../controller/home/about')
router.get('/', aboutController.aboutGetreq)
router.post('/', aboutController.aboutPostreq)

module.exports = router