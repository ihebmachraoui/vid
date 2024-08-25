import React, { useState } from 'react';
import axios from 'axios';

const Comment = ({blog, settrack}) => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare comment data
    const commentData = {
      blogId: blog._id, // Set this dynamically based on your app
      comment: {
        author: 'Nabbar', // Replace with dynamic user data if needed
        content: comment,
        timestamp: new Date().toISOString(),
        imageUrl: 'https://i.pinimg.com/474x/16/3c/d4/163cd47627e3599a752c4815c62442c9.jpg', // Add image URL if needed
        canReply: true
      }
    };

    try {
      const response = await axios.post(
        'https://sociosolution-api.vercel.app/blogs/update-comment',
        commentData
      );
      setSuccess('Comment submitted successfully!');
      settrack(Math.random());

      setComment(''); // Clear the textarea
    } catch (err) {
      setError('Error submitting comment.',err.message); 
    }
  };

  return (
    <div className="lg:p-12 p-2">
      <form className="max-w-lg" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            type="text"
            name="comment"
            id="floating_comment"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <label
            htmlFor="floating_comment"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Comment
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Submit
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default Comment;
