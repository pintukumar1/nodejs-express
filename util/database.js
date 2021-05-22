const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database: 'node-complete',
    password:'up60x5724'
})

module.exports = pool.promise()