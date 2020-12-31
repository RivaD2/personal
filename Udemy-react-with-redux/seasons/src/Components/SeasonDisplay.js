import React from 'react'
import '../Components/SeasonDisplay.css';

const seasonConfig = {
  summer: {
    displayMessage:'Time for a tan!',
    iconName: 'sun'
  },
  winter: {
    displayMessage:'Brr, it is chilly out there!',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  // Handles summer months
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    // Handles winter
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {displayMessage, iconName} = seasonConfig[season];

    return (
      //root element div has same className as the Class
        <div className={`season-display ${season}`}>
          <i className={`icon-left massive ${iconName} icon`} />
         <h1>{displayMessage}</h1>
         <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}
export default SeasonDisplay;