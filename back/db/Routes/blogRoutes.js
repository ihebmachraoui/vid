const express = require('express');
const { getAllBlogs, getSingleBlog, createBlog } = require('../Controllers/blogControllers');

const router = express.Router();

router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getSingleBlog);
router.post('/blogs', createBlog);

module.exports = router;
