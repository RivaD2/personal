import React , {Component} from 'react'
import {connect} from 'react-redux';

class SongList extends Component {
  render() {
    return (
      <div>
        Songlist
      </div>
    )
  }
};
// Taking state object (data in store) and have data show as props in component
const mapStateToProps = state => {
  // Saying in the future, this.props === {songs: state.songs}
  return {songs: state.songs};
}

// Connect returns a function and second set invokes the function that gets returned
export default connect(mapStateToProps)(SongList);
