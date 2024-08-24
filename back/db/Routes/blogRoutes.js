const express = require('express');
const router = express.Router();

const { getAllBlogs, getSingleBlog, createBlog ,getBlogs } = require('../Controllers/blogControllers');


router.post('/blogs/limited', getBlogs); // Fetch 3 blogs at a time, excluding a specific ID
router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getSingleBlog);
router.post('/blogs', createBlog);

module.exports = router;
