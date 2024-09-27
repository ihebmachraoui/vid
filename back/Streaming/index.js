
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const axios = require('axios');

// Video streaming route
router.get('/video', async (req, res) => {
    const lang = req.query.lang || 'en'; // Extract language from query
    const validLangs = ['en', 'fr', 'ar']; // Available languages
    const videoLang = validLangs.includes(lang) ? lang : 'en';

    // Construct the raw GitHub URL for the video
    const videoUrl = `https://github.com/ihebmachraoui/sociosolution/raw/refs/heads/main/back/Streaming/videos/${videoLang}.mp4`;

    try {
        // Fetch the video file using axios
        const response = await axios({
            url: videoUrl,
            method: 'GET',
            responseType: 'stream',
        });

        // Set response headers
        res.setHeader('Content-Type', 'video/mp4');
        res.setHeader('Content-Disposition', 'inline'); // Allows video to play inline

        // Stream the video to the client
        response.data.pipe(res);

    } catch (error) {
        console.error('Error fetching video:', error);
        res.status(404).send('Video not found.');
    }
});


module.exports = router;


