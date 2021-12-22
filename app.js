const express = require('express')
const bodyParser = require('body-parser');
const app = express()
require('dotenv').config()
const morgan = require('morgan')
app.use(morgan('short'))

const PORT = process.env.PORT || 3000

// form data access
app.use(bodyParser.urlencoded({ extended: true }));
// tamplate engine
app.set('view engine', 'ejs')

// static files
app.use(express.static('public'))
app.use('/admin/', express.static('public'))

// mongodb connection
const DB_URL = process.env.DB_URL
const dbConnect = require('./db/connection')
dbConnect(DB_URL)
// all routes
//=========== home routes
const homeRoutes = require('./routes/home/home')
const aboutRoutes = require('./routes/home/about')
const contactRoutes = require('./routes/home/contact')
const portfolioRoutes = require('./routes/home/portfolio')
const blogRoutes = require('./routes/home/blog')
app.use('/', homeRoutes)
app.use('/about', aboutRoutes)
app.use('/contact', contactRoutes)
app.use('/portfolio', portfolioRoutes)
app.use('/blog', blogRoutes)
//===================== admin routes
const adminRoutes = require('./routes/admin/admin')
const adminloginRoutes = require('./routes/admin/adminlogin')
const adminregisterRoutes = require('./routes/admin/adminregister')
const manageportfolioRoutes = require('./routes/admin/manageportfolio')
const createportfolioRoutes = require('./routes/admin/createportfolio')
const adminprofileRoutes = require('./routes/admin/adminprofile')
const manageprofileRoutes = require('./routes/admin/manageprofile')
const editportfolioRoutes = require('./routes/admin/editportfolio')
const manageblogRoutes = require('./routes/admin/manageblog')
const createblogRoutes = require('./routes/admin/createblog')
const editblogblogRoutes = require('./routes/admin/editblog')
const managenotificationRoutes = require('./routes/admin/managenotification')
const managemessageRoutes = require('./routes/admin/managemessage')

app.use('/admin', adminRoutes)
app.use('/admin/login', adminloginRoutes)
app.use('/admin/register', adminregisterRoutes)
app.use('/admin/manageportfolio', manageportfolioRoutes)
app.use('/admin/createportfolio', createportfolioRoutes)
app.use('/admin/editportfolio', editportfolioRoutes)
app.use('/admin/profile', adminprofileRoutes)
app.use('/admin/manageprofile', manageprofileRoutes)
app.use('/admin/editprofile', editportfolioRoutes)
app.use('/admin/manageblog', manageblogRoutes)
app.use('/admin/createblog', createblogRoutes)
app.use('/admin/editblog', editblogblogRoutes)
app.use('/admin/notifications', managenotificationRoutes)
app.use('/admin/messages', managemessageRoutes)


app.listen(PORT, () => {
    console.log(`app is running ${PORT}`);
})