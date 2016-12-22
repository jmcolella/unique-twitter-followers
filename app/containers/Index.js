import React, { Component } from 'react';
import '../assets/stylesheets/index.scss';

class Index extends Component {
  constructor() {
    super()

    this._routeHandlesClick = this._routeHandlesClick.bind( this )
  }
  _routeHandlesClick() {
    const { router } = this.context;
    router.push( '/handles' );
  }
  render() {
    return (
      <div className='index-container'>
        <div className='index-presentation'>
          <i className="fa fa-4x fa-twitter" aria-hidden="true"></i>
          <h1>UNIQTWEET</h1>
          <p>Two Twitter handles. All unique friends.<br/>Much exploration.</p>

          <button
            onClick={ this._routeHandlesClick }
          >
            GET STARTED
          </button>
        </div>
      </div>
    )
  }
};

Index.contextTypes = {
  router: React.PropTypes.object
}

export default Index;
