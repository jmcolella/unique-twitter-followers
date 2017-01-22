import React, { Component } from 'react';
import { connect } from 'react-redux';
import Infinite from 'react-infinite';
import { fetchFollowing, compareFollowing } from '../actions/following_actions';
import Banner from '../components/Banner';
import Header from '../components/Header';
import List from '../components/List';
import Loading from '../components/Loading';
import Error from '../components/Error';

class FollowingLists extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      user1Compare: [],
      user2Compare: [],
      user1Index: 20,
      user2Index: 20,
      isLoading: false
    };

    this.handleInfiniteLoad = this.handleInfiniteLoad.bind( this );
  }
  componentDidMount() {
    const { store, dispatch } = this.context;
    const handles = store.getState().handles;

    store.dispatch( fetchFollowing( [handles.handle1, handles.handle2] ) )
    .bind( this )
    .then( ( res ) => {
      if ( res[0].type != 'TWITTER_ERROR' &&  res[1].type != 'TWITTER_ERROR' ) {
        this.context.store.dispatch( store.dispatch( compareFollowing( res[0].followingList, res[1].followingList ) ) );
      }
    });

    this.unsubscribe = store.subscribe( () => {
      this.forceUpdate;
    });
  }
  componentWillReceiveProps( nextProps ) {
    const { store } = this.context;
    const following = nextProps.following;
    const loading = following.loading;

    if ( !loading ) {
      this.setState({
        user1Compare: following.user1Compare.slice( 0, 20 ),
        user2Compare: following.user2Compare.slice( 0, 20 )
      });
    }
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  handleInfiniteLoad() {
    const { store } = this.context;
    const state = store.getState();
    const following = state.following;

    this.setState({
      isLoading: true
    });

    if ( (this.state.user1Index <  following.user1Compare.length - 1) || (this.state.user2Index < following.user2Compare.length - 1) ) {
      this.setState({
        user1Compare: this.state.user1Compare.concat( following.user1Compare.slice( this.state.user1Index, this.state.user1Index + 20 ) ),
        user1Index: this.state.user1Index + 20,
        user2Compare: this.state.user2Compare.concat( following.user2Compare.slice( this.state.user2Index, this.state.user2Index + 20 ) ),
        user2Index: this.state.user2Index + 20,
        isLoading: false
      });
    } else {
      this.setState({
        isLoading: false
      });
    };
  }
  render() {
    const { store } = this.context;
    const state = store.getState();
    const handles = state.handles;
    const following = state.following;
    let displayLists,
        infiniteLoading;

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
            compareList={ this.state.user1Compare } />

          <List
            handle={ handles.handle2 }
            compareList={ this.state.user2Compare } />
        </div>
    }

    if ( !this.state.isLoading && (this.state.user1Compare.length !== following.user1Compare.length || this.state.user2Compare.length !== following.user2Compare.length) ) {
      infiniteLoading =
        <button
          className='load-more-button'
          onClick={ this.handleInfiniteLoad }
        >
          Load More
        </button>
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

        { infiniteLoading }

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
