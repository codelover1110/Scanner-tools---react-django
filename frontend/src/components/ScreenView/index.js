import * as React from "react";

import ListView from "./ListView";
import ScreenForm from "./ScreenForm";

import { useResultViewInfo } from "../../contexts/ResultViewContext";

import {
    Box,
    Grid,
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {

    }
}))

const ScreenView = () => {

    const classes = useStyles();

    const {
        SetResultViewStatus
    } = useResultViewInfo () ;

    const [currentCategory, setCurrentCategory] = React.useState('MM-loose 50') ;
    const [ selectedScreenList, setSelectedScreenList ] = React.useState(0);
    const [ treeViewId, setTreeViewId ] = React.useState(1);

    const handleSelectCategory = (selectedCategory) => {
        setCurrentCategory(selectedCategory) ;
        SetResultViewStatus(selectedCategory) ;
    }
    
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={2.4}>
                    <ListView 
                        handleSelectCategory={handleSelectCategory}
                        selectedScreenList={selectedScreenList}
                        setSelectedScreenList={setSelectedScreenList}
                        treeViewId={treeViewId}
                        setTreeViewId={setTreeViewId}
                    />
                </Grid>
                <Grid item xs={9.6}>
                    <ScreenForm 
                        currentCategory={currentCategory}
                        selectedScreenList={selectedScreenList}
                        treeViewId={treeViewId}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default ScreenView;