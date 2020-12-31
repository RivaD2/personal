import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0WimT32moFGqGVKDxfDO21bWIJ-QLy5X3a9pux0l5XY'
    }
})