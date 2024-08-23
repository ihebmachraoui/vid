const express = require('express');
const router = express.Router();

const { getAllBlogs, getSingleBlog, createBlog } = require('../Controllers/blogControllers');



router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getSingleBlog);
router.post('/blogs', createBlog);

module.exports = router;
