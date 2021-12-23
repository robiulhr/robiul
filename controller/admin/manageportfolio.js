const portfolioSchema = require('../../db/admin/portfolioSchema')
var moment = require('moment');
module.exports = manageportfolioController = {
    manageportfolioGetreq: (req, res) => {
        var perPage = 10
        var page = req.params.id || 1

        portfolioSchema
            .find({})
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .exec(function (err, portfolios) {
                if (portfolios.length != 0) {
                    portfolioSchema.count().exec(function (err, count) {
                        if (err) return next(err)
                        console.log(portfolios);
                        res.render('admin/manageportfolio', {
                            portfolios: portfolios,
                            current: page,
                            pages: Math.ceil(count / perPage)
                        })
                    })
                } else {
                    res.render('admin/manageportfolio', {
                        noportfolios: "There are no portfolio"
                    })

                }
            })
    }
    ,
    manageportfolioPostreq: (req, res) => {

    }
}
