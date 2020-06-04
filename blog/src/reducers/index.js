import { combineReducers } from 'redux';
import fetchPostsReducer from './fetchPostsReducer';
import userReducer from './userReducer';


export default combineReducers({ 
    posts : fetchPostsReducer,
    users : userReducer

});