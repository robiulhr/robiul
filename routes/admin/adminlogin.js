var express = require('express')
var router = express.Router()


// ---------------- admin login
const loginValidation = require('../../middleware/admin/adminLogin')
const loginController = require('../../controller/admin/adminlogin')

router.get('/', loginController.loginGetreq)
router.post('/', loginValidation, loginController.loginPostreq)

module.exports = router
