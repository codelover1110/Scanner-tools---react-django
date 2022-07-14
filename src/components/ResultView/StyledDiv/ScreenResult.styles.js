import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(( theme ) => ({
    root : {
        height : props => `calc(${props.height}px - 37px)`,

        "& .MuiTableContainer-root" :{
            height : props => `calc(${props.height}px - 37px)`,
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
                borderRight : '1px solid lightgray'
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
    typeDiv :{
        width : 15,
        height : 15,
        borderRadius : 5,

        display : 'flex', alignItems : 'center', justifyContent : 'center',

        fontSize : 10,
        fontWeight : 'bold',

        border : theme.palette.brown.main,
        background : '#f3d41c99',
        color : theme.palette.brown.main
    }
}))
