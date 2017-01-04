import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFollowing, compareFollowing } from '../actions/following_actions';
import Banner from '../components/Banner';
import Header from '../components/Header';
import List from '../components/List';
import Loading from '../components/Loading';
import Error from '../components/Error';

class FollowingLists extends Component {
  componentDidMount() {
    const { store, dispatch } = this.context;
    const handles = store.getState().handles;

    store.dispatch( fetchFollowing( [ handles.handle1, handles.handle2 ] ) );

    this.unsubscribe = store.subscribe( () => {
      this.forceUpdate;
    });
  }
  componentWillReceiveProps( nextProps ) {
    const { store } = this.context;
    const following = nextProps.following;
    const user1 = following[nextProps.handles.handle1];
    const user2 = following[nextProps.handles.handle2];
    const loading = following.loading;

    if ( loading && !user1.isFetching && !user2.isFetching && !user1.error && !user2.error ) {
      store.dispatch( compareFollowing( user1.following, user2.following ) );
    }
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { store } = this.context;
    const state = store.getState();
    const handles = state.handles;
    const following = state.following;
    let displayLists;

    // need to handle error UI

    if ( following.loading ) {
      displayLists =
        <Loading />
    } else if ( following[handles.handle1].error || following[handles.handle2].error ) {
      displayLists =
        <Error />
    } else {
      displayLists =
        <div className='lists-container'>
          <List
            handle={ handles.handle1 }
            compareList={ following.user1Compare } />

          <List
            handle={ handles.handle2 }
            compareList={ following.user2Compare } />
        </div>
    }
    return (
      <div className='container fade-in'>

        <div className='seventyfive-percent-width'>
          <Banner />
        </div>

        <Header
          title={ 'Unique Friends' }
          subTitle={ 'Explore the Twitter friends unique to each user' } />

        { displayLists }

      </div>
    )
  }
};

FollowingLists.contextTypes = {
  store: React.PropTypes.object,
  router: React.PropTypes.object
}

function mapStateToProps( state ) {
  const { handles, following } = state;
  return {
    handles,
    following
  }
}

export default connect( mapStateToProps )( FollowingLists );
