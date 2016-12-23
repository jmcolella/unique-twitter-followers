import React from 'react';

const Header = ( props ) => (
  <div className='header-container'>
    <h1>{ props.title }</h1>
    <p>{ props.subTitle }</p>
  </div>
);

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string.isRequired
};

export default Header;
