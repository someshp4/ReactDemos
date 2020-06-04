import _ from 'lodash';
import { CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAMS, FETCH_STREAM } from '../actions/types';

export default (state={}, action) =>  {
    switch(action.type) {

        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            //return _.omit(state, action.payload);
            //const {[action.payload.id]: omitted, ...rest} = state;
            //return rest;
            //return state.filter(stream => stream.id !== action.payload.id);
            const obj1 = {};
            Object.values(state).forEach(element => {
                if(action.payload != element.id) {
                    obj1[element.id] = element
                }
            });  
            return obj1;
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload };
        case FETCH_STREAMS:
            //return {...state, ..._.mapKeys(action.payload, 'id')};
            const obj = {};
            action.payload.forEach(element => obj[element.id] = element );
            return {...state, ...obj};
        default:
            return state;
    }

};