import React from 'react' ;

import { Link } from 'react-router-dom';

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

import {
   Popover,
   List,
   ListItem,
   Divider,
   Box,
   ListItemButton
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import NewStockModal from './NewStockModal';

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

const NewPopOver = (props) => {

    const classes = useStyles() ;

    const {
        open , anchorEl , handlePopOver,
        handleAddNewStock
    } = props ;

    const [openNewStockModal, setOpenNewStockModal] = React.useState(false) ;

    const handleOpenNewStockModal = () => {
        setOpenNewStockModal(true) ;
    }
    const handleCloseNewStockModal = () => {
        setOpenNewStockModal(false) ;
    }

    return (
        <>
            <Popover
                id="NewPopOver-popover"
                anchorEl={anchorEl}
                open={open}
                onClose={handlePopOver}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                classes={{
                    paper : classes.popover
                }}
            >
                <List>
                    <ListItemButton
                        onClick={() => {
                            handlePopOver() ;
                            handleOpenNewStockModal() ;
                        }}
                    >
                        <Box className={classes.blackRectDiv} /><Box>New Stock Screen</Box>
                    </ListItemButton>
                    <ListItemButton>
                        <Box className={classes.greenRectDiv}/><Box>New Fund Screen</Box>
                    </ListItemButton>
                    <ListItemButton><CreateNewFolderIcon sx={{fontSize : '15px', color : 'gray'}}/><Box>New Folder</Box></ListItemButton>
                </List>
            </Popover>

            {/* <NewStockModal /> */}
            <NewStockModal
                open={openNewStockModal}
                handleClose={handleCloseNewStockModal}
                handleAddNewStock={handleAddNewStock}
            />
        </>
    )
}

export default NewPopOver ;