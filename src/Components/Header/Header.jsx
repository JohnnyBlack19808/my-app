import React from 'react';
import c from './Header.module.css'
import logo from "./logo.png"
const Header = () => {
  return (
    <header className={c.header}>
      <img alt='logo' className={c.logo} src={logo} />
      <div className={c.text_logo}>MediaClub</div>
    </header>
  );
}

export default Header;