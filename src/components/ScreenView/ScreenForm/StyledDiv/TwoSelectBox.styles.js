import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root : {

        display: 'flex', flexDirection : 'row', gap : 10, alignItems : 'center', justifyContent : 'flex-end',

        // form control background style
        "& .MuiFormControl-root" : {
            borderRadius : 5,
            "& svg" :{
                color : 'white'
            }
        },

        // when hover border color style
        '& .MuiOutlinedInput-root': {
            minHeight : '110px !important',
            minWidth : '200px !important',

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
            fontSize : 15
        },
    }
}))