import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import DarkMode from './Components/DarkMode';



function Nav() {

    return (
        <div className="Navigation-holder">
            <nav>
                <div className="logo">
                    <span className="logo-top">
                        Artist
                    </span>
                    <br />
                    <Link to="/">
                        <span className="logo-bottom">
                            Logo
                        </span>
                    </Link>
                </div>
                <DarkMode></DarkMode>
                <ul className="nav-links">
                    <Link className="Link-1" to="/">
                        <li>Home</li>
                    </Link>
                    <Link className="Link-2" to="/Emotes">
                        <li>Emotes</li>
                    </Link>
                    <Link className="Link-3" to="/Panels">
                        <li>Panels</li>
                    </Link>
                    <Link className="Link-4" to="/Badges">
                        <li>Badges</li>
                    </Link>
                    <Link className="Link-5" to="/Illustrations">
                        <li>Illustrations</li>
                    </Link>
                    <Link className="Link-6" to="/Prices">
                        <li>Prices</li>
                    </Link>
                </ul>
            </nav>
        </div>

    );
}

export default Nav;