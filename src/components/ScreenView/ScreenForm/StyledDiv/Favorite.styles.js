import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        "& svg" : {
            color : 'gray !important'
        },

        height : 700,
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
            maxWidth : '160px !important',

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
        cursor : 'pointer',
        borderBottom : '1px dotted gray',
        "&:hover" : {
            color : '#c77e33'
        }
    },
    rangeDiv : {
        paddingTop : 10,
        display : 'flex', alignItems : 'center', gap : 10,
        justifyContent : 'flex-end'
    },
    checkboxDiv : {
        display : 'flex', alignItems : 'center', gap : 10,
        justifyContent : 'flex-end'
    },
    selectDateDiv : {
        paddingTop : 10,
        paddingLeft : 20,
        display : 'flex', gap : 10,
        fontSize: 15
    },
    selectDiv : {
        cursor : 'pointer',
        "&:hover" : {
            color : 'blue'
        }
    },
    multiLetterDiv : {
        paddingLeft : 20
    },
    bannderDiv : {
        background: 'linear-gradient(90deg, rgba(200,199,195,1) 0%, rgba(255,255,255,1) 100%)',
        fontWeight :'bold'
    },
    sectionDiv: {
        padding : 20,
        fontSize : 20,
        fontWeight : 'bold'
    }
}))