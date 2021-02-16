import React from 'react';
import './App.css';
import Slider from './Components/Slider';
import cat from './Components/Img/cat-back.png';
import cattummy from './Components/Img/cat-tummy.png';
import catillu from './Components/Img/catillustrations.png';
import Contact from './Components/Contact';

function Home() {
  return (
    <div className="Home">
      <div className="Header-h1">
        <h1>Home</h1>
      </div>
      <div className="Slider-div">
        <Slider></Slider>
      </div>
      <div className="home-context">
        <div className="information">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam ipsa natus corrupti minus eos porro amet, labore hic, blanditiis harum quidem cupiditate ipsam nam ad voluptatibus nesciunt sequi perspiciatis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quibusdam ipsa natus corrupti minus eos porro amet, labore hic, blanditiis harum quidem cupiditate ipsam nam ad voluptatibus nesciunt sequi perspiciatis!</p>
          <a href="#">Contact</a>
        </div>
      </div>
      <h1 className="Header-h1">Products</h1>
      <div className="wrapper">
        <div className="Content">
          <div className="Emotes-holder">
            <div className="holder-content">
              <h1 className="h1-headers">Emotes</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium eos dignissimos? Fuga commodi esse debitis, quam beatae est impedit quae ab rerum sapiente dolorum autem qui eveniet sint obcaecati?</p>
            </div>
          </div>
          <div className="img-holder">
            <img className="cat-back" src={cat} alt="Cat-back" />
          </div>
        </div>
        <div className="Content-2">
          <div className="Emotes-holder">
            <img className="cat-back" src={cattummy} alt="Cat-back" />
          </div>
          <div className="img-holder">
            <div className="holder-content">
              <h1 className="h1-headers">Badges</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium eos dignissimos? Fuga commodi esse debitis, quam beatae est impedit quae ab rerum sapiente dolorum autem qui eveniet sint obcaecati?</p>
            </div>
          </div>
        </div>
        <div className="Content-2">
          <div className="Emotes-holder">
            <div className="holder-content">
              <h1 className="h1-headers">Panels</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium eos dignissimos? Fuga commodi esse debitis, quam beatae est impedit quae ab rerum sapiente dolorum autem qui eveniet sint obcaecati?</p>
            </div>
          </div>
          <div className="img-holder">
            <img className="cat-back" src={cat} alt="Cat-back" />
          </div>
        </div>
        <div className="Content-2">
          <div className="Emotes-holder">
            <img className="cat-illu" src={catillu} alt="Cat-back" />
          </div>
          <div className="img-holder">
            <div className="holder-content">
              <h1 className="h1-headers">Illustrations</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium eos dignissimos? Fuga commodi esse debitis, quam beatae est impedit quae ab rerum sapiente dolorum autem qui eveniet sint obcaecati?</p>
            </div>
          </div>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
}

export default Home;