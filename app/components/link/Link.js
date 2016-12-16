import React from 'react';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';

const Link = ({ goTo, path, children }) => (
  <a onClick={goTo.bind(null, path)} className='link'>
    {children}
  </a>
);

const mapDispatchToProps = (dispatch) => ({
  goTo: (path) => { dispatch(push(path)) },
});

export default connect(null, mapDispatchToProps)(Link);
