import * as React from "react";

import {
    Box,
    Grid,
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {

    }
}))

const PowerPlay = () => {

    const classes = useStyles();
    
    return (
        <Box className={classes.root}>
        </Box>
    );
}

export default PowerPlay;