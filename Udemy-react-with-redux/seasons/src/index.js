import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        // success callback (first callback) for when things go as planned
        // Position object contains latitude, use it to customize look and feel of page
        (position) => console.log(position),
        // need a second callback for errors
        (err) => console.log(err)
    );
    return (
        <div>Latitude: </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)