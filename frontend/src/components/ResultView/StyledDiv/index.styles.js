import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root : {
        position : 'fixed',

        zIndex : 1000,
        left : 0,
        bottom : 0,

        width : '100vw',
        height : props => props.height,
        background : 'white',

        "& .MuiSvgIcon-root" : {
            width : '20px',
            height : '20px',
        }
    },
    toolbarDiv : {
        display : 'flex', justifyContent : 'space-between', alignItems : 'center', 
        height : 37,
        color : 'white',
        background : 'linear-gradient(0deg, rgba(88,87,85,1) 0%, rgba(78,75,75,1) 52%, rgba(112,112,111,0) 100%) !important',
        paddingRight : 10,
        borderRight : '2px solid white',
    },
    labelDiv : {
        display : 'flex', alignItems : 'center',
    },
    arrowDiv : {
        paddingLeft : 30,
        display : 'flex',alignItems : 'center', gap : 10
    },
    statusDiv : {
        width : '100%',
        paddingLeft :20,
        paddingRight : 100,

        display : 'flex', justifyContent : 'space-between', alignItems : 'center', gap : 10
    },
    resultSize : {
        width : '15px',
        height : '15px',
        display : 'flex', alignItems : 'flex-end',
        background : 'white',
        padding : '1px',
        marginRight : "15px"
    },
    minimum : {
        width : '12px',
        height : '3px',
        background : 'rgba(58,55,55,1)',
    },
    normalize : {
        width : '12px',
        height : '7px',
        background : 'rgba(58,55,55,1)',
    },
    maximum : {
        width : '12px',
        height : '13px',
        background : 'rgba(58,55,55,1)',
    },
    resizeButtonCss : {
        position : 'absolute',
        left : "50%", top : -20,
        width : 200,
        height : 20,
        borderTopRightRadius : 20,
        borderTopLeftRadius : 20,

        background : 'linear-gradient(0deg, rgba(251,249,249,1) 0%, rgba(203,203,202,1) 52%, rgba(0,0,0,0) 100%)',
        borderLeft : '1px solid lightgray',
        borderTop : '1px solid lightgray',
        borderRight : '1px soild lightgray',

        cursor : 'row-resize',
        zIndex : 1000
    },
    mouseDragPanel : {
        position : 'fixed',
        left : 0,
        top : 0,
        width : '100vw', height : '100vh',

        cursor : 'row-resize',
        zIndex : 2000,
    }
}))