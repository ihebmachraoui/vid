const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({

  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  },
  imageUrl: {
    type: String
  }
});

const commentSchema = new mongoose.Schema({

  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  },
  imageUrl: {
    type: String
  },
  canReply: {
    type: Boolean,
    default: true
  },
  replies: [replySchema] // Add replies as an array of replySchema
});

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
    type: [commentSchema],
    default: []
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
