import React from 'react'
import './Hand.css';

const Hand = ({ time, hand }) => {
  const handDegrees = hand === 'hourHand' ?
    ((time / 12) * 360) + 90 : ((time / 60) * 360) + 90;

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