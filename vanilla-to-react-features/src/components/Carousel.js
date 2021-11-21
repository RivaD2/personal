import React, { useState } from 'react'
import './Carousel.css';

const Carousel = props => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
          {props.images.map((image, index) => (
            <div
              style={{backgroundImage:`url(${image})`}}
              key={image}
              src={image}
              className={index === activeImage ? "active carousel-image" : "carousel-image"}>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Carousel;