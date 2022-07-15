import React, { useEffect } from 'react' ;

import { connect } from 'react-redux';
import { GetTempData } from '../../redux/actions/temp';

import { CSVLink } from 'react-csv';

import {
   Popover,
   List,
   Box,
   ListItemButton
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
// import NewStockModal from './NewStockModal';

const useStyles = makeStyles((theme) => ({
    popover : {
        zIndex : "1500 !important",
        "& .MuiList-root" : {
            padding : "10px"
        },
        "& .MuiListItemButton-root" : {
            padding : 3,
            fontSize : "14px" ,
            color : 'black',

            display : 'flex', gap: 10
        },
        "& a" : {
            textDecoration : "none"
        },
        "& .MuiSvgIcon-root" : {
            width : '15px'
        }
    },
    blackRectDiv : {
        background : 'black',
        width : 10, height : 10
    },
    greenRectDiv : {
        background : 'green',
        width : 10, height : 10
    }
}))

const csvData =[
    ['firstname', 'lastname', 'email'] ,
    ['John', 'Doe' , 'john.doe@xyz.com'] ,
    ['Jane', 'Doe' , 'jane.doe@xyz.com']
];

const CSVPopOver = (props) => {

    const classes = useStyles() ;

    const {
        open , anchorEl , handleCsvPopOver, GetTempData, tempData
    } = props ;

    useEffect(() => {
        GetTempData();
    }, [])

    return (
        <>
            <Popover
                id="NewPopOver-popover"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCsvPopOver}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                classes={{
                    paper : classes.popover
                }}
            >
                <List>
                    <ListItemButton>
                        <CSVLink data={tempData}>Comma Demited(.csv)</CSVLink>
                    </ListItemButton>
                    <ListItemButton>
                        <Box>Excel 97-2003(.xls)</Box>
                    </ListItemButton>
                    <ListItemButton>
                        <Box>Excel(.xlsx)</Box>
                    </ListItemButton>
                    <ListItemButton>
                        <Box>Text(.txt)</Box>
                    </ListItemButton>
                </List>
            </Popover>

        </>
    )
}

const mapStateToProps = state => ({
    tempData : state.temp.tempData
}) ;
const mapDispatchToProps = {
    GetTempData
} ;

export default connect(mapStateToProps, mapDispatchToProps)(CSVPopOver) ;