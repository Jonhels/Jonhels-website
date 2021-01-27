import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const [darkMode, setDarkMode] = React.useState(getInitialMode());
    React.useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode));
    }, [darkMode]);

    function getInitialMode() {
        const isReturningUser = "dark" in localStorage
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        const userPrefersDark = getPrefColorScheme();
        if (isReturningUser) {
            return savedMode;
        } else if (userPrefersDark) {
            return true;
        } else {
            return false;
        }
    };

    function getPrefColorScheme() {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };


    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <nav>
                <h3>Logo</h3>
                <div className="toggle-container">
                    <span className="toggle">
                        <input
                            checked={darkMode}
                            onChange={() => setDarkMode(prevMode => !prevMode)}
                            type="checkbox"
                            className="checkbox"
                            id="checkbox"
                        />
                        <label htmlFor="checkbox" />
                    </span>
                </div>
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