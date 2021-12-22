var express = require('express')
var router = express.Router()


// ---------------- admin create blog
const createblogController = require('../../controller/admin/createblog')

router.get('/', createblogController.createblogGetreq)
router.post('/', createblogController.createblogPostreq)

module.exports = router
