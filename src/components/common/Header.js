import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';
const Header = () => {
    return (
        <header className="Header">
            <Link to="/">
                <img 
                    src={logo}
                    alt="logo"
                    className="Header-logo"
                />
            </Link>
        </header>
    )
}
export default Header;