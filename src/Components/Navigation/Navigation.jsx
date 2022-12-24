import React from 'react';
import c from './Navigation.module.css'
const Navigation = () => {
    return (
        <nav className={c.navigation}>
            <ul>
                <li><a href='/Profile'>Profile</a></li>
                <li><a href='/Dialogs'>Messages</a></li>
                <li><a href='/News'>News</a></li>
                <li><a href='/Music'>Music</a></li>
                <li><a href='/Setting'>Settings</a></li>
            </ul>
        </nav>
    );
}


export default Navigation;


