const express = require('express');
const handleUserSignUp = require('../Controller/UserController');

const router = express.Router();


router.post('/SignUp', handleUserSignUp)


module.exports = router;