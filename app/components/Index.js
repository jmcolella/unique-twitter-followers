import React from 'react';
import { Link } from 'react-router';
import Button from './Button';
import '../assets/stylesheets/index.scss';

const Index = () => {
  return (
    <div className='index-container fade-in'>
      <div className='index-presentation'>
        <i className="fa fa-4x fa-twitter" aria-hidden="true"></i>
        <h1>UNIQTWEET</h1>

        <div className='index-presentation-subtext'>
          <p>Two Twitter handles. All unique friends.</p>
          <p>Much exploration.</p>
        </div>

        <Button link={ '/handles' }>
          GET STARTED
        </Button>
      </div>
    </div>
  )
};

Index.contextTypes = {
  router: React.PropTypes.object
}

export default Index;
