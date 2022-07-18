import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root : {

    },
    itemDiv : {
        minWidth : '150px !important', height : '60px !important', 
        background : 'white !important',
        color : 'black', 
        fontSize : 15,
        display : 'flex', justifyContent : 'center', alignItems : 'center', 
        textAlign : 'center', 
        border : '3px solid rgb(159, 115,66)', 
        margin : '5px', padding : '10px',

        "&:hover" : {
            background : '#fad873 !important'
        }
    }
}))