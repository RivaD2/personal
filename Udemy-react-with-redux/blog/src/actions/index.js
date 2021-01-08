import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // Calling action creator inside action creator
    await dispatch(fetchPosts());
    _.chain(getState().posts)
      .map('userId')
       .uniq()
        .forEach(id => dispatch(fetchUser(id)))
       // Tell lodash to execute all the steps using .value
        .value()
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload:response.data
    });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
} ;
