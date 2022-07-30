import * as React from 'react' ;
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import {  GetStockCount } from '../../redux/actions/result';

import {
    Box, 
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Table
} from '@mui/material' ;

import { useStyles } from './StyledDiv/ScreenResult.styles';

const ScreenResultsList = (props) => {
    const {
        customizeColumnHeader,
        customizeColumnData,
        changeData,
        screenResultData,
        treeViewType,
        GetStockCount,
    } = props;
    const classes =  useStyles(props) ;

    const convertFieldList = {
        "rs" : 'eps_rating',
        "bband_gap" : 'rs_rating',
        "will_r" : "comp_rating",
        "er" : "erns_lst_rpt_date",
        "c" : "eps_chg_lst_rpt_q",
        "v" : "eps_chg_q_1"
    }

    const [ mockList, setMockList ] = useState([
            'Comp Rating', "EPS Rating", 'RS Rating','Ind Group RS', 'SMR Rating', 'A/D Rating', 'EPS Lst Rptd', 'EPS Chg Lst', 'EPS Chg 1Q', 'EPS Chg 2Q', 'EPS Chg 3Q'
    ])
    
    const [mockData, setMockData] = useState(null);

    const [filterList, setFilterList] = useState(null);
    const [tempData, setTempData] = useState(null);

    const filterCond = async (row) => {
        if(!changeData) return true ;
        let cond = true ;

        for(let [id, item] of Object.entries(row)) {
            let min = Number(changeData[convertFieldList[id] + "_min"]) ;
            let max = Number(changeData[convertFieldList[id] + "_max"]) ;
            let val = Number(item) ;

            if(changeData[convertFieldList[id] + "_min"] && changeData[convertFieldList[id] + "_max"]) {
                cond = ( val > min && val< max );

                if(!cond) break ;
            } else if(changeData[convertFieldList[id]+"_min"]) {

                cond =  val > min ;

                console.log(item, changeData[convertFieldList[id] + "_min"], cond) ;

                if(!cond) break ;
            } else if (changeData[convertFieldList[id]+"_max"]) {
                cond =  val < max ;

               if(!cond) break ;
            } 
        }
        return cond ;
    }

    useEffect(async () => {
        if(screenResultData){
            // if(treeViewType === "my screen"){
            //     let temp = [] ;

            //     await Promise.all(
            //         screenResultData.map(async row => {
            //             let cond = await filterCond(row) ;
            //             if(cond) {
            //                 temp.push(row) ;
            //             }
            //         })
            //     )
            //     setFilterList([...temp]) ;
            // }
        }
    }, [screenResultData , changeData])

    useEffect(() => {
        if(customizeColumnHeader) {
            setMockList(customizeColumnHeader);

        }
    }, [customizeColumnHeader])

    useEffect(() => {
        if(customizeColumnData) {
            setMockData(customizeColumnData);
        }
    }, [customizeColumnData])

    useEffect(async () => {
    }, [])
    
    useEffect(async () => {
        if(filterList){
            await GetStockCount(filterList);
        }
    }, [filterList])

    return (
        <Box className={classes.root}>
            <TableContainer >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>{"p"}</TableCell>
                            <TableCell sx={{minWidth : '30px'}}>{"#"}</TableCell>
                            {
                                screenResultData && Object.entries(screenResultData[0]).map((row,index) => {
                                    return(
                                        <TableCell key={index} sx={{minWidth : '50px'}}>{row[0]}</TableCell>
                                    )
                                })
                            }
                            {/* {
                                treeViewType !== "my screen" && tempData &&
                                Object.entries(tempData[0]).map((row,index) => {
                                    return(
                                        <TableCell key={index} sx={{minWidth : '50px'}}>{row[0]}</TableCell>
                                    )
                                })
                            } */}
                        </TableRow>
                    </TableHead>
                    <TableBody >
                            {/* {
                                
                                treeViewType === "my screen" && screenResultData &&
                                screenResultData.map((row, index) => {
                                            return <TableRow key={index}>
                                                <TableCell sx={{minWidth : '70px'}}></TableCell>
                                                <TableCell>{index}</TableCell>
                                                <TableCell>{row.ticker_symbol}</TableCell>
                                                <TableCell>{row.date_populated}</TableCell>
                                                <TableCell>{row.rs}</TableCell>
                                                <TableCell>{row.bband_gap}</TableCell>
                                                <TableCell>{row.will_r}</TableCell>
                                                <TableCell>{row.er}</TableCell>
                                                <TableCell>{row.grade}</TableCell>
                                                <TableCell>{row.events}</TableCell>
                                                <TableCell>{row.c}</TableCell>
                                                <TableCell>{row.v}</TableCell>
                                            </TableRow>
                                        }) 
                            } */}
                            {
                                screenResultData && screenResultData.map((row, index) => {
                                    return(
                                        <TableRow key={index}>
                                            <TableCell sx={{minWidth : '70px'}}></TableCell>
                                            <TableCell>{index}</TableCell>
                                            {
                                                Object.entries(row).map((element, i) => {
                                                    return(
                                                        <TableCell key={i}> {element[1]}</TableCell>
                                                    )
                                                })
                                            }
                                        </TableRow>
                                    )
                                })
                            }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

const mapStateToProps = state => ({
    customizeColumnHeader : state.column.customizeColumnHeader,
    customizeColumnData : state.column.customizeColumnData,
    changeData : state.result.changeData,
    screenResultData : state.result.screenResultData,
    treeViewType : state.screen.treeViewType
})
const mapDispatchToProps = {
    GetStockCount,
}
export default connect(mapStateToProps, mapDispatchToProps)(ScreenResultsList) ;