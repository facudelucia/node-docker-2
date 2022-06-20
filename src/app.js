const express = require('express')
const morgan = require('morgan')
const app = express()

require('./database')

app.use(morgan('dev'))

app.use(require('./routes/index'))

module.exports = app
