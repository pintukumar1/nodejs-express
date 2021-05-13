const path = require('path')
const express = require('express')

const rootdir = require('../util/path')
const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
    // console.log('Shop.js', adminData.products)
    // res.sendFile(path.join(rootdir, 'views', 'shop.html'))
    res.render('shop')
})

module.exports = router