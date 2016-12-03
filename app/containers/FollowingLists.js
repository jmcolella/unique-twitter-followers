import React, { Component } from 'react';

class FollowingLists extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe( () => {
      this.forceUpdate;
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { store } = this.context;
    const state = store.getState();
    return (
      <div>
        <p className="user1">{ state.screenNames.user1 }</p>
        <p className="user2">{ state.screenNames.user2 }</p>
      </div>
    )
  }
};

FollowingLists.contextTypes = {
  store: React.PropTypes.object,
  router: React.PropTypes.object
}

export default FollowingLists;
