import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    
    formData : null,
    insertFormData : null,
}

export default (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case ActionTypes.GetScreenOptionData :
            return({
                ...state,
                formData : action.payload
            })
        case ActionTypes.InsertScreenOptionData :
            return({
                ...state,
                insertFormData : action.payload
            })
        default :
            return state ;
    }
}