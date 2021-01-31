import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Link } from 'react-router-dom';
import DarkMode from './Components/DarkMode';

function Nav() {

    return (
        <div className="Navigation-holder">
            <nav>
                <h3>Logo</h3>
                <DarkMode></DarkMode>
                <ul className="nav-links">
                <Link id="Link-1" to="/">
                        <li>Home</li>
                    </Link>
                    <Link id="Link-2" to="/Emotes">
                        <li>Emotes</li>
                    </Link>
                    <Link id="Link-3" to="/Panels">
                        <li>Panels</li>
                    </Link>
                    <Link  id="Link-4"to="/Illustrations">
                        <li>Illustrations</li>
                    </Link>
                    <Link id="Link-5" to="/Prices">
                        <li>Prices</li>
                    </Link>
                </ul>
            </nav>
        </div>

    );
}

export default Nav;