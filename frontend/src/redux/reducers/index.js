import  { combineReducers } from 'redux' ;

import screenReducer from './screen';
import resultReducer from './result' ;
import tempReducer from './temp';

export default combineReducers({
    screen : screenReducer,
    result : resultReducer,
    temp : tempReducer
});