"use client";
import { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './Carousel.css';
import Navbar from '../Navbar/Navbar';
import * as images from '../../assets/index';
import Button from '../../constants/Button/Button';

const HeroSlider = () => {
  useEffect(() => {
    const options = {
      accessibility: true,
      prevNextButtons: true,
      pageDots: true,
      setGallerySize: false,
      autoPlay: 3000, 
      wrapAround: true, 
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
      }
    };

    const carousel = document.querySelector('[data-carousel]');
    const slides = document.getElementsByClassName('carousel-cell');
    const flkty = new Flickity(carousel, options);

    const restartAutoPlay = () => {
      flkty.playPlayer(); 
    };

    flkty.on('scroll', function () {
      flkty.slides.forEach(function (slide, i) {
        const image = slides[i];
        const x = (slide.target + flkty.x) * -1 / 3;
        image.style.backgroundPosition = `${x}px`;
      });
    });

    flkty.on('change', restartAutoPlay); 
    flkty.on('staticClick', restartAutoPlay);

    return () => {
      flkty.destroy();
    };
  }, []);

  return (
    <>
      <div className='fixed z-50 w-full mx-auto justify-between'>
        <Navbar />
      </div>
      <div className="hero-slider" data-carousel>
        <div
          className="carousel-cell"
          style={{
              backgroundImage: `url(${images.imgCarousel1.src})`,
          }}
        >
          <div className="overlay"></div>
          <div className="inner">
            <h3 className="subtitle">SociAlly</h3>
            <h2 className="title">Transform your mental health</h2>
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn">
              Let's begin!
            </a>
          </div>
        </div>
        <div
          className="carousel-cell"
          style={{
              backgroundImage: `url(${images.imgCarousel2.src})`,
          }}
        >
          <div className="overlay"></div>
          <div className="inner">
            <h3 className="subtitle">SociAlly</h3>
            <h2 className="title">Begin your Inner Peace Journey</h2>
            <Button href="#" text="Our Services" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
