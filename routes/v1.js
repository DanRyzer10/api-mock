const express = require('express');
const router = express.Router();
const sendHandler = require('../handlers/sendHandler');

// Send endpoint
router.post('/send', sendHandler);

module.exports = router;
