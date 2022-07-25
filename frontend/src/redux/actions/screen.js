import ActionTypes from "./actionTypes";
import axios from 'axios' ;
import * as config from '../../static/constants';

export const GetScreenListData = () => async dispatch => {
    try {
        let res = await axios.get(`${config.PRIVATE_MARKETSMITH_API}screenlist/` , {}) ;
        if(res.status === 200){
            await dispatch({
                type : ActionTypes.GetScreenListData,
                payload : res.data
            }) ;
        }
        return true ;
    } catch(err){
        console.log(err) ;

        return false ;
    } 
}

export const InsertScreenListData = (data) => async dispatch => {
    try {
        let res = await axios.post(`${config.PRIVATE_MARKETSMITH_API}screenlist/add/` , {data}) ;

        return true ;
    } catch(err){
        console.log(err) ;

        return false ;
    } 
}

export const AddNewStock = (newStocks) => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.AddNewStock,
            payload : newStocks
        }) ;
        return true ;
    } catch(err){
        console.log(err) ;

        return false ;
    } 
}