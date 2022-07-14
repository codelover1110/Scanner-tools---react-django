import  { combineReducers } from 'redux' ;

import authReducer from './auth';
import screenReducer from './screen';
import resultReducer from './result' ;

export default combineReducers({
    auth : authReducer,
    screen : screenReducer,
    result : resultReducer
});