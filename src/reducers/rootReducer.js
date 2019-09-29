import fetchReducer from './fetchReducer';
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    data:fetchReducer
});

export default rootReducer;