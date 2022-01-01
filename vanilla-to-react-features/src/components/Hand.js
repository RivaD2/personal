import React from 'react'
import './Hand.css';

const Hand = ({ time, hand }) => {
  const minAndSecondDegrees = ((time / 60) * 360) + 90;
  const hourDegrees = ((time / 12) * 360) + 90;
  const handDegrees = hand === 'hourHand' ? hourDegrees : minAndSecondDegrees;

  return (
    <div className="hand-container">
      <div
        className={`analog-clockhand ${hand}`}
        style={{transform: `rotate(${handDegrees}deg)`}}>
      </div>
    </div>
  )
}

export default Hand;