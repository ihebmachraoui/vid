const axios = require('axios');
require('dotenv').config();

const generatePayment = async (req, res) => {
    const { amount ,appointmentId} = req.body;
    console.log(amount);

    // Define the URL and payload
    const url = 'https://developers.flouci.com/api/generate_payment';
    const payload = {
        app_token: process.env.APP_TOKEN,
        app_secret: process.env.APP_SECRET,
        amount: amount.toString(),
        accept_card: "true",
        session_timeout_secs: 1200,
        success_link: `http://localhost:3000/appointment/payment/${appointmentId}`,
        fail_link: `http://localhost:3000/appointment/${appointmentId}`,
        developer_tracking_id: "eb99d98d-abbb-4ea8-a167-553dad2f1c9c"
    };

    // Define the headers
    const headers = {
        'Content-Type': 'application/json'
    };
console.log(payload);

    try {
        // Make the POST request
        const response = await axios.post(url, payload, { headers });

        // Send back the response data
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error generating payment:', error.message);
        res.status(500).json({ error: 'Failed to generate payment' });
    }
};

const verifyPayment = async (req, res) => {
    const paymentId = req.params.id;
    // Define the URL with the payment_id
    const url = `https://developers.flouci.com/api/verify_payment/${paymentId}`;

    // Define the headers
    const headers = {
        'Content-Type': 'application/json',
        'apppublic': process.env.APP_TOKEN,
        'appsecret': process.env.APP_SECRET
    };

    try {
        // Make the GET request
        const response = await axios.get(url, { headers });

        // Send the response data back to the client
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error verifying payment:', error.message);

        // Send an error response back to the client
        res.status(500).json({ error: 'Failed to verify payment' });
    }
};

module.exports = {
    generatePayment,
    verifyPayment
};
