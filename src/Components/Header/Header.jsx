import React from 'react';
import c from './Header.module.css'
import logo from "./logo.png"
const Header = () => {
  return (
    <header className={c.header}>
      <div className={c.text_logo}>Media <span>Club</span></div>
    </header>
  );
}

export default Header;