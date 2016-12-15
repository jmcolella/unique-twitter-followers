import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFollowing, compareFollowing } from '../actions/following_actions';
import Friend from '../components/Friend';

class FollowingLists extends Component {
  componentDidMount() {
    const { store, dispatch } = this.context;
    const state = store.getState();

    store.dispatch( fetchFollowing( state.screenNames.users ) );

    this.unsubscribe = store.subscribe( () => {
      this.forceUpdate;
    });
  }
  componentWillReceiveProps( nextProps ) {
    const { store } = this.context;
    let user1 = nextProps.following[nextProps.screenNames.users[0]];
    let user2 = nextProps.following[nextProps.screenNames.users[1]];
    let user1CompareLength = nextProps.following.user1Compare.length;
    let user2CompareLength = nextProps.following.user2Compare.length;

    if ( user1.isFetching === false && user2.isFetching === false && user1CompareLength === 0 && user2CompareLength === 0 ) {
      store.dispatch( compareFollowing( user1.following, user2.following ) );
    }
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { store } = this.context;
    const state = store.getState();
    return (
      <div>
        <h1>{ state.screenNames.users[0] }</h1>
        {
          state.following.user1Compare.map( ( f, index ) => {
            return <Friend
                      key={ index }
                      friend={ f } />
          })
        }
        <h1>{ state.screenNames.users[1] }</h1>
        {
          state.following.user2Compare.map( ( f, index ) => {
            return <Friend
                      key={ index }
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
