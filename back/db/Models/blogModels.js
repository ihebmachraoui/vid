const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  usersrc: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  comments: {
    type: [String],
    default: []
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
