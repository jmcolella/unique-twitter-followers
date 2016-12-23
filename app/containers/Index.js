import React from 'react';
import { Link } from 'react-router';
import '../assets/stylesheets/index.scss';

const Index = () => {
  return (
    <div className='index-container fade-in'>
      <div className='index-presentation'>
        <i className="fa fa-4x fa-twitter" aria-hidden="true"></i>
        <h1>UNIQTWEET</h1>
        <p>Two Twitter handles. All unique friends.<br/>Much exploration.</p>

        <Link to='/handles'>
          <button
            type='button'
          >
            GET STARTED
          </button>
        </Link>
      </div>
    </div>
  )
};

Index.contextTypes = {
  router: React.PropTypes.object
}

export default Index;
