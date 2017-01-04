import React from 'react';
import { Link } from 'react-router';

const Banner = () => (
  <div className='banner'>
    <div className='banner-left'>
      <i className="fa fa-twitter" aria-hidden="true"></i>
      <p><Link to='/'>UNIQTWEET</Link></p>
   </div>

   <div className='banner-right'>
     <p>john colella | <a href='https://github.com/jmcolella/unique-twitter-followers'>code</a></p>
   </div>
  </div>
);

export default Banner;
