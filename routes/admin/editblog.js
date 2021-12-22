var express = require('express')
var router = express.Router()


// ---------------- admin edit blog
const editblogController = require('../../controller/admin/editblog')

router.get('/', editblogController.editblogGetreq)
router.post('/', editblogController.editblogPostreq)

module.exports = router
