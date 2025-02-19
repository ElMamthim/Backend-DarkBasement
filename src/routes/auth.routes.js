const express = require('express');
const { createUser } = require('../controllers/user.controller');
const {loginUser, reNewToken} = require('../controllers/auth.controller');
const validateUserExists = require('../middlewares/validate-user-exists');
const router = express.Router();

router.post('/register', createUser);

router.post('/login', loginUser);

router.get('/re-new-token', validateUserExists, reNewToken);

module.exports = router;