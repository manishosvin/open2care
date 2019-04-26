// file is responsible for importing the rest of the reducers inside the reducers folder
import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';

const rootReducer = combineReducers({
    register , login
});

export default rootReducer;