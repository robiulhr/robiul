var express = require('express')
var router = express.Router()


// ---------------- admin manage profile
const manageprofileController = require('../../controller/admin/manageprofile')

router.get('/', manageprofileController.manageprofileGetreq)
router.post('/', manageprofileController.manageprofilePostreq)

module.exports = router
