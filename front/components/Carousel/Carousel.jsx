"use client";
import { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './Carousel.css';
import Button from '../../constants/Button/Button';
import { useTranslation } from "react-i18next";

const HeroSlider = () => {
  const { t } = useTranslation('global');

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
      <div className="hero-slider bg-[#11111a]" data-carousel>
        <div
          className="carousel-cell"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dzuvxegtt/image/upload/v1727238413/IMG_9795_ryrcyr.webp)`,
          }}
        >
          <div className="overlay"></div>
          <div className="inner">
            <h3 className="subtitle">{t('HeroSlider.slogan')}</h3>
            <h2 className="title">{t('HeroSlider.transformHealth')}</h2>
            <a href="/appointment" target="_blank" rel="noopener noreferrer" className="btn bg-[#296747] btn-round uppercase">
              {t('HeroSlider.letsBegin')}
            </a>
          </div>
        </div>

        <div
          className="carousel-cell"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dzuvxegtt/image/upload/v1727217456/IMG_9775_igkmdu.webp)`,
          }}
        >
          <div className="overlay"></div>
          <div className="inner">
            <h3 className="subtitle">{t('HeroSlider.slogan')}</h3>
            <h2 className="title">{t('HeroSlider.innerPeaceJourney')}</h2>
            <Button href="/services" text={t('HeroSlider.ourServices')} className='bg-[#296747] btn-round uppercase' />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
