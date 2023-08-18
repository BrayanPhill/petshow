require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())

app.get('/teste', (req, res) => {res.json('App running')})

require('./routes/pet.route')(app)

module.exports = app