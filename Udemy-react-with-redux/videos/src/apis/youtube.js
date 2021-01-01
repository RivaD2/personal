import axios from 'axios';
// enabled restriction on key
const KEY ='AIzaSyAqWQWEBoEIMI39zMtGTyutqYiH9icpF50';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
