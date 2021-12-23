var express = require('express')
var router = express.Router()


// ---------------- admin portfolio
const manageportfolioController = require('../../controller/admin/manageportfolio')

router.get('/', manageportfolioController.manageportfolioGetreq)
router.post('/:id', manageportfolioController.manageportfolioPostreq)

module.exports = router
