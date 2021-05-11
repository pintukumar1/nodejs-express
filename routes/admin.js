const express = require('express')

const router = express.Router()

// admin/add-product   GET method
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">ADD PRODUCT</button></form>')
})

// admin/add-product   POST method
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router