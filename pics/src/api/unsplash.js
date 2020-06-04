import axios from 'axios';


//use own client ID
export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID jidhidlj;'
    }
});
