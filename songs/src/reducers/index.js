import {combineReducers} from 'redux';

const songsListReducer = () => {

    return [
        {title : 'skyfall', duration : '2:30'},
        {title : 'bola tha na', duration : '4:30'},
        {title : 'back through my heart', duration : '5:00'},
        {title : 'closer', duration : '3:20'}
    ];
};

const songSelectReducer = (selectedSong = null, action) => {

    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;

};

export default combineReducers({
    songs : songsListReducer,
    selectedSong : songSelectReducer
});

