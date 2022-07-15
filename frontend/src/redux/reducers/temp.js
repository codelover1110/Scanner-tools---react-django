import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    tempData : ''
}

export default (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case ActionTypes.GetTempData : 
            return ({
                ...state,
                tempData : action.payload,
            }) ;
        default :
            return state ;
    }
}