var express = require('express')
var router = express.Router()


// ---------------- admin register

const registerController = require('../../controller/admin/adminregister')
const registrasionValidation = require('../../middleware/admin/adminRegister')
router.get('/register', registerController.registerGetreq)
router.post('/register', registrasionValidation, registerController.registerPostreq)


module.exports = router
