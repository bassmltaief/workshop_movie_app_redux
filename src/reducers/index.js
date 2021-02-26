import movieReducer from './movieReducer';
import starReducer from './starReducer';
import {combineReducers} from 'redux';

export const rootReducers= combineReducers({
    movieReducer,
    starReducer
})
export default rootReducers;
