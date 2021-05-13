const path = require('path')
const express = require('express')

const rootdir = require('../util/path')

const router = express.Router()

const products = []

// admin/add-product   GET method
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'))
})

// admin/add-product   POST method
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/')
})

exports.routes = router
exports.products = products