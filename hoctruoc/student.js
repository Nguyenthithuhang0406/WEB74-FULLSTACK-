const express = require('express')
const studentRouter = express.Router()

studentRouter.get('/', (req, res) => {...})
studentRouter.get('/add', (req, res) => {...})

module.exports = studentRouter