var express = require('express')
var router = express.Router()


// ---------------- admin profile
const adminprofileController = require('../../controller/admin/adminprofile')

router.get('/', adminprofileController.adminprofileGetreq)
router.post('/', adminprofileController.adminprofilePostreq)

module.exports = router
