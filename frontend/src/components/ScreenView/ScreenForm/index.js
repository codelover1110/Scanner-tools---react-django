import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import PropTypes from 'prop-types' ;

import {
    Box,
    Grid,
    MenuItem,
    Select,
} from '@mui/material';

import ScreenOption from "./ScreenOption";

import { makeStyles } from "@mui/styles";
import TrendTemplate from "./TrendTemplate";
import TrendTemplateWide from "./TrendTemplateWide";
import PowerPlay from "./PowerPlay";

const useStyles = makeStyles((theme) => ({
    root : {
        paddingLeft : 15,
        border : '2px solid gray',
        background : 'white',

        minHeight : 'calc(100vh - 90px)',
        
        "& .MuiSelect-select" : {
            padding : 10,
        }
    }
}))

const ScreenForm = (props) => {

    const classes = useStyles();

    const {
        currentCategory,
        stockList,
        selectedScreenList,
        treeViewId,
    } = props ;

    const [screenValue, setScreenValue] = useState('MM-loose 50');

    const handleChange = (e) => {
        console.log(e.target.value);
        setScreenValue(e.target.value);
    }

    useEffect(() => {
        setScreenValue(currentCategory || 'MM-loose 50') ;
    }, [currentCategory]) ;
    
    return (
        <Box className={classes.root}>
            <Select 
                value={screenValue}
                onChange={(e) => handleChange(e)}
            >
                {
                    stockList && stockList.map((element, index) => {
                        return(
                            <MenuItem key={index} value={element.text}>
                                {element.title}
                            </MenuItem>
                        )
                    })
                }
            </Select>

            <Box sx={{borderBottom: '1px solid lightgrey', color : 'black', mt : 2, mb : 5}}>
                Screen from &nbsp;
                <Box component={"span"} sx={{color : 'rgb(76,70,195)'}}>
                    MarketSmith Database
                </Box>
                &nbsp; (7,969 stocks)
            </Box>
            {
                treeViewId === 1 &&
                <Grid container>
                    <Grid item xs={12}>
                        <ScreenOption selectedScreenList={selectedScreenList}/>
                    </Grid>
                </Grid>
            }
            {
                treeViewId === 2 &&
                <TrendTemplate />
            }
            {
                treeViewId === 3 &&
                <TrendTemplateWide />
            }
            {
                treeViewId === 4 &&
                <PowerPlay />
            }
        </Box>
    );
}

ScreenForm.propTypes = {

}
const mapStateToProps = state => ({
    stockList : state.screen.stockList
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(ScreenForm) ;