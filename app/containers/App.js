import React, { Component } from 'react';
import '../assets/stylesheets/application.scss';

class App extends Component {
  render() {
    let input1, input2;
    return (
      <div className='container center-text'>
        <input
          ref={
            ( node1 ) => {
              input1 = node1
            }
          }
          type="text"
          placeholder="Input 1" />

        <input
          ref={
            ( node2 ) => {
              input2 = node2
            }
          }
          type="text"
          placeholder="Input 2" />

        <button>Submit</button>
      </div>
    )
  }
};

App.contextTypes = {
  store: React.PropTypes.object
}

export default App;
