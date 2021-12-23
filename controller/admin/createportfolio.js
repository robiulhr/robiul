const multer = require('multer')
const portfolioSchema = require('../../db/admin/portfolioSchema')
const multerImageupload = require('../../middleware/admin/multerimageupload')
const upload = multerImageupload().single('portfolioimage');

module.exports = createportfolioController = {
    createportfolioGetreq: (req, res) => {
        res.render('admin/createportfolio', { title: "Create portfolio" })
    },
    createportfolioPostreq: async (req, res) => {
        upload(req, res, async (err) => {
            if (req.file) {
                if (err instanceof multer.MulterError) {
                    // A Multer error occurred when uploading.
                    res.render('admin/createportfolio', { title: "Create portfolio", multerError: "File can't upload please try again" })
                } else if (err) {
                    // An unknown error occurred when uploading.
                    res.render('admin/createportfolio', { title: "Create portfolio", multerError: "Something went wrong" })
                }

                let portfolioimage = `${req.protocol}://${req.host}/${req.file.path}`
                let newPortfoliodata = { portfolioTitle: req.body.portfolioTitle, portfolioimage: portfolioimage, inputTextarea: req.body.portfoliodes, catagory: req.body.catagory }
                try {
                    let newPortfolio = await new portfolioSchema(newPortfoliodata);
                    await newPortfolio.save();
                    await res.status(200).redirect('/admin/manageportfolio/1')
                } catch (error) {
                    console.log(error);
                    res.status(500).render('admin/createportfolio', { databaseError: error, value: req.body })
                }
            } else {
                res.status(500).render('admin/createportfolio', { multerError: "please provide a image", value: req.body })
            }

        })
    }
}
