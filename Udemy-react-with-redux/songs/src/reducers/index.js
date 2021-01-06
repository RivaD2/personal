import {combineReducers} from 'redux';

const songsReducer = () => {
  return [
    {title: 'Brown Eyed Girl', duration: '1.00'},
    {title: 'Interstate Love Song', duration: '2.00'},
    {title: 'Vienna', duration: '2.10'},
    {title: 'Could you be loved', duration: '1.30'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

