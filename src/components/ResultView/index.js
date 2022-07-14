import * as React from 'react' ;

import { useResultViewInfo } from '../../contexts/ResultViewContext';

import ScreenResultsList from './ScreenResultsList';
import MenuView from './MenuView';

import {
    Box,
    Grid
} from '@mui/material' ;

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CachedIcon from '@mui/icons-material/Cached';

import { useStyles } from './StyledDiv/index.styles';
import { useTheme } from '@mui/styles';

const ResultView = (props) => {
    const classes = useStyles(props) ;
    const theme = useTheme() ;

    const [startY, setStartY] = React.useState(0) ;

    const {
        selectedMenuItem,
        status,
        UpdateResultViewHeight,

        isBeginResize,
        beginStartPoint,
        beginStartHeight,

        BeginResultViewResize,
        FinishResultViewResize,
        StoreBeginValues,
        InitialResultViewPoint
    } = useResultViewInfo() ;

    const handleMouseDown = async (e) => {
        await BeginResultViewResize() ;
        await StoreBeginValues(e.clientY, beginStartHeight) ;
    }

    const handleMouseMove = async (e) => {
        if(isBeginResize) await UpdateResultViewHeight(beginStartPoint - e.clientY) ;
    }

    const handleMouseUp = async () => {
        await FinishResultViewResize(false) ;
    }

    const handleMouseOut = async () => {
        await FinishResultViewResize(false) ;
    }

    return (
        <Box className={classes.root}
        >
            <Box className={classes.mouseDragPanel} sx={{display : isBeginResize ? 'block' : 'none'}} 
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseOut}
            />

            <Box sx={{position : 'relative'}}>
                <Box className={classes.resizeButtonCss}
                    onMouseDown={handleMouseDown}
                />
            </Box>
            <Grid container sx={{height : '100%'}}>
                <Grid item xs={3} >
                    <Box className={classes.toolbarDiv}>
                        <Box className={classes.arrowDiv}>
                            <KeyboardDoubleArrowLeftIcon />
                            <KeyboardDoubleArrowRightIcon />
                        </Box>
                        <Box className={classes.labelDiv}>
                            Screen Results
                        </Box>
                    </Box>
                    <MenuView 
                        height={props.height}
                    />
                </Grid>
                <Grid item xs={9}>
                    <Box className={classes.toolbarDiv}>
                        <Box className={classes.statusDiv}>
                            { status } 
                            <CachedIcon sx={{cursor : 'pointer', "&:hover": {color : theme.palette.brown.B100}}}/>
                            { status && 'Upload : Today 12 : 40 PM ET'}
                        </Box>
                    </Box>
                    {
                        selectedMenuItem === 'screen_result' && <ScreenResultsList 
                            height={props.height}
                        />
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default ResultView ;