import React  from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './Components/SeasonDisplay';
import Spinner from './Components/Spinner';
import "semantic-ui-css/semantic.min.css";

export default class App extends React.Component {
   state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // Success callback (first callback) for when things go as planned
            // Position object contains latitude, use it to customize look and feel of page
            position => this.setState({lat: position.coords.latitude}),
              //Adding properties onto state, not deleting them
            err => this.setState({errorMessage: err.message})
        );
    };

    renderContent() {
        if(this.state.errorMessage && !this.state.late) return <div>Error: {this.state.errorMessage}</div>
        // I can take state and pass as it as a prop 
        // The component will rerender any children it shows as well when state is updated
        if(!this.state.errorMessage && this.state.lat) return <SeasonDisplay lat={this.state.lat} />
        return <Spinner userMessage="Please Accept Location Request"/>
    }

    render() {
        // An example that sometimes we want to wrap everything in component with common element
      return (
          <div className="border red">
              {this.renderContent()}
          </div>
      )
    }
};

ReactDOM.render(<App />, document.querySelector('#root'))

    