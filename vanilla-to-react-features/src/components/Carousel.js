import React, { useState } from 'react'
import './Carousel.css';

const Carousel = props => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="carousel">
      <div className="carousel-track-container">
        <div className="carousel-track">
            {/* Some images from unsplash have no description
              Need to filter out images that ONLY have description */}
            {props.images.map((image, index) => (
              <div className="carousel-slide current-slide"key={image.id}>
                <div
                  role="img"
                  aria-label={image.alt_description}
                  title={image.description}
                  style={{backgroundImage:`url(${image.urls.small})`}}
                  className={index === activeImage ? "active carousel-image" : "carousel-image"}>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel;