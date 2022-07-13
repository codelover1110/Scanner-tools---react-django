import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    isAuthenticated : false,
    accessToken : null,
    countrySelected : null,
    error : null,
}

export default (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case ActionTypes.SignInUser :
            return ({
                ...state,
                isAuthenticated : true,
                accessToken : action.payload.accessToken,
                error : null
            })
        case ActionTypes.SignInAdmin : 
            return ({
                ...state,
                isAuthenticated : true,
                accessToken : action.payload.accessToken,
            })
        default :
            return state ;
    }
}