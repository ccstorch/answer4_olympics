import React from 'react';
import Logo from '../logo/Logo';

const Layout = ({ children }) => (
  <div className='layout'>
    <Logo />
    <div className='content'>
      {children}
    </div>
  </div>
);

export default Layout;
