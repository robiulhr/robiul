var express = require('express')
var router = express.Router()


// ---------------- admin manage blog
const manageblogController = require('../../controller/admin/manageblog')

router.get('/', manageblogController.manageblogGetreq)
router.post('/', manageblogController.manageblogPostreq)

module.exports = router
