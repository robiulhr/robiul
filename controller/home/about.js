module.exports = aboutController = {
    aboutGetreq: (req, res) => {
        res.render('pages/about', { pagename: "About Me", pageroute: "about" })
    },
    aboutPostreq: (req, res) => {

    }
}
