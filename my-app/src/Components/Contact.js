import React from 'react';
import '../App.css';
import Discord from './Img/Discord.svg';
import Email from './Img/Email.svg';
import Twitch from './Img/Twitch.svg';
import Twitter from './Img/Twitter.svg';

function Contact() {
    return (
        <div className="contact">
            <div className="Socials">
                <ul>
                    <li><a href="#"><img src={Discord} alt="Discord" /></a></li>
                    <li><a href="#"><img src={Twitter} alt="Twitter" /></a></li>
                    <li><a href="#"><img src={Twitch} alt="Twitch" /></a></li>
                    <li><a href="#"><img src={Email} alt="Email" /></a></li>
                </ul>
            </div>
            <div className="trademark">
                <p>©2021 Designed & Developed by <a href="#">Jon</a></p>
            </div>
        </div>
    );
}


export default Contact;