const express = require('express')
const teacherRouter = express.Router()

teacherRouter.get('/', (req, res) => { ...});
teacherRouter.get('/add', (req, res) => { ...});

module.exports = teacherRouter