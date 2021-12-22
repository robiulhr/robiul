module.exports = contactController = {
    contactGetreq: (req, res) => {
        res.render('pages/contact', { pagename: "Contact Us", pageroute: "contact" })
    },
    contactPostreq: (req, res) => {

    }
}
