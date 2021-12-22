module.exports = portfolioController = {
    portfolioGetreq: (req, res) => {
        res.render('pages/portfolio', { pagename: "Portfolio", pageroute: "portfolio" })

    },
    portfolioPostreq: (req, res) => {

    }
}
