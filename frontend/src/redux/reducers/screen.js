import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    stockList : [
        {
            text : "MM-loose 50",
        },
        {
            text : "3-C",
        },
        {
            text : "Tight Pivot",
        },
        {
            text : "9997",
        },
        {
            text : "IPO raw",
        },
        {
            text : "Timeliness Screen",
        },
        {
            text : "MMTF",
        },
        {
            text : "new high",
        },
        {
            text : "code 33",
        },
        {
            text : "9799 LOW PRICE",
        },
        {
            text : '"C" Rated (unexplaine)',
        },
        {
            text : "RS 25mil",
        },
        {
            text : "RS 50MIL",
        },
        {
            text : "RS 100mil",
        },
        {
            text : "RS *100mil",
        },
        {
            text : "trend template",
        },
        {
            text : "MM1-early turn",
        },
        {
            text : "poles",
        },
        {
            text : "MM-looser 50",
        },
        {
            text : "IPO RS",
        }
    ]
}

export default (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case ActionTypes.AddNewStock : 
            return ({
                ...state,
                stockList : action.payload
            })

        default :
            return state ;
    }
}