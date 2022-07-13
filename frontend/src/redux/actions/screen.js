import ActionTypes from "./actionTypes";

export const AddNewStock = (newStocks) => async dispatch => {
    try {
        await dispatch({
            type : ActionTypes.AddNewStock,
            payload : newStocks
        }) ;
        return true ;
    } catch(err){
        console.log(err) ;

        return false ;
    } 
}