import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './hero.css'

function Hero() {
  return (
    <div className='carousel-content'>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className='img-hero' src="../../public/images/hero1.jpeg" alt=""/>
          <Carousel.Caption>
            <h1 className='title'>¡Descubre tu próxima aventura!</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className='img-hero' src="../../public/images/hero2.jpeg" alt="" />
          <Carousel.Caption>
            <h1 className='title'>¡Descubre tu próxima aventura!</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className='img-hero' src="../../public/images/hero3.jpeg" alt="" />
          <Carousel.Caption>
            <h1 className='title'>¡Descubre tu próxima aventura!</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
      
  );
}

export default Hero;