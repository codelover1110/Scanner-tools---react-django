import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    customizeColumnHeader : '',
    customizeColumnData : '',
}

export default (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case ActionTypes.CustomizeColumnHeader : 
            console.log(action.payload);
            return ({
                ...state,
                customizeColumnHeader : action.payload,
            }) ;
        case ActionTypes.CustomizeColumnData : 
            return ({
                ...state,
                customizeColumnData : action.payload,
            }) ;
        default :
            return state ;
    }
}