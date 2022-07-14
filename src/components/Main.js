import React, { useEffect , useRef, useState  } from 'react' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;
import { SetResultViewStatus, 
    UpdateResultViewHeight,
    BeginResultViewResize,
    FinishResultViewResize,
    StoreBeginValues,
    InitialResultViewPoint
} from '../redux/actions/result';

import { ResultViewProvider } from '../contexts/ResultViewContext';

import Routing from './Routes';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import { getCookie } from '../utils/helper';
import Header from './Layouts/Header';
import ResultView from './ResultView';


const useStyles = makeStyles((theme) => ({
    root : {
        height: '100vh',
        overflowX: 'auto', 
        overflowY: 'scroll',
    }
}))

const Main = (props) => {
    const classes = useStyles() ;

    const {
        selectedMenuItem,
        status,
        SetResultViewStatus,
        resultViewHeight,
        UpdateResultViewHeight,

        isBeginResize,
        beginStartPoint,
        beginStartHeight,

        BeginResultViewResize,
        FinishResultViewResize,
        StoreBeginValues,
        InitialResultViewPoint
    } = props ;

    const scrollTop = useRef({                
        current : {
            innerText : "efefef"
        }
    }) ;

    return (
        <Box className={classes.root} ref={scrollTop}>
            <ResultViewProvider 
                value={{
                    selectedMenuItem,
                    status,
                    SetResultViewStatus,

                    UpdateResultViewHeight,
                    resultViewHeight,

                    isBeginResize,
                    beginStartPoint,
                    beginStartHeight,

                    BeginResultViewResize,
                    FinishResultViewResize,
                    StoreBeginValues,
                    InitialResultViewPoint
                }}
            >
                <Header />
                <Routing />
                <ResultView 
                    height={resultViewHeight}
                />
            </ResultViewProvider>
        </Box>
    )
}

Main.propTypes = {
    SetResultViewStatus : PropTypes.func.isRequired,
    UpdateResultViewHeight : PropTypes.func.isRequired,

    BeginResultViewResize : PropTypes.func.isRequired,
    FinishResultViewResize : PropTypes.func.isRequired,
    StoreBeginValues : PropTypes.func.isRequired,
    InitialResultViewPoint : PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    selectedMenuItem : state.result.selectedMenuItem,
    status : state.result.status,
    resultViewHeight : state.result.resultViewHeight,

    isBeginResize : state.result.isBeginResize,
    beginStartPoint : state.result.beginStartPoint,
    beginStartHeight : state.result.beginStartHeight
}) ;
const mapDispatchToProps = {
    SetResultViewStatus,
    UpdateResultViewHeight,

    BeginResultViewResize,
    FinishResultViewResize,
    StoreBeginValues,
    InitialResultViewPoint
} ;
export default connect(mapStateToProps, mapDispatchToProps)(Main) ;