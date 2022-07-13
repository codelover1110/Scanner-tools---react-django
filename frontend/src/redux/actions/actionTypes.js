

const ActionTypes = {
   
    // auth action types
    SignInAdmin : "SignInAdmin",
    SignInUser : "SignInUser" ,
    
    AddNewStock : "AddNewStock",

    // Result View
    SelectResultMenuItem : "SelectResultMenuItem",
    SetResultViewStatus : "SetResultViewStatus",

    // Draw actions
    InitialResultViewPoint : "InitialResultViewPoint",
    UpdateResultViewHeight : "UpdateResultViewHeight",
    BeginResultViewResize : "BeginResultViewResize",
    FinishResultViewResize : "FinishResultViewResize",
    StoreBeginValues : "StoreBeginValues"
}

export default ActionTypes ;