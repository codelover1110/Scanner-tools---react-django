import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root : {
        minHeight : 'calc(100vh - 90px)',
        
        border : '1px solid grey',
        borderTopLeftRadius : '5px',
        borderBottomLeftRadius : '5px',
        background : 'white',

        "& .MuiButtonBase-root" : {
            minWidth : '20px',
            height : '20px',
            background: 'linear-gradient(0deg, rgba(232,231,228,1) 0%, rgba(255,253,249,1) 52%, rgba(255,255,253,0) 100%)',
            textTransform : 'none',
            padding : '12px',
        },

        "& .MuiListItem-root" : {
            display : 'flex',
            alignItems : 'center',
            padding : '0px 40px',
            
            "&:hover" : {
                background : '#f7b147',
                cursor : 'pointer'
            }
        },

        "& .MuiTreeItem-root" : {
            "& svg" : {
                color : '#f7b147'
            },
        },
        "& .MuiTreeItem-content" : {
            background : 'white !important'
        },
        "& .MuiCollapse-root" : {
            marginLeft : '10px'
        }
    },
    topList : {
        display : 'flex', justifyContent : 'space-between', alignItems : 'center',

        padding : '10px'
    },
    actionList : {
        display : 'flex',
        justifyContent : 'space-around',
        background : 'lightgray',
        border : '1px solid rgb(160,160,160)',
        boxShadow : 'inset',
        padding : '10px'
    },
    checkBox : {
        width : '10px',
        height : '10px',
        background : 'black',
        borderRadius : '2px',
        marginRight : '10px'
    },
    closeButtonCss : {
        padding : '5px !important',
        width : '25px !important',
        height : '20px !important',
        fontSize : '10px !important'
    },
    selectScreen : {
        background : '#f7b147'
    }
}))