import React, { useState, useEffect } from 'react';
import CarouselButton from './CarouselButton'
import './Carousel.css';

const Carousel = ({ images }) => {
  let [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [widthOfSlide, setWidthOfSlide] = useState(0);

  useEffect(() => {
    // Won't call setSlidePosition until activeSlideIndex is updated
    setSlidePosition();
  },[activeSlideIndex]);


  const getWidthOfSlide = () => {
    const carouselTrack = document.getElementById('carousel-track');
    const trackChildrenSlides = Array.from(carouselTrack.children);
    const slideSize = trackChildrenSlides[0].getBoundingClientRect();
    setWidthOfSlide(slideSize.width);
  }

  // Sets position of slide
  const setSlidePosition = () => {
    const carouselTrack = document.getElementById('carousel-track');
    carouselTrack.style.transform = `translateX(-${widthOfSlide * activeSlideIndex}px`;
  }

  // Takes in direction, so direction can be set dynamically
  const onButtonClicked = direction => {
    const changeSlideIndex = direction === 'left' ? -1 : 1;
    let nextSlideIndex = activeSlideIndex + changeSlideIndex;

    // If user has reached end of Carousel, show them the beginning of Carousel
    if (nextSlideIndex === images.length) {
      nextSlideIndex = 0;
    }
    // If User has reached beginning, and clicks left, show them end of Carousel
    if (nextSlideIndex === -1) {
      nextSlideIndex = images.length - 1;
    }

    getWidthOfSlide();
    setActiveSlideIndex(nextSlideIndex);
  }

  return (
    <>
      <CarouselButton direction='left' onClick={onButtonClicked} />
        <div className="carousel">
          <div className="carousel-track-container">
            <div id="carousel-track">
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
      <CarouselButton direction='right' onClick={onButtonClicked} />
    </>
  )
}

export default Carousel;