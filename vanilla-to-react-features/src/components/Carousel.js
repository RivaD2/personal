import React, { useState } from 'react'
import './Carousel.css';

const Carousel = props => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {/* Some images from unsplash have no description
            Need to filter out images that ONLY have description */}
          {props.images.map((image, index) => (
            <div
              role="img"
              aria-label={image.alt_description}
              title={image.description}
              style={{backgroundImage:`url(${image.urls.small})`}}
              key={image.id}
              src={image}
              className={index === activeImage ? "active carousel-image" : "carousel-image"}>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Carousel;