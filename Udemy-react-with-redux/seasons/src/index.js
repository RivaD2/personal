import React  from 'react'
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    constructor(props){
        super(props);
        // Setting it to null tells me I will know latitude eventually
        // ONLY TIME I will do direct assignment to this.state
        this.state ={
            lat: null,
            errorMessage: ''
        };
        window.navigator.geolocation.getCurrentPosition(
            // Success callback (first callback) for when things go as planned
            // Position object contains latitude, use it to customize look and feel of page
            position => {
                // Updating state object
                this.setState({lat: position.coords.latitude})  
            },
            // Need a second callback for errors and handle them appropriately by rerendering component
            err => {
                // This still leaves latitude untouches, I am just adding properties onto state, not deleting them
                this.setState({errorMessage: err.message});
            }
        );
    }
    render() {
        // Refactor using ternary
           if(this.state.errorMessage && !this.state.late) return <div>Error: {this.state.errorMessage}</div>
           if(!this.state.errorMessage && this.state.lat) return <div>Latitude: {this.state.lat}</div>
           return <div>Loading!</div>
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))

    