import React from 'react';
import './App.css';
import Slider from './Components/Slider';

function Home() {
  return (
    <div >
    <div className="Header-h1">
    <h1>Home</h1>
    </div>
      
        <div className="Home">
        <Slider></Slider>
        </div>
        
    </div>
  );
}


export default Home;