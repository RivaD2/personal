import React from 'react'

export default function CarouselButton({ direction, onClick }) {
  const arrowImage = `/images/${direction}arrow.jpg`;

  const onCarouselButtonClicked = () => {
    onClick(direction);
  }

  return (
    <div className="carousel-button-container">
       <button className={`carousel-button carousel-button-${direction}`} onClick={onCarouselButtonClicked}>
        <img src={arrowImage} alt={`arrow to scroll carousel items ${direction}`}></img>
      </button>
    </div>
  )
}
