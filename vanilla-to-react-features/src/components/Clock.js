import React, { useState, useEffect} from 'react'
import Hand from './Hand';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState({});
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

  const generateTime = () => {
    const newTime = new Date();
    const seconds = newTime.getSeconds();
    const minutes = newTime.getMinutes();
    const hours = newTime.getHours();
    setTime({
      seconds, minutes, hours
    });
  }

  return (
    <div className="analog-clock-wrapper">
      <div className="analog-clock">
        <div className="analog-clock-face">
          <Hand id="second-hand" time={time.seconds}/>
          <Hand id="minute-hand" time={time.minutes}/>
          <Hand id="hour-hand" time={time.hours}/>
        </div>
      </div>
    </div>
  )
}

export default Clock;
