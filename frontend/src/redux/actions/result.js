import ActionTypes from "./actionTypes";

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