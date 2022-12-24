import React from 'react';
import c from './Header.module.css'
const Header = () => {
  return (
    <header className={c.header}>
      <img alt='logo' className={c.logo} src='https://upload.wikimedia.org/wikipedia/ru/f/f9/Philadelphia_Eagles_primary_logo.png' />
    </header>
  );
}

export default Header;