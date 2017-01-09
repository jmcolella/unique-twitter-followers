import React from 'react';
import { Link } from 'react-router';

const Button = ( props ) => (
  <Link to={ props.link }>
    <button
      type='button'
    >
      { props.children }
    </button>
  </Link>
);

Button.propTypes = {
  link: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
}

export default Button;
