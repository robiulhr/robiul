var express = require('express')
var router = express.Router()
// ---------------- admin

const adminController = require('../../controller/admin/admin')
router.get('/', adminController.adminGetreq)


module.exports = router

