import React , {Component} from 'react'
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
             >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
};

// Taking state object (data in store) and have data show as props in component
// Clicking on the Select button will update state
const mapStateToProps = state => {
  // Saying in the future, this.props === {songs: state.songs}
  return {songs: state.songs};
};

// By passing action creators to connect, connect takes action returned to dispatch
export default connect(
  mapStateToProps, 
  {selectSong})(SongList);
