import React from 'react'
import './Hand.css';

const Hand = ({time}) => {
  const seconds = time.seconds;
  const minutes = time.minutes;
  const hours = time.hours;

  // Reorganize code here (function needed)
  // Is there a better way to manage seconds, minutes, hours
  // Check styles again for each hand and change them accordingly
  // All hands should NOT Look the same
  // Inline styling is a good way to avoid grabbing elements by ID's but is it necessary
  // or should I just grab elements using id or something similar to vanilla JS way?
  const secondsToDegrees = ((seconds / 60) * 360) + 90;
  const minutesToDegrees = ((minutes / 60) * 360) + 90;
  const hoursToDegrees = ((hours / 60) * 360) + 90;
  console.log('secondsToDegrees',secondsToDegrees);

  return (
    <div className="hand-container">
      <div
        className ="analog-clockhand second-hand"
        style={{transform: `rotate(${secondsToDegrees}deg)`}}>
      </div>
      <div
        className="analog-clockhand minute-hand"
        style={{transform: `rotate(${minutesToDegrees}deg)`}}>
      </div>
      <div
       className="analog-clockhand hour-hand"
       style={{transform: `rotate(${hoursToDegrees}deg`}}>
       </div>
    </div>
  )
}

export default Hand;