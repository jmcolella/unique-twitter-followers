import React from 'react';

const Friend = ( props ) => {
  return (
    <div className='individual-friend-container'>
      <p><a href={`https://www.twitter.com/${props.friend}`}>{ props.friend }</a></p>
    </div>
  )
}

Friend.propTypes = {
  friend: React.PropTypes.string.isRequired
}

export default Friend;
