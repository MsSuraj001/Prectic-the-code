const express = require('express')
const { handlUser } = require('../controller/userController')

let router = express.Router()

router.post('/signUp', handlUser)

module.exports = router