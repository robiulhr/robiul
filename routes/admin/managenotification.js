var express = require('express')
var router = express.Router()


// ---------------- admin manage notification
const managenotificationController = require('../../controller/admin/managenotification')

router.get('/', managenotificationController.managenotificationGetreq)
router.post('/', managenotificationController.managenotificationPostreq)

module.exports = router
