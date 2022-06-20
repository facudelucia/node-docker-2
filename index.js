const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = require('./config')

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

mongoose
    .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('successfully connected to DB'))
    .catch(err => {
        console.log(err)
    })

app.use(morgan('dev'))

app.get('/api/v1', (req, res) => {
    res.send('<h2>Hi there: facu!</h2>')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))
