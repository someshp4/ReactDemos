import jsonPlaceHolderAPI from '../apis/jsonPlaceHolderAPI';
//import _ from 'lodash';

// other way to prevent duplicate calls to fetchUser
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    
   //const userIds =  _.uniq(_.map(getState().posts, 'userId'));
   const userIds = [...new Set(getState().posts.map(post => post.userId))];

   userIds.forEach(id => dispatch(fetchUser(id)));

};

export const fetchPosts = () => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceHolderAPI.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });

    };

};


export const fetchUser = (id) => async dispatch => {

        const response = await jsonPlaceHolderAPI.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data });
};

//one way to prevent duplicate fetchUser calls to API is memoization as below

/*export const fetchUser = (id) => async dispatch => {

    _fetchUser(id, dispatch);
    
};

const _fetchUser =  _.memoize( async (id, dispatch) => {
    const response = await jsonPlaceHolderAPI.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
});*/