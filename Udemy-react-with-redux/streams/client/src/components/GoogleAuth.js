import React from 'react'
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

const clientID = '368979727243-e5mi6ahom0np2v7tka6n6k7pcbkt5od0.apps.googleusercontent.com'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: clientID,
        scope: 'email'
      }).then(() => {
        // Getting auth object
        this.auth = window.gapi.auth2.getAuthInstance();
        // Update auth state in redux store
        this.onAuthChange(this.auth.isSignedIn.get());
        // Wait for auth status to change at some point
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = isSignedIn => {
    if(isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if(this.props.isSignedIn === null) {
      return null;
    } else if(this.props.isSignedIn) {
      return (
        <button  onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
          </button>
      )
    } else {
      return(
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      )
    }
  }

  render() {
    return <div>
        {this.renderAuthButton()}
      </div>
    
  }
}

const mapStateToProps = state => {
  return {isSignedIn: state.auth.isSignedIn};
}

export default connect(
  mapStateToProps,
  {signIn, signOut})
  (GoogleAuth);