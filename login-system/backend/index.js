require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require('./routes/user')
const favouriteRoutes = require('./routes/favourite')
const checkoutRoutes = require('./routes/checkout')
const db = require('./models')

require('./config/passport/passport')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/users',userRoutes)
app.use('/favourites',favouriteRoutes)
app.use('/checkouts',checkoutRoutes)

db.sequelize.sync().then(() => {
    app.listen(Number(process.env.PORT),() => {
        console.log(`Listening on port ${process.env.PORT}`)
    })
})