import React from "react";

import { connect } from "react-redux";
import PropTypes from 'prop-types' ;

import { useResultViewInfo } from "../../contexts/ResultViewContext";

import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

import clsx from "clsx";

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TreeItem from '@mui/lab/TreeItem';

import { useStyles } from "./StyledDiv/MenuView.styles";
import { useTheme } from "@mui/styles";

const MenuView = (props) => {
    const classes = useStyles(props) ;
    const theme = useTheme() ;

    const {
        selectedMenuItem
    } = useResultViewInfo() ;

    return (
        <>
            <Box className={classes.root}>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ flexGrow: 1, maxWidth: 400, maxHeight : 'calc(100vh - 200px)',overflowY: 'auto' }}
                >
                    <TreeItem nodeId="1" label={<Box className={classes.alertDiv}>
                                <NotificationsIcon />
                                <Box>Smart Alerts</Box>
                            </Box>
                        }
                    />
                    <TreeItem nodeId="2" label="My Lists">
                        <List>
                        </List>
                    </TreeItem>
                    <TreeItem nodeId="3" label="Favorites">
                        <List>
                        </List>
                    </TreeItem>
                    <TreeItem nodeId="4" label="Activity Lists">
                        <List>
                        </List>
                    </TreeItem>
                    <TreeItem nodeId="5" label="Tracked">
                        <List>
                        </List>
                    </TreeItem>
                    <TreeItem nodeId="6" label="Reports">
                        <List>
                        </List>
                    </TreeItem>
                    <TreeItem nodeId="7" label={<Box className={clsx(classes.screenResultDiv, selectedMenuItem === 'screen_result' && classes.activeDiv)}>
                                <Box className={classes.blackRectDiv} />
                                <Box>Smart Alerts</Box>
                            </Box>
                        }
                    />
                </TreeView>
            </Box>
        </>
    );
}
MenuView.propTypes = {

}
const mapStateToProps = state => ({
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(MenuView) ;