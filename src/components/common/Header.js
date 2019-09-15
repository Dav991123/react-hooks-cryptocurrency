import React from 'react';
import logo from './logo.png';
import './Header.css';
const Header = () => {
    return (
        <header className="Header">
            <img 
                src={logo}
                alt="logo"
                className="Header-logo"
            />
        </header>
    )
}
export default Header;