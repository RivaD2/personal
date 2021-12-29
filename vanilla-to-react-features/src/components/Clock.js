import React, { useState, useEffect, useRef} from 'react'
import './Clock.css';

const Clock = () => {
  // Instead of using setInterval in this way, remember
  // to view Dan Abrovmov's article on making setInterval declarative (if it will work nicely here)
  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  // I need to make setInterval and the Hook work well together
  useEffect(() => {
    const timer = setInterval(generateTime, 1000);
    return () => {
      clearInterval(timer);
    }
  });

  // Break apart depending on Hand component needs
  const generateTime = () => {
    const newTime = new Date();
    const seconds = newTime.getSeconds();
    const secondsToDegrees = ((seconds / 60) * 360) + 90;
    // should I grab each hand and then rotate like I did in vanilla JS?
    const minutes = newTime.getMinutes();
    const minutesToDegrees = ((minutes / 60) * 360) + 90;

    const hours = newTime.getHours();
    const hoursToDegrees = ((hours / 60) * 360) + 90;
  }

  return (
    <div className="analog-clock-wrapper">
      <div className="analog-clock">
        <div className="analog-clock-face">
         {/* Becomes part of Hand component * 3 */}
          <div className="analog-clockhand second-hand"></div>
          <div className="analog-clockhand minute-hand"></div>
          <div className="analog-clockhand hour-hand"></div>
        </div>
      </div>
    </div>
  )
}

export default Clock;
