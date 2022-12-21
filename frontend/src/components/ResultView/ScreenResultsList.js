import * as React from 'react' ;
import { useState, useEffect, useMemo } from 'react';

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
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { useStyles } from './StyledDiv/ScreenResult.styles';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';

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
    //{"ticker_symbol":"0P00007K7V.AU","date_populated":"2022-11-07","first":0,"second":0,"third":0,"fourth":0,"fifth":0,"sixth":0,"seventh":0,"eighth":1}

   const columns = useMemo(
    () => [
      {
        accessorKey: 'ticker_symbol', //access nested data with dot notation
        header: 'ticker_symbol',
      },
      {
        accessorKey: 'date_populated',
        header: 'date_populated',
      },
      {
        accessorKey: 'first', //normal accessorKey
        header: 'first',
        muiTableHeadCellFilterTextFieldProps: { value: 1 },
      },
      {
        accessorKey: 'second',
        header: 'second',
        muiTableHeadCellFilterTextFieldProps: { value: 1 },
      },
      {
        accessorKey: 'third',
        header: 'third',
        muiTableHeadCellFilterTextFieldProps: { value: 1 },
      },
        {
        accessorKey: 'fourth',
        header: 'fourth',
        muiTableHeadCellFilterTextFieldProps: { value: 1 },
      },
        {
        accessorKey: 'fifth',
        header: 'fifth',
        muiTableHeadCellFilterTextFieldProps: { value: 1 },
      },
        {
        accessorKey: 'sixth',
        header: 'sixth',
        muiTableHeadCellFilterTextFieldProps: { value: 1 },
      },
        {
        accessorKey: 'seventh',
        header: 'seventh',
        muiTableHeadCellFilterTextFieldProps: { value: 1 },
      },
        {
        accessorKey: 'eighth',
        header: 'eighth',
        muiTableHeadCellFilterTextFieldProps: { value: 1 },
      },
    ],
    [],
  );
    let rows = [
            //      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
            screenResultData && Object.entries(screenResultData).map((row, index) => {
                return {
                    _id: parseInt(index)+1,
                    id: parseInt(index)+1,
                    ticker_symbol: row[1]['ticker_symbol'],
                    date_populated: row[1]['date_populated'],
                    first: row[1]['first'],
                    second: row[1]['second'],
                    third: row[1]['third'],
                    fourth: row[1]['fourth'],
                    fifth: row[1]['fifth'],
                    sixth: row[1]['sixth'],
                    seventh: row[1]['seventh'],
                    eighth: row[1]['eighth']
                }
            })
        ];

        console.log(rows)

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

    if(treeViewType === "trend template" || treeViewType === "trend template wide"){
        return (
        <Box className={classes.root}>
        <MaterialReactTable
            enableColumnFilterModes
            positionPagination={"top"}
            columns={columns}
            data={rows[0]}
            initialState={{ pagination: { pageSize: 100, pageIndex: 1 }, showGlobalFilter: false, showColumnFilters: true }}
            muiTableContainerProps={{ sx: { maxHeight: '600px' } }}
        />
        </Box>)
    } else {
        return (
            <Box className={classes.root}>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>{"p"}</TableCell>
                                <TableCell sx={{minWidth: '30px'}}>{"#"}</TableCell>
                                {
                                    screenResultData && Object.entries(screenResultData[0]).map((row, index) => {
                                        return (
                                            <TableCell key={index} sx={{minWidth: '50px'}}>{row[0]}</TableCell>
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
                        <TableBody>
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
                                    return (
                                        <TableRow key={index}>
                                            <TableCell sx={{minWidth: '70px'}}></TableCell>
                                            <TableCell>{index}</TableCell>
                                            {
                                                Object.entries(row).map((element, i) => {
                                                    return (
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