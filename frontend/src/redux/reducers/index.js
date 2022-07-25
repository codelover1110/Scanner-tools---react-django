import  { combineReducers } from 'redux' ;

import screenReducer from './screen';
import resultReducer from './result' ;
import columnReducer from './column';
import accorReducer from './accordions' ;
import tempReducer from './temp';
import screenOptionReducer from './screenOption';

export default combineReducers({
    screen : screenReducer,
    result : resultReducer,
    accordions : accorReducer,
    column : columnReducer,
    temp : tempReducer,
    screenOption : screenOptionReducer
});