import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ href, text, className = '', ...props }) => {
  return (
    <a href={href} className={`btn ${className}`} {...props}>
      {text}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
