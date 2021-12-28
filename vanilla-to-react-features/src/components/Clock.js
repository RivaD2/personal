import React from 'react'
import './Clock.css';

const Clock = () => {
  return (
    <div className="clock-wrapper">
    <div className="clock-container">
      <div className="clock-face">
        <div className="hand second-hand"></div>
        <div className="hand minute-hand"></div>
        <div className="hand hour-hand"></div>
      </div>
    </div>
    </div>
  )
}
export default Clock;