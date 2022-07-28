import ActionTypes from "./actionTypes";
import axios from 'axios' ;
import * as config from '../../static/constants';

export const GetScreenOptionData = (screen_id) => async dispatch => {
    try {
        let res = await axios.get(`${config.PRIVATE_MARKETSMITH_API}screenoption/?screen_id=${screen_id}` , {}) ;
        console.log('there', res.data, screen_id)
        if(res.status === 200){
            await dispatch({
                type : ActionTypes.GetScreenOptionData,
                payload : res.data[0]
            }) ;
        }
        return true ;
    } catch(err){
        console.log(err) ;

        return false ;
    } 
}

export const InsertScreenOptionData = (formData) => async dispatch => {
    try {
        console.log(typeof(formData["eps_rating_min"]), formData["eps_rating_min"]);
        console.log(typeof(formData["rs_rating_min"]), formData["rs_rating_min"]);
        let res = await axios.post(`${config.PRIVATE_MARKETSMITH_API}screenoption/add/` , {formData}) ;

        await dispatch({
            type : ActionTypes.InsertScreenOptionData,
            payload : formData,
        })

        return true ;
    } catch(err){
        console.log(err) ;

        return false ;
    } 
}