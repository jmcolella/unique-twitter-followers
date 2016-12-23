import React from 'react';
import { Link } from 'react-router';

const Button = ( props ) => (
  <Link to={ props.link }>
    <button
      type='button'
    >
      { props.title }
    </button>
  </Link>
);

Button.propTypes = {
  link: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
}

export default Button;
