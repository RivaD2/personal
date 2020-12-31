import React from 'react'

const getSeason = (lat, month) => {
  // Handles summer months
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    // Handles winter
    return lat > 0 ? 'winter' : 'summer';
  }
}
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const displayMessage = season === 'winter' ? 'Brr, it is chilly out there!' : 'Time for a tan!'
  const icon = season === 'winter' ? 'snowflake' : 'sun';

    return (
        <div>
          <i className={`${icon} icon`} />
         <h1>{displayMessage}</h1>
         <i className={`${icon} icon`} />
        </div>
    )
}
export default SeasonDisplay;