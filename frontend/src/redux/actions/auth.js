import ActionTypes from './actionTypes' ;
import * as config from '../../static/constants';

import axios from 'axios' ;
import { authorization, setCookie } from '../../utils/helper';

export const SignInUser = (data, navigate) => async dispatch => {
    try {
        console.log(data);
        let res = await axios.post(`${config.PRIVATE_REMITFIX_API}auth/signin` , {
            email : data,
        }) ;
        if(res.status === 200) {
            console.log(res.data);
            setCookie("access_token", res.data.access_token);

            dispatch({
                type : ActionTypes.SignInUser,
                payload : res.data
            })
            return navigate('/landing') ;
        }

    } catch(err) {
        console.log(err);
    }
}

export const SignInAdmin = (data, navigate) => async dispatch => {
    try {
        console.log(data);
        let res = await axios.post(`${config.PRIVATE_REMITFIX_API}auth/signin` , {
            email : data,
        }) ;
        if(res.status === 200) {
            console.log(res.data);
            setCookie("access_token", res.data.access_token);

            dispatch({
                type : ActionTypes.SignInAdmin,
                payload : res.data
            })
            return navigate('/admin/dashboard') ;
        }

    } catch(err) {
        console.log(err);
    }
}