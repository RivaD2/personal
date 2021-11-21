import React, { useState } from 'react'

const Carousel = props => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
      {props.images.map((image, index) => (
        <img
         key={image}
         src={image}
         className={index === activeImage ? "active" : ""}
         alt=""/>
       ))}
      </div>
    </div>
  )
}

export default Carousel;