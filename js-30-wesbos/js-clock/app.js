// Selectors
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Functions
/*
Create setDate function
 - Need date now
 - Need to get seconds from date now
 - Turn seconds into degrees
 - set style on secondHand that rotates the hand by degrees set
 - Repeat same steps for hour hand and minute hand
- I need to run this every second so I can use setInterval
*/

function setDate() {
  const dateNow = new Date();

  const seconds = dateNow.getSeconds();
  const secondsToDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;

  const minutes = dateNow.getMinutes();
  const minutesToDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`

  const hours = dateNow.getHours();
  const hoursToDegrees = ((hours / 60) * 360) + 90;
  hourHand.style.transform(`rotate(${hoursToDegrees}deg)`);
  console.log(seconds);
}

setInterval(setDate, 1000);
