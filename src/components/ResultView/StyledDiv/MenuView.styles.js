import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root : {
        height : props => `calc(${props.height}px - 37px)`,
        border : '1px solid grey',
        borderTopLeftRadius : '5px',
        borderBottomLeftRadius : '5px',
        background : 'white',
        overflowY : 'scroll',

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
    alertDiv : {
        display : 'flex', gap : 5,
        "& svg" : {
            color : theme.palette.brown.main
        }
    },
    screenResultDiv : {
        display : 'flex', gap : 5, alignItems : 'center',
        padding : 5
    },
    activeDiv : {
        background : theme.palette.brown.B100
    },
    blackRectDiv : {
        background : 'black',
        width : 10, height : 10
    }
}))