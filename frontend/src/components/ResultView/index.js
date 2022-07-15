import * as React from 'react' ;

import { useResultViewInfo } from '../../contexts/ResultViewContext';

import ScreenResultsList from './ScreenResultsList';
import MenuView from './MenuView';
import ToolPopOver from './ToolPopOver';

import BuildIcon from '@mui/icons-material/Build';
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
    
    const [ isOpenPop , setOpenNewPop ] = React.useState(false) ;

    const anchorRef = React.useRef(null) ;

    const handlePopOver = () => {
        setOpenNewPop(!isOpenPop) ;
    }

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

    const handleChangeResultHeight = async (value) => {
        await InitialResultViewPoint(value) ;
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
                            <Box sx={{display : 'flex', alignItems : 'center'}}>
                                { status } &nbsp;
                                <CachedIcon sx={{cursor : 'pointer', "&:hover": {color : theme.palette.brown.B100}}}/>
                                &nbsp; { status && 'Upload : Today 12 : 40 PM ET'}
                            </Box>
                            <Box sx={{display : 'flex', alignItems : 'center'}}>
                                <Box className={classes.resultSize} onClick={() => handleChangeResultHeight(30)}>
                                    <Box className={classes.minimum}></Box>
                                </Box>
                                <Box className={classes.resultSize} onClick={() => handleChangeResultHeight(250)}>
                                    <Box className={classes.normalize}></Box>
                                </Box>
                                <Box className={classes.resultSize} onClick={() => handleChangeResultHeight(window.screen.height)}>
                                    <Box className={classes.maximum}></Box>
                                </Box>
                                <BuildIcon 
                                    ref={anchorRef}
                                    onClick={handlePopOver}
                                />
                            </Box>
                        </Box>
                    </Box>
                    {
                        selectedMenuItem === 'screen_result' && <ScreenResultsList 
                            height={props.height}
                        />
                    }
                </Grid>
            </Grid>
            
            <ToolPopOver
                open={isOpenPop}
                handlePopOver={handlePopOver}
                anchorEl={anchorRef ? anchorRef.current : null}
            />
        </Box>
    )
}

export default ResultView ;