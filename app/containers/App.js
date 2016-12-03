import React, { Component } from 'react';
import '../assets/stylesheets/application.scss';

class App extends Component {
  render() {
    return (
      <div className='container center-text'>
        <h1>Unique Twitter Followers</h1>
        <p>Enter 2 Twitter handles to see a list of uncommon users they are following</p>

        { this.props.children }
      </div>
    )
  }
};

App.contextTypes = {
  store: React.PropTypes.object
}

export default App;
