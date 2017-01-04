import React from 'react';

const Error = () => (
  <div className='error-container fifty-percent-width'>
    <p>Oh no! Due to Twitter limitations, your search can't be completed.</p>
    <p>
      This may be due to the number of friends for each handle you want to search.
      Please keep this in mind in your next search.
    </p>
    <p>Do try again in a few minutes!</p>
  </div>
);

export default Error;
