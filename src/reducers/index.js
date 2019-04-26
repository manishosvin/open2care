// file is responsible for importing the rest of the reducers inside the reducers folder
import { combineReducers } from 'redux';
import register from './registerReducer';

const rootReducer = combineReducers({
    register
});

export default rootReducer;