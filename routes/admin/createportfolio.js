var express = require('express')
var router = express.Router()
// ---------------- admin create portfolio
const createportfolioController = require('../../controller/admin/createportfolio')

router.get('/', createportfolioController.createportfolioGetreq)
router.post('/', createportfolioController.createportfolioPostreq)

module.exports = router
