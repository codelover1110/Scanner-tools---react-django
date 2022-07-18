import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    expandedItem : 1 ,
}

export default function accordions(state=INITIAL_STATE, action={}){
    switch(action.type) {
        case ActionTypes.ExpandedItem : 
            return ({
                ...state,
                expandedItem : action.payload
            }) ;
        default :
            return state ;
    }
}