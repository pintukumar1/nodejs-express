// REQUIRED IMPORTS
const path = require('path')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const express = require('express')
const bodyParser = require('body-parser')

// FUNCTIONALITY
const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false })) // lets submitted object print to console

const publicDirectoryPath = path.join(__dirname, 'public')
app.use(express.static(publicDirectoryPath))

app.use('/admin', adminData.routes)

app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})