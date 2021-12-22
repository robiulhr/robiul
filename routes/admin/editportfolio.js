var express = require('express')
var router = express.Router()


// ---------------- admin edit portfolio
const editportfolioController = require('../../controller/admin/editportfolio')

router.get('/', editportfolioController.editportfolioGetreq)
router.post('/', editportfolioController.editportfolioPostreq)

module.exports = router
