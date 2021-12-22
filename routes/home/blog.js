var express = require('express')
var router = express.Router()
const blogController = require('../../controller/home/blog')
router.get('/', blogController.blogGetreq)
router.post('/', blogController.blogPostreq)

module.exports = router