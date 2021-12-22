const adminScheema = require('../../db/admin/adminSchema')
const bcrypt = require('bcrypt')

module.exports = adminloginController = {
    loginGetreq: (req, res) => {
        res.render('admin/adminlogin')
    },
    loginPostreq: async (req, res) => {
        let { username, password } = req.body

        await adminScheema.findOne({ username: username }, async (err, admin) => {
            //---------- error checking
            if (err) {

                return res.status(500).render('admin/adminlogin', { databaseError: "Sorry, Something went terroble wrong" })
            }
            //------------ finding admin
            if (!admin) {
                //----- no admin found
                return res.status(500).render('admin/adminlogin', { databaseErrornouser: "Sorry, no admin found for this user name", value: req.body })
            } else {
                //-------- admin found
                await bcrypt.compare(password, admin.password, (err, result) => {
                    if (err) {
                        return res.status(500).render('admin/adminlogin', { databaseError: "Sorry, Something went terroble wrong", value: req.body })
                    } else {
                        console.log(result);
                        if (result == true) {
                            return res.status(200).redirect('/admin')
                        } else {
                            return res.status(500).render('admin/adminlogin', { databaseError: "Password not matched", value: req.body })
                        }
                    }


                });

            }
        }).clone().catch((err) => { console.log(err, 'something went wrong here') });

    }
}
