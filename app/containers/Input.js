import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHandle } from '../actions/add_handles_actions';

class Input extends Component {
  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe( () => {
      this.forceUpdate()
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render () {
    let input;
    const { store } = this.context;
    const { id, placeholder } = this.props;
    const handles = store.getState().handles;

    return (
      <input
        id={ `input-${ id }` }
        ref={
          ( node ) => {
            input = node
          }
        }
        type='text'
        onChange={
          () => store.dispatch( addHandle( input.value, id ) )
        }
        placeholder={ placeholder }
        value={ handles[`handle${ id }`] ? handles[`handle${ id }`] : '' } />
    )
  }
};

Input.propTypes = {
  id: React.PropTypes.number.isRequired,
  placeholder: React.PropTypes.string.isRequired
}

Input.contextTypes = {
  store: React.PropTypes.object
};

export default connect()( Input );
