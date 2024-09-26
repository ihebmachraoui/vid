
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Video streaming route
router.get('/video', (req, res) => {
    // Determine the language from the request, defaulting to 'en' if not provided
    const {lang} = req.query || 'en'; // Replace with the correct method to extract language
    const validLangs = ['en', 'fr', 'ar']; // Available languages

    // Validate the requested language
    const videoLang = validLangs.includes(lang) ? lang : 'en';

    // Set the video file path based on the language
    const videoPath = path.join(__dirname, './videos', `${videoLang}.mp4`);

    // Get file stats
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        if (start >= fileSize) {
            res.status(416).send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
            return;
        }

        const chunkSize = (end - start) + 1;
        const file = fs.createReadStream(videoPath, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4',
        };

        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
    }
});

module.exports = router;


