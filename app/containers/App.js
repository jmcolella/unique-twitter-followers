import React, { Component } from 'react';
import '../assets/stylesheets/application.scss';

class App extends Component {
  render() {
    return (
      <div className='center-text'>
        { this.props.children }
      </div>
    )
  }
};

App.contextTypes = {
  store: React.PropTypes.object,
  router: React.PropTypes.object
}

export default App;
