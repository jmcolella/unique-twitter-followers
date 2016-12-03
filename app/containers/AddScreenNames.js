import React, { Component } from 'react';
import { addUsers } from '../actions/add_users_actions';

class AddScreenNames extends Component {
  constructor() {
    super()

    this._submitScreenNames = this._submitScreenNames.bind( this )
  }
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe( () =>
      this.forceUpdate()
     )
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  _submitScreenNames( user1, user2 ) {
    const { store, router } = this.context;
    store.dispatch( addUsers( user1, user2 ) );

    router.push( '/following_lists' );
  }
  render() {
    let input1, input2;
    return (
      <div>
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

        <button
          onClick={
            () => this._submitScreenNames( input1.value, input2.value )
          }
        >
          Submit
        </button>
      </div>
    )
  }
};

AddScreenNames.contextTypes = {
  store: React.PropTypes.object,
  router: React.PropTypes.object
}

export default AddScreenNames;
