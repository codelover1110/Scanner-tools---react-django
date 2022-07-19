import ActionTypes from "./actionTypes";
import axios from 'axios' ;
import * as config from '../../static/constants';

export const CustomizeColumnHeader = (tempHeader) => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.CustomizeColumnHeader,
            payload : tempHeader
        }) ;

        return true ;
    } catch(err){
        console.log(err) ;

        return false ;
    } 
}
export const CustomizeColumnData = (tempData) => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.CustomizeColumnData,
            payload : tempData
        }) ;

        return true ;
    } catch(err){
        console.log(err) ;

        return false ;
    } 
}