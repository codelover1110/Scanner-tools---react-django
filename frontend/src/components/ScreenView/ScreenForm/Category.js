import React, { useState } from "react";

import { connect } from "react-redux";
import PropTypes from 'prop-types' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import {
    Box,
    List,
    ListItem,
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        background : '#f8fca430',
        height: '100%',

    },
    idleItemDiv : {
        display : 'flex !important', alignItems : 'center !important', justifyContent : 'space-between !important',
        background: 'linear-gradient(0deg, rgba(248,252,164,0.8239670868347339) 0%, rgba(248,249,200,0.21332282913165268) 45%, rgba(255,251,138,0.6671043417366946) 100%)',
        borderBottom : '1px solid #f6d510',

        cursor : 'pointer'
    },
    activeItemDiv : {
        display : 'flex !important', alignItems : 'center !important', justifyContent : 'space-between !important',
        borderBottom : '1px solid #f6d510',

        color : '#c77e33',

        cursor : 'pointer',
        background : 'white'
    },
    title : {
        fontSize : '13px',
        color : 'gray',
        borderRight : '1px solid #ef8f66',
        background : 'rgb(240,240,230)'
    },
    favourite : {
        display : 'flex',
        justifyContent : 'space-between',
        padding : '10px 20px'
    },
    list : {
    }
}))

const Category = (props) => {

    const classes = useStyles();

    const {
        setSelectedItem,
        selectedItem,
    } = props ;

    const itemList = [
        {
            value : 'favorite',
            text : <Box sx={{display : 'flex', alignItems : 'center', gap : '5px'}}>
                <StarBorderIcon/>
                <Box>Favorites</Box>
            </Box>,
            count : 8
        },
        {
            value : 'smart',
            text : "SmartSelect Rating",
            count : 0
        },
        {
            value : 'earning',
            text : 'Earnings',
            count : 6
        },
        {
            value : 'sales',
            text : 'Sales',
            count : 36
        },
        {
            value : 'industry',
            text : "Industry & Sector",
            count : 12
        },
        {
            value : 'sharing',
            text : "Sharing & Holdings",
            count : 3
        },
        {
            value : 'pricevolume',
            text : 'Price & Volume',
            count : 37
        },
        {
            value : 'margins',
            text : 'Margins & Ratios',
            count : 31
        },
        {
            value : 'general',
            text : 'General Stock Criteria',
            count : 12
        },
        // {
        //     value : 'idb',
        //     text : 'IBD Content',
        //     count : 4
        // }
    ]

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                CATEGORIES
            </Box>
            <Box className={classes.list}>
                <List>
                    {
                        itemList.map((item, index) => {
                            return (
                                <ListItem onClick={() => setSelectedItem(item.value)} key={index}
                                    className={item.value === selectedItem ? classes.activeItemDiv : classes.idleItemDiv}
                                >
                                    <Box sx={{fontSize : '15px', fontWeight : 'bold'}}>
                                        {item.text}
                                    </Box>
                                    <Box sx={{fontSize : '12px'}}>
                                        {0} of {item.count}
                                    </Box>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>
        </Box>
    );
}
Category.propTypes = {
    
}
const mapStateToProps = state => ({
    stockList : state.screen.stockList
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Category) ;