import ActionTypes from "./actionTypes";
import axios from 'axios' ;
import * as config from '../../static/constants';

export const GetTempData = () => async dispatch => {
    try {
        // let res = await axios.get(`${config.PRIVATE_MARKETSMITH_API}screenlist` , {}) ;
        // console.log(res);

        // if(res.status === 200){
        //     await dispatch({
        //         type : ActionTypes.GetTempData,
        //         payload : res.data
        //     }) ;
        // }
        return true ;
    } catch(err){
        console.log(err) ;

        return false ;
    } 
}