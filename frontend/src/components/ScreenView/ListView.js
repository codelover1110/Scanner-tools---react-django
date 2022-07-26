import React from "react";

import { connect } from "react-redux";
import { GetScreenListData } from "../../redux/actions/screen";

import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import NewPopOver from "./NewPopOver";

import { useStyles } from "./StyledDiv/ListView.styles";

const ListView = (props) => {

    const classes = useStyles();

    const {
        handleSelectCategory,
        selectedScreenList,
        setSelectedScreenList,
        stockList,
        GetScreenListData,
    } = props ;
    
    const [ isOpenPop , setOpenNewPop ] = React.useState(false) ;

    const anchorRef = React.useRef(null) ;

    const handlePopOver = () => {
        setOpenNewPop(!isOpenPop) ;
    }

    const handleScreenListBrowse = async () => {
        await GetScreenListData()
    }

    const handleSelectScreenList = (stock, index) => {
        handleSelectCategory(stock.text);
        setSelectedScreenList(index + 1)
    }

    React.useEffect(async () => {
        await GetScreenListData()
    }, [])
    
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.topList}>
                    <Button variant="outlined" 
                        className={classes.closeButtonCss}
                    >
                        X
                    </Button>
                    <Button variant="outlined" >
                        Close Edit
                    </Button>
                </Box>
                <Box className={classes.actionList} >
                    <Button variant="outlined" 
                        ref={anchorRef}
                        onClick={handlePopOver}
                    >
                        New Screen
                    </Button>
                    <Button variant="outlined"
                        onClick={handleScreenListBrowse}
                    >
                        Browse Screens
                    </Button>
                </Box>
                
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ flexGrow: 1, maxWidth: 400, maxHeight : 'calc(100vh - 200px)',overflowY: 'auto' }}
                >
                    <TreeItem nodeId="1" label="My Screens">
                        <List>
                            {
                                stockList && stockList.map((stock, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            onClick={() => handleSelectScreenList(stock, index)}
                                            className={selectedScreenList === index + 1 ? classes.selectScreen : ''}
                                        >
                                            <Box className={classes.checkBox}/>
                                            <ListItemText primary={stock.title}/>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </TreeItem>
                    <TreeItem nodeId="2" label="MarketSmith Stock Screens">
                        
                    </TreeItem>
                    <TreeItem nodeId="3" label="MarketSmith Fund Screens">
                        
                    </TreeItem>
                    <TreeItem nodeId="4" label="Tracked Screens">
                        
                    </TreeItem>
                    <TreeItem nodeId="5" label="Favorite Screens">
                        
                    </TreeItem>
                    <TreeItem nodeId="6" label="Stock Guide">
                        
                    </TreeItem>
                </TreeView>
            </Box>
            <NewPopOver
                open={isOpenPop}
                handlePopOver={handlePopOver}
                anchorEl={anchorRef ? anchorRef.current : null}
            />
        </>
    );
}
ListView.propTypes = {

}
const mapStateToProps = state => ({
    stockList : state.screen.stockList
})
const mapDispatchToProps = {
    GetScreenListData
}
export default connect(mapStateToProps, mapDispatchToProps)(ListView) ;