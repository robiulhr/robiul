const userValidator = require('../../auth/admin/adminRegister');

module.exports = registrasionValidation = async (req, res, next) => {


    const value = userValidator.validateAsync(req.body);
    value.then((success) => {
        next()
    }, (error) => {
        res.render('pages/adminregister', { errormassage: error.details[0].message, errorpath: error.details[0].path[0], value: req.body })
    })

}