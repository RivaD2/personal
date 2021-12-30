import React from 'react'
import './Hand.css';

const Hand = ({time}) => {
  const handDegrees = ((time / 60) * 360) + 90;

  // Styling for individual hands needed
  // props is 3 numbers (seconds, minutes, hours)
  return (
    <div className="hand-container">
      <div
        className="analog-clockhand"
        style={{transform: `rotate(${handDegrees}deg)`}}>
      </div>
    </div>
  )
}

export default Hand;