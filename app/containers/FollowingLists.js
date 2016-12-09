import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFollowing } from '../actions/following_actions';
import Friend from '../components/Friend';

class FollowingLists extends Component {
  constructor() {
    super()

    this.state = {
      user1: [],
      user2: []
    }
  }
  componentDidMount() {
    const { store, dispatch } = this.context;
    const state = store.getState();

    store.dispatch( fetchFollowing( state.screenNames.users ) );

    this.unsubscribe = store.subscribe( () => {
      this.forceUpdate;
    });
  }
  componentWillReceiveProps( nextProps ) {
    let user1 = nextProps.following[nextProps.screenNames.users[0]];
    let user2 = nextProps.following[nextProps.screenNames.users[1]];
    if ( user1.isFetching === false && user2.isFetching === false ) {
      this.setState({
        user1: user1.following,
        user2: user2.following
      });
    }
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { store } = this.context;
    const storeState = store.getState();
    return (
      <div>
        <h1>{storeState.screenNames.users[0]}</h1>
        {
          this.state.user1.map( (f, index) => {
            return <Friend
                      id={ index }
                      friend={ f } />
          })
        }
        <h1>{storeState.screenNames.users[1]}</h1>
        {
          this.state.user2.map( (f, index) => {
            return <Friend
                      id={ index }
                      friend={ f } />
          })
        }
      </div>
    )
  }
};

FollowingLists.contextTypes = {
  store: React.PropTypes.object,
  router: React.PropTypes.object
}

function mapStateToProps( state ) {
  const { screenNames, following } = state;
  return {
    screenNames,
    following
  }
}

export default connect( mapStateToProps )( FollowingLists );
