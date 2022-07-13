import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root : {
        background : 'gray', 
        padding : 3
    },
    tabsDiv : {
        display : 'flex', flexDirection : 'column', gap  : 20
    },
    tabDiv : {
        cursor : 'pointer',

        borderRadius : 10,
        
        marginRight : 15,
        marginLeft : 15,

        paddingTop : 15,
        paddingBottom  : 15,
        textAlign : 'center',

        background : 'white',
    },
    tabActiveDiv : {
        color : theme.palette.brown.main,

        cursor : 'pointer',

        borderTopLeftRadius : 10,
        borderBottomLeftRadius : 10,
        
        marginLeft : 15,

        paddingTop : 15,
        paddingBottom  : 15,
        textAlign : 'center',

        background : 'white'
    }
}))