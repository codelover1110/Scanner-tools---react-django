
import React from 'react';
import { useState } from 'react';

import { connect } from 'react-redux' ;

import LOGO_IMAGE from '../../../assets/Layout/logo.png';
import UTC_IMAGE from '../../../assets/Layout/utc.png';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import { makeStyles } from '@mui/styles';

import {
    Box, Button ,
} from '@mui/material' ;
  

const useStyles = makeStyles((theme) => ({
    root : {
        height : '50px',
        display : 'flex',
        alignItems : 'center',
        padding : '0px 20px',

        "& select" : {
            width : '100px',
            height : '25px',
            marginRight : '30px',
            "&:hover" : {
                cursor : 'pointer'
            }
        },
        "& .MuiButtonBase-root" : {
            minWidth : '20px',
            height : '20px',
            background : 'white',
            textTransform : 'none',
            padding : '12px',
            marginRight : '10px'
        },
    } ,
})) ;

const Header = (props) => {

    const classes = useStyles();
    
    return (
        // <Box className={classes.root}>
        //     <select>
        //         <option value="lvgo"> LVGO </option>
        //     </select>
        //     <Button variant='outlined'>
        //         Daily
        //     </Button>
        //     <Button variant='outlined'>
        //         Weekly
        //     </Button>
        //     <Button variant='outlined'>
        //         Monthly
        //     </Button>
        //     <select>
        //         <option value="5"> 5 Min </option>
        //     </select>
        // </Box>
        <></>
    );
}

Header.propTypes = {
}
const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) ;