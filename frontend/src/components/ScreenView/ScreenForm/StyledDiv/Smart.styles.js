import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        "& svg" : {
            color : 'gray !important'
        },

        minHeight : 700,
        overflowY : 'auto',

        // form control background style
        "& .MuiFormControl-root" : {
            borderRadius : 5,
            "& svg" :{
                color : 'white'
            }
        },

        // when hover border color style
        '& .MuiOutlinedInput-root': {
            height : '30px !important',
            maxWidth : '60px !important',

            padding : '0px !important',
            '& fieldset': {
                border: '1px solid gray !important',
            },
            '&:hover fieldset': {
                border: '1px solid gray !important',
            },
            '&.Mui-focused fieldset': {
                border: '1px solid gray !important',
            },
        },

        // textfield color style or disabled color style
        "& .MuiInputBase-input" :{
            fontSize : 13
        },

        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
        {
            display: 'none',
        },
    },
    listItemDiv : {
        paddingTop : 10,
        paddingRight : 30,
        paddingBottom : 5,
        
        borderBottom: '1px solid gray'
    },
    liDiv : {
        display : 'flex', alignItems : 'center', gap : 10
    },
    underLineDiv : {
        borderBottom : '1px dotted gray'
    },
    rangeDiv : {
        display : 'flex', alignItems : 'center', gap : 10,
        justifyContent : 'flex-end'
    },
    checkboxDiv : {
        display : 'flex', alignItems : 'center', gap : 10,
        justifyContent : 'flex-end'
    }
}))