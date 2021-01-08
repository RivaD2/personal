import React from 'react'

const clientID = '368979727243-e5mi6ahom0np2v7tka6n6k7pcbkt5od0.apps.googleusercontent.com'

export default class GoogleAuth extends React.Component {
  state = {isSignedIn: null};

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: clientID,
        scope: 'email'
      }).then(() => {
        // Getting auth object
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange();
        this.auth.isSignedIn.listen(this.onAuthChange)
      });
    });
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()});
  }

  renderAuthButton() {
    if(this.state.isSignedIn === null) {
      return <div>don't know if I am signed in</div>;
    } else if(this.state.isSignedIn) {
      return <div>Signed in!</div>
    } else {
      return <div>I am not signed in!</div>;
    }
  }

  render() {
    return <div>
        {this.renderAuthButton()}
      </div>
    
  }
}
