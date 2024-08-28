const express = require('express');
const router = express.Router();
const { generatePayment, verifyPayment } = require('../Payment/paymentControllers');

router.post('/generate-payment', generatePayment);
router.get('/verify-payment/:id', verifyPayment);

module.exports = router;
