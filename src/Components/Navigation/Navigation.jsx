import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Navigation.module.css'
const Navigation = () => {
    return (
        <nav className={c.navigation}>
            <ul>
                <li><NavLink to='/Profile'>Profile</NavLink></li>
                <li><NavLink to='/Dialogs'>Messages</NavLink></li>
                <li><NavLink to='/News'>News</NavLink></li>
                <li><NavLink to='/Music'>Music</NavLink></li>
                <li><NavLink to='/Setting'>Settings</NavLink></li>
            </ul>
        </nav>
    );
}


export default Navigation;


