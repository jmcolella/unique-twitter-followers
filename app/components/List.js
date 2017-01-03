import React from 'react';
import Friend from './Friend';

const List = ( { handle, compareList } ) => {
  return (
    <div className='individual-list-container'>
      <h1>{ handle }</h1>
      {
        compareList.map( ( f, index ) => {
          return <Friend
                    key={ index }
                    friend={ f } />
        })
      }
    </div>
  )
};

export default List;
