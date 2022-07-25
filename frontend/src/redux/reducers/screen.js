import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    stockList : [],
}

export default (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case ActionTypes.GetScreenListData : 
            console.log(action.payload);
            return({
                ...state,
                stockList : action.payload
            })
        case ActionTypes.AddNewStock : 
            return ({
                ...state,
                stockList : action.payload
            })

        default :
            return state ;
    }
}