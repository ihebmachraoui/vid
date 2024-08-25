const Blog = require('../Models/blogModels');

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};

// Get a single blog by ID
const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog', error });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

// Get 3 blogs at a time, excluding a specific blog by ID
const getBlogs = async (req, res) => {
  try {
    const { excludeId } = req.body; // ID to exclude is now in the request body
    const limit = 3;

    // Build the query for excluding the specified ID
    const matchQuery = excludeId ? { _id: { $ne: excludeId } } : {};

    // Use aggregation to randomly select blogs
    const blogs = await Blog.aggregate([
      { $match: matchQuery },
      { $sample: { size: limit } } // Randomly sample 3 blogs
    ]);


    
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};

const updateComments = async (req, res) => {
  try {
    const { blogId, comment, replyToCommentId } = req.body;

    // Find the blog by ID
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    if (replyToCommentId) {
      // Find the comment to reply to
      const commentToReplyTo = blog.comments.id(replyToCommentId);

      if (!commentToReplyTo) {
        return res.status(404).json({ message: 'Comment to reply to not found' });
      }

      // Add the new reply to the comment's replies array
      commentToReplyTo.replies.push(comment);
    } else {
      // Add the new comment to the comments array
      blog.comments.push(comment);
    }

    // Save the updated blog
    await blog.save();

    res.status(200).json({ message: 'Comment or reply added successfully', blog });
  } catch (error) {
    res.status(500).json({ message: 'Error updating comments', error });
  }
};
module.exports = {
  getAllBlogs,
  getBlogs,
  getSingleBlog,
  createBlog,
  updateComments
};
