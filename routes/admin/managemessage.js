var express = require('express')
var router = express.Router()


// ---------------- admin manage message 
const managemessageController = require('../../controller/admin/managemessage')

router.get('/', managemessageController.managemessageGetreq)
router.post('/', managemessageController.managemessagePostreq)

module.exports = router
