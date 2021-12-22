const bcrypt = require('bcrypt');
const adminScheema = require('../../db/admin/adminSchema')
module.exports = adminregisterController = {
    registerGetreq: (req, res) => {
        res.render('admin/adminregister')
    },
    registerPostreq: async (req, res) => {
        await bcrypt.hash(req.body.password, 11, async (err, hash) => {
            if (err) return res.status(500).render('admin/adminregister', { databasetarrableError: "somthing went terrable wrong" });
            let newAdmindata = { name: req.body.name, username: req.body.username, email: req.body.email, password: hash, termsCondition: req.body.termsCondition }
            try {
                let newAdmin = await new adminScheema(newAdmindata);
                await newAdmin.save();
                await res.status(200).redirect('/admin/login')
            } catch (error) {
                res.status(500).render('admin/adminregister', { databaseError: error, value: req.body })
            }
        });

    }

}