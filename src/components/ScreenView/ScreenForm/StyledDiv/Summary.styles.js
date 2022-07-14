import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root : {
        border : '2px solid black',
        height : '100%',
        marginLeft : 10,
        marginRight  : 10,

        "& .MuiTableContainer-root" :{
            height : 'calc(100% - 90px)',
            borderBottom : '1px solid lightgray'
        },
        "& .MuiTableHead-root" : {
            background : 'rgb(240,240,230)',
            borderTop : '1px solid white',

            "& .MuiTableRow-root" : {
                position : "relative" ,
                cursor : 'pointer',
            },
            "& .MuiTableCell-root" : {
                padding : "0px" ,
                paddingTop : 3,
                paddingBottom : 3,
                textAlign : 'center',
                fontSize : "12px",
                color : 'black',
            }
        },
        "& .MuiTableBody-root" : {
            borderTop : '1px solid black',

            "& .MuiTableRow-root" : {
                position : "relative" ,
                cursor : 'pointer',
            },
            "& .MuiTableCell-root" : {
                padding : "0px" ,
                paddingTop : 3,
                paddingBottom : 3,
                textAlign : 'center',
                fontSize : "12px",
                color : 'black',
            }
        },
    },
    titleDiv : {
        background : 'rgb(240,240,230)',
        fontWeight : 'bold',
        paddingLeft : 10,
        fontSize : 12,
        height : 20,

        textTransform : 'uppercase'
    },
    buttonDiv : {
        height : 70,
        display : 'flex', alignItems : 'center', justifyContent : 'center'
    },
    buttonCss : {
        textTransform : 'capitalize !important',
        background: 'linear-gradient(0deg, rgba(88,87,85,1) 0%, rgba(78,75,75,1) 52%, rgba(112,112,111,0) 100%) !important',
        border : '1px solid black !important',

        "&:hover" : {
            background : 'linear-gradient(0deg, rgba(249,166,0,1) 0%, rgba(238,197,28,1) 52%, rgba(237,142,16,0) 100%) !important'
        }
    }
}))