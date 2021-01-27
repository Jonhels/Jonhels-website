import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../DarkMode.css';

const DarkMode = () => {
    let clickedClass = "clicked"
    const body = document.body;
    const lightMode = "light";
    const darkMode = "dark"
    let mode;

    if (localStorage) {
        mode = localStorage.getItem("mode");
    }

    if (mode === lightMode || mode === darkMode) {
        body.classList.add(mode);
    } else {
        body.classList.add(lightMode);
    }

    const switchMode = (e) => {
        if (mode === darkMode) {
            body.classList.replace(darkMode, lightMode);
            //e.target.classList.remove(clickedClass);
            localStorage.setItem("mode", "light");
            mode = lightMode;
            console.log('if')
        } else {
            body.classList.replace(lightMode, darkMode);
            //e.target.classList.add(clickedClass);
            localStorage.setItem("mode", "dark");
            mode = darkMode;
            console.log('else')
        }
    };

   return (
        <div className="toggle-container">
            <span className="toggle">
                <input
                    onChange={(e) => switchMode(e)}
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                />
                <label htmlFor="checkbox" />
            </span>
        </div>
    );
}

export default DarkMode;