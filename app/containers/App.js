import React, { Component } from 'react';
import '../assets/stylesheets/application.scss';
import '../assets/font-awesome/scss/font-awesome.scss';

class App extends Component {
  render() {
    return (
      <div className='container fifty-percent-width center-text'>
        <div className="header-container">
          <i className="fa fa-3x fa-twitter" aria-hidden="true"></i>
          <h1>UNIQTWIT</h1>
          <p>Two Twitter handles. All unique friends. Much exploration.</p>
        </div>

        { this.props.children }
      </div>
    )
  }
};

App.contextTypes = {
  store: React.PropTypes.object
}

export default App;
