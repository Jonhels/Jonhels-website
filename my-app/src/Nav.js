import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Link } from 'react-router-dom';
import DarkMode from './Components/DarkMode';

function Nav() {

    return (
        <div>
            <nav>
                <h3>Logo</h3>
                <DarkMode></DarkMode>
                <ul className="nav-links">
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        </div>

    );
}

export default Nav;