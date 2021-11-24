import React, { useState } from 'react';
import CarouselButtonLeft from './CarouselButtonLeft'
import CarouselButtonRight from './CarouselButtonRight';
import './Carousel.css';

const Carousel = ({ images }) => {
  let [activeSlideIndex, setActiveSlideIndex] = useState(0);

  console.log('active Index',activeSlideIndex);

  const onRightButtonClicked = () => {
    setActiveSlideIndex(activeSlideIndex + 1);
  }

  const onLeftButtonClicked = () => {
    setActiveSlideIndex(activeSlideIndex - 1);
  }
  return (
    <>
      <CarouselButtonLeft />
        <div className="carousel">
          <div className="carousel-track-container">
            <div className="carousel-track">
              {/* Some images from unsplash have no description
                Need to filter out images that ONLY have description.
                Need to also look into accessiblity for div holding image*/}
              {images.map((image, index) => (
                  <div
                    role="img"
                    aria-label={image.alt_description}
                    title={image.description}
                    key={image.id}
                    style={{backgroundImage:`url(${image.urls.small})`}}
                    className={index === activeSlideIndex ? "carousel-slide carousel-image" : " carousel-slide carousel-image"}>
                  </div>
              ))}
            </div>
          </div>
        </div>
      <CarouselButtonRight />
    </>
  )
}

export default Carousel;