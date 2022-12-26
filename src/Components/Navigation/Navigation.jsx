import React from 'react';
import { BrowserRouter, NavLink, redirect } from 'react-router-dom';
import c from './Navigation.module.css'
import './Navigation.css'



const Navigation = () => {
    return (
        <div className={c.navigation}>
            <nav>
                <ul>
                    <li><NavLink to='/Profile'>Profile</NavLink></li>
                    <li><NavLink to='/Dialogs'>Messages</NavLink></li>
                    <li><NavLink to='/News'>News</NavLink></li>
                    <li><NavLink to='/Music'>Music</NavLink></li>
                    <li><NavLink to='/Setting'>Settings</NavLink></li>
                </ul>
            </nav>
        </div>


    );
}



export default Navigation;


