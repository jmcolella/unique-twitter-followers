import React from 'react';
import { Link } from 'react-router';
import Banner from './Banner';
import Header from './Header';
import Input from '../containers/Input';
import Button from './Button';

const AddHandles = () => (
  <div className='container seventyfive-percent-width fade-in'>

    <Banner />

    <Header
      title={ 'Two Twitter Handles' }
      subTitle={ 'One click away from some unqiue finds.' } />

    <div className='children-container'>
      <div className='inputs-container'>
        <Input
          id={ 1 }
          placeholder={ 'first handle' } />

        <Input
          id={ 2 }
          placeholder={ 'second handle' } />
      </div>

      <div className='button-container'>
        <Button
          link={ '/following_lists' }
          title={ 'COMPARE' } />
      </div>

    </div>

  </div>
)

export default AddHandles;
