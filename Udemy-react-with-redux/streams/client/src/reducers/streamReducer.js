import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

const streamReducer =  (state = {}, action) => {
  switch(action.type) {
    case FETCH_STREAMS:
      // mapKeys takes list of streams and creates object using method
      // Keys are the id's of individual streams themselves (it returns a big object)
      return {...state, ..._.mapKeys(action.payload, 'id')}
    case FETCH_STREAM:
      // Dynamically add new key value pair on the fly with key interpolation
      return {...state,[action.payload.id]: action.payload };
    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_STREAM:
      // Omit creates new object from properties of 'state'
      return _.omit(state, action.payload);
    default:
      return state;
  }
}

export default streamReducer;