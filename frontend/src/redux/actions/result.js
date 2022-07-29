import ActionTypes from "./actionTypes";
import axios from 'axios' ;
import * as config from '../../static/constants';

export const SelectResultMenuItem = (selectedMenuItem) => async dispatch => {
    try {
        await dispatch ({
            type : ActionTypes.SelectResultMenuItem,
            payload : selectedMenuItem
        }) ;

        return true ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const SetResultViewStatus = (status) => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.SetResultViewStatus,
            payload : status
        }) ;
        return true ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const UpdateResultViewHeight = (distance) => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.UpdateResultViewHeight,
            payload : distance
        });

        return true ;
    } catch(err) {
        console.log(err);
        return false ;
    }
}

export const BeginResultViewResize = () => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.BeginResultViewResize
        }) ;
        return true ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const FinishResultViewResize = () => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.FinishResultViewResize
        }) ;
        return true ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const StoreBeginValues = (startPoint, startViewHeight) => async dispatch => {
    try {
        await dispatch({
            type :ActionTypes.StoreBeginValues,
            payload : {
                beginStartPoint : startPoint,
                beginStartHeight : startViewHeight
            }
        }) ;

        return true ;
    } catch(err) {
        console.log(err);
        return false;
    }
}

export const InitialResultViewPoint = (resultViewHeight) => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.InitialResultViewPoint,
            payload: resultViewHeight
        });

        return true ;
    } catch(err) {
        console.log(err) ;
        return false ;
    }
}

export const ChangeBeginStartHeight = (initialHeight) => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.ChangeBeginStartHeight,
            payload : initialHeight
        });
        
        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
} 


export const SetChangeDataResult = (changeData) => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.SetChangeDataResult,
            payload : changeData
        });
        
        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
} 

export const GetMyScreenData = () => async dispatch => {
    try {
        let res = await axios.get(`${config.PRIVATE_MARKETSMITH_API}screenresult/` , {}) ;

        if(res.status === 200) {
            await dispatch({
                type : ActionTypes.GetMyScreenData,
                payload : res.data
            });
        }
        
        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
} 

export const GetTrendData = () => async dispatch => {
    try {
        let res = await axios.get(`${config.PRIVATE_MARKETSMITH_API}screenresult/trend/` , {}) ;

        if(res.status === 200) {
            await dispatch({
                type : ActionTypes.GetTrendData,
                payload : res.data
            });
        }
        
        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
} 

export const GetTrendWideData = () => async dispatch => {
    try {
        let res = await axios.get(`${config.PRIVATE_MARKETSMITH_API}screenresult/trendwide/` , {}) ;

        if(res.status === 200) {
            await dispatch({
                type : ActionTypes.GetTrendWideData,
                payload : res.data
            });
        }
        
        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
} 

export const GetPowerPlayData = () => async dispatch => {
    try {
        let res = await axios.get(`${config.PRIVATE_MARKETSMITH_API}screenresult/powerplay/` , {}) ;

        if(res.status === 200) {
            await dispatch({
                type : ActionTypes.GetPowerPlayData,
                payload : res.data
            });
        }
        
        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
} 

export const GetStockCount = (data) => async dispatch => {
    try {
            console.log(data.length, "aa")
            await dispatch({
                type : ActionTypes.GetStockCount,
                payload : data.length
            });
        
        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
} 
