import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    selectedMenuItem : 'screen_result',
    status  : null,
    resultViewHeight : 37,

    isBeginResize : false,
    beginStartPoint : 0,
    beginStartHeight : 37,

    changeData : null,
    screenResultData : null,
}

export default (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case ActionTypes.SelectResultMenuItem : 
            return ({
                ...state,
                selectedMenuItem : action.payload
            }) ;
        case ActionTypes.SetResultViewStatus :
            return ({
                ...state,
                status : action.payload
            }) ;
        case ActionTypes.UpdateResultViewHeight : 
            return ({
                ...state,
                resultViewHeight : state.beginStartHeight + action.payload
            }) ;
        case ActionTypes.BeginResultViewResize :
            return({
                ...state,
                isBeginResize : true
            })
        case ActionTypes.FinishResultViewResize:
            return ({
                ...state,
                isBeginResize : false,
                beginStartHeight : state.resultViewHeight
            });
        case ActionTypes.StoreBeginValues :
            console.log(action.payload.beginStartHeight, action.payload.beginStartPoint);
            return ({
                ...state,
                beginStartHeight : action.payload.beginStartHeight,
                beginStartPoint : action.payload.beginStartPoint
            });
        case ActionTypes.InitialResultViewPoint :
            return ({
                ...state,
                beginStartHeight : action.payload,
                resultViewHeight : action.payload
            });
        case ActionTypes.SetChangeDataResult :
            return ({
                ...state,
                changeData : action.payload
            });
        case ActionTypes.GetScreenResultData :
            return ({
                ...state,
                screenResultData : action.payload
            });
        default :
            return state ;
    }
}