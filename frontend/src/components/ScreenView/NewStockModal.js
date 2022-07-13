import * as React from 'react' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;
import { AddNewStock } from '../../redux/actions/screen';

import  {
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    Box,
    Button,
    TextField
} from '@mui/material' ;

import swal from 'sweetalert' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        
    },
    paper : {
        backgroundColor : 'lightgray !important',
        
        "& .MuiDialogContent-root" : {
            background : 'lightgray'
        },

        "& .MuiButtonBase-root" : {
            textTransform : 'capitalize !important',
            color : 'white',
            borderRadius : 20,
            backgroundColor : '#3772FF !important'
        },
    },
    titleDiv : {
        marginBottom : 10,
        fontSize : 20,
        fontWeight : 'bold',
        color : 'gray'
    },
    formDiv : {
        background : 'white',
        padding : 25
    },
    tipDiv : {
        fontSize : 15,
        marginTop : 40,
        fontWeight : 'bold'
    },
    buttonGroup : {
        display : 'flex', gap : 20, justifyContent : 'center',
        marginTop :20
    }
})) ;

const NewStockModal = (props) => {

    const classes = useStyles() ;

    const {
        open,
        handleClose,

        AddNewStock,
        stockList
    } = props ;

    const [newStockName, setNewStockName] = React.useState('') ;

    const handleNewStock = async () => {

        if(stockList.findIndex(stock => stock.text === newStockName) > -1) {
            return swal({
                title : 'Warning',
                text : 'Duplicate Stock Name',
                icon : 'warning',
                buttons : false,
                timer : 5000
            }) ;
        }

        let temp = [...stockList] ;

        temp = [{
            text : newStockName
        }, ...temp] ;

        await AddNewStock(temp) ;

        handleClose() ;
    }

    return (
        <Box className={classes.root}>
            <Dialog
                open={open}
                fullWidth
                classes ={{
                    paper : classes.paper
                }}
            >
                <DialogContent>
                    <Box className={classes.titleDiv}>
                        Create New Stock Screen
                    </Box>
                    <Box className={classes.formDiv}>
                        <Box sx={{mb : '5px'}}>
                            Name New Stock Screen{` (up to 50 characters)`}
                        </Box>
                        <TextField 
                            size='small'
                            placeholder='Please enter a name'
                            value={newStockName}
                            onChange={(e) => setNewStockName(e.target.value)}
                        />
                        <Box className={classes.tipDiv}>
                            Tip : You may change the name at any time.
                        </Box>
                    </Box>
                    <Box className={classes.buttonGroup}>
                        <button onClick={handleClose}>Cancel</button>
                        <button onClick={() => handleNewStock()} 
                            disabled={!newStockName}
                        >
                            Save
                        </button>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    )
}
NewStockModal.propTypes = {
    AddNewStock : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    stockList : state.screen.stockList
})
const mapDispatchToProps = {
    AddNewStock
}
export default connect(mapStateToProps, mapDispatchToProps)(NewStockModal) ;