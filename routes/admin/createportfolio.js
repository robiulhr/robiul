var express = require('express')
var router = express.Router()


// ---------------- admin create portfolio
const createpotfolioController = require('../../controller/admin/createportfolio')

router.get('/', createpotfolioController.createportfolioGetreq)
router.post('/', createpotfolioController.createportfolioPostreq)

module.exports = router
