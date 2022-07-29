import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    stockList : [],
    treeViewType : null,
}

export default (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case ActionTypes.GetScreenListData : 
            console.log(action.payload);
            return({
                ...state,
                stockList : action.payload
            })
        case ActionTypes.SetTreeViewType : 
            console.log(action.payload);
            return({
                ...state,
                treeViewType : action.payload
            })

        default :
            return state ;
    }
}