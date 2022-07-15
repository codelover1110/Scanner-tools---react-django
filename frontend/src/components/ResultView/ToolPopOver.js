import React, { useRef } from 'react' ;

import { Link } from 'react-router-dom';

import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {
   Popover,
   List,
   ListItem,
   Divider,
   Box,
   ListItemButton
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import CSVPopOver from './CSVPopOver';
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

const ToolPopOver = (props) => {

    const classes = useStyles() ;
    const anchorRef1 = React.useRef(null);

    const [ isCsvOpenPop , setCsvOpenNewPop ] = React.useState(false) ;

    const {
        open , anchorEl , handlePopOver,
    } = props ;

    // const [openNewStockModal, setOpenNewStockModal] = React.useState(false) ;

    // const handleOpenNewStockModal = () => {
    //     setOpenNewStockModal(true) ;
    // }
    // const handleCloseNewStockModal = () => {
    //     setOpenNewStockModal(false) ;
    // }

    const handleCsvPopOver = () => {
        setCsvOpenNewPop(!isCsvOpenPop);
    }

    return (
        <>
            <Popover
                id="NewPopOver-popover"
                anchorEl={anchorEl}
                open={open}
                onClose={handlePopOver}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                classes={{
                    paper : classes.popover
                }}
            >
                <List>
                    <ListItemButton>
                        <Box>View Details</Box>
                    </ListItemButton>
                    <ListItemButton>
                        <Box>Point List</Box>
                    </ListItemButton>
                    <ListItemButton>
                        <Box
                            sx={{width : "100%", display : 'flex', justifyContent : 'space-between !important', alignItems : 'center'}}
                            ref={anchorRef1}
                            onClick={handleCsvPopOver}
                        >
                            <Box> Export list </Box>
                            <PlayArrowIcon />
                        </Box>
                    </ListItemButton>
                    <ListItemButton>
                        <Box>Importing Lists</Box>
                    </ListItemButton>
                    <ListItemButton>
                        <Box>Customize Column Layout</Box>
                    </ListItemButton>
                    <ListItemButton>
                        <Box>Select Column Layout</Box>
                    </ListItemButton>
                    <ListItemButton>
                        <Box>Append Screen Parameters</Box>
                    </ListItemButton>
                    <ListItemButton>
                        <Box>Column Width Preference</Box>
                    </ListItemButton>
                </List>
            </Popover>

            <CSVPopOver
                open={isCsvOpenPop}
                handleCsvPopOver={handleCsvPopOver}
                anchorEl={anchorRef1 ? anchorRef1.current : null}
            />
        </>
    )
}

export default ToolPopOver ;