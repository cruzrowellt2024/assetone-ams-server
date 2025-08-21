const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/request-password-reset', authController.requestPasswordReset);

module.exports = router;