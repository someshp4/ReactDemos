import axios from 'axios';

//use own key
const key = "fytfuhj";

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: key

    }
});
