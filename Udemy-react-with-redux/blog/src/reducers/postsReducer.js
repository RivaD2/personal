export default (state = [], action) => {
    // Typically I would have more switch statements
  switch(action.type) {
    case 'FETCH_POSTS':
        return action.payload;
    default:
        return state;
  }
};