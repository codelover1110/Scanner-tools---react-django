import * as React from 'react';

import { connect } from 'react-redux';

import { OrderSell } from '../../redux/actions/order';

import {
    Box,
    Grid,
    Button,
    DialogTitle,
    Dialog,
    DialogContent,
    DialogActions
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'flex-start',
        "& img" : {
            width : '50%'
        }
    },
}));

const DetailDialog = (props) => {

    const classes = useStyles();
    const { open, onClose, item, orderTime, orderAmount, OrderSell } = props;

  
    const handleClose = async () => {
        let temp = {
            ...item,
            commission : 'cancel'
        }
        await OrderSell(temp);
        onClose('cancel');
    };

    const handleSubmit = async () => {
        let temp = {
            ...item,
            commission : 'complete'
        }
        await OrderSell(temp);
        onClose('complete');
    }

    return (
      <Dialog onClose={handleClose} open={open} fullWidth>
        <DialogTitle sx={{textAlign : 'center'}}>TaoBao</DialogTitle>
        <DialogContent className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <Box>
                        Order time : {orderTime}
                    </Box>
                    <Box>
                        Order amount : {item && item.price}
                    </Box>
                    <Box>
                        Commission : {item && item.price / 100 * 0.26}
                    </Box>
                    <Box>
                        Estimated return : {item && item.price + item.price / 100 * 0.26}
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                    <img src={item?.image} />
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button variant='contained' color='error' onClick={handleClose}>
                Cancel
            </Button>
            <Button variant='contained' onClick={handleSubmit}>
                Submit
            </Button>
        </DialogActions>
      </Dialog>
    );
}

const mapStateToProps = state => ({
}) ;

const mapDispatchToProps = {
    OrderSell
}

export default connect(mapStateToProps , mapDispatchToProps)(DetailDialog) ;