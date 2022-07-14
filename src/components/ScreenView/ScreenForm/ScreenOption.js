import React, { useState } from "react";

import {
    Box,
    Grid,
} from '@mui/material';

import Category from "./Category";
import Criteria from "./Criteria";
import Summary from "./Summary";

import { makeStyles, useTheme } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        
    }
}))

const ScreenOption = () => {
    const classes = useStyles();
    const theme = useTheme() ;

    const [ selectedItem, setSelectedItem ] = useState('smart') ;
    
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={8}>
                    <Grid container sx={{border : '2px solid #f7810b'}}>
                        <Grid item xs={4}>
                            <Category 
                                setSelectedItem={setSelectedItem}
                                selectedItem={selectedItem}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Criteria 
                                selectedItem={selectedItem}
                            />
                        </Grid>
                    </Grid>                    
                </Grid>
                <Grid item xs={4}>
                    <Summary 
                        selectedItem={selectedItem}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default ScreenOption;