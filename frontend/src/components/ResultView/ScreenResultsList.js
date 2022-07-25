import * as React from 'react' ;
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { GetScreenResultData, GetStockCount } from '../../redux/actions/result';

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
        GetScreenResultData,
        GetStockCount
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

    // const [ mockList, setMockList ] = React.useState([
    //     {
    //         key : 'comp_rating',
    //         field : 'Comp Rating'
    //     },
    //     {
    //         key : 'eps_rating',
    //         field : "EPS Rating"
    //     },
    //     {
    //         key : 'rs_rating',
    //         field : 'RS Rating'
    //     },
    //     {
    //         key : 'ind_group_rs',
    //         field : 'Ind Group RS'
    //     },
    //     {
    //         key : 'smr_rating',
    //         field : 'SMR Rating'
    //     },
    //     {
    //         key : 'a_d_rating',
    //         field : 'A/D Rating'
    //     },
    //     {
    //         key : 'eps_lst_rptd',
    //         field : 'EPS Lst Rptd'
    //     },
    //     {
    //         key : 'eps_chg_lst',
    //         field : 'EPS Chg Lst'
    //     },
    //     {
    //         key : 'eps_chg_1q',
    //         field : 'EPS Chg 1Q'
    //     },
    //     {
    //         key : 'eps_chg_2q',
    //         field : 'EPS Chg 2Q'
    //     },
    //     {
    //         key: 'eps_chg_3q',
    //         field : 'EPS Chg 3Q'
    //     },
    // ])

    const mockTempData = [
        {
            symbol : 'ASNX',
            name : "Axonics Modulation Tech",
            comp_rating : 78,
            eps_rating : 48,
            rs_rating : 90,
            ind_group_rs : "B+",
            smr_rating : "D",
            a_d_rating :"C-",
            eps_lst_rptd  : "06-06-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'AYTU',
            name : "Aytu BioScient Inc",
            comp_rating : 72,
            eps_rating : 85,
            rs_rating : 64,
            ind_group_rs : "B+",
            smr_rating : "D",
            a_d_rating :"A-",
            eps_lst_rptd  : "06-14-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'CLSK',
            name : "CleanSpark Inc",
            comp_rating : 72,
            eps_rating : 12,
            rs_rating : 99,
            ind_group_rs : "B+",
            smr_rating : "D",
            a_d_rating :"A",
            eps_lst_rptd  : "06-04-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'FOR',
            name : "Forestar Group INC",
            comp_rating : 72,
            eps_rating : 32,
            rs_rating : 69,
            ind_group_rs : "B",
            smr_rating : "B",
            a_d_rating :"B",
            eps_lst_rptd  : "07-23-2022",
            eps_chg_last : null,
            eps_chg_q_1 : -17,
            eps_chg_q_2 : 338,
            eps_chg_q_3 : -77,
        },
        {
            symbol : 'FRG',
            name : "Franchise Group Inc",
            comp_rating : 85,
            eps_rating : 17,
            rs_rating : 57,
            ind_group_rs : "C",
            smr_rating : "C",
            a_d_rating :"B+",
            eps_lst_rptd  : "06-05-2022",
            eps_chg_last : null,
            eps_chg_q_1 : -7,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'GLG',
            name : "Td Holding INC",
            comp_rating : 80,
            eps_rating : 59,
            rs_rating : 96,
            ind_group_rs : "A-",
            smr_rating : "D",
            a_d_rating :"D+",
            eps_lst_rptd  : "06-14-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'GMAB',
            name : "Germab Ais Ads",
            comp_rating : 99,
            eps_rating : 84,
            rs_rating : 92,
            ind_group_rs : "B+",
            smr_rating : "A",
            a_d_rating :"C",
            eps_lst_rptd  : "06-12-2022",
            eps_chg_last : 3750,
            eps_chg_q_1 : 200,
            eps_chg_q_2 : 75,
            eps_chg_q_3 : 200,
        },
        {
            symbol : 'GRWG',
            name : "Grow Genragion Corp",
            comp_rating : 92,
            eps_rating : 38,
            rs_rating : 99,
            ind_group_rs : "B+",
            smr_rating : "C",
            a_d_rating :"A",
            eps_lst_rptd  : "08-13-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'GSX',
            name : "GSX Techedu Inc CIA Ads",
            comp_rating : 96,
            eps_rating : 78,
            rs_rating : 99,
            ind_group_rs : "C+",
            smr_rating : "A",
            a_d_rating :"A-",
            eps_lst_rptd  : "09-02-2022",
            eps_chg_last : 100,
            eps_chg_q_1 : 450,
            eps_chg_q_2 : 450,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'HARP',
            name : "Harpoon Therapeutics Inc",
            comp_rating : 52,
            eps_rating : 29,
            rs_rating : 60,
            ind_group_rs : "B+",
            smr_rating : "D",
            a_d_rating :"B",
            eps_lst_rptd  : "06-05-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'IIPR',
            name : "IInnovative INd Prop",
            comp_rating : 97,
            eps_rating : 79,
            rs_rating : 92,
            ind_group_rs : "D+",
            smr_rating : "A",
            a_d_rating :"B+",
            eps_lst_rptd  : "08-05-2022",
            eps_chg_last : 102,
            eps_chg_q_1 : 107,
            eps_chg_q_2 : 211,
            eps_chg_q_3 : 126,
        },
        {
            symbol : 'KIN',
            name : "Kindred Bidosiences Inc",
            comp_rating : 36,
            eps_rating : 55,
            rs_rating : 22,
            ind_group_rs : "D+",
            smr_rating : "B",
            a_d_rating :"D+",
            eps_lst_rptd  : "06-05-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'LVGO',
            name : "Livongo Health Inc",
            comp_rating : 98,
            eps_rating : 78,
            rs_rating : 99,
            ind_group_rs : "A+",
            smr_rating : "C",
            a_d_rating :"B+",
            eps_lst_rptd  : "08-05-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'MEIP',
            name : "M E I Pharama INC",
            comp_rating : 66,
            eps_rating : 20,
            rs_rating : 94,
            ind_group_rs : "B+",
            smr_rating : "D",
            a_d_rating :"B",
            eps_lst_rptd  : "09-09-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'NFE',
            name : "New Fortress Energy CIA",
            comp_rating : 67,
            eps_rating : 1,
            rs_rating : 96,
            ind_group_rs : "C",
            smr_rating : "D",
            a_d_rating :"A",
            eps_lst_rptd  : "06-03-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'NVAX',
            name : "Novatavax Inc",
            comp_rating : 80,
            eps_rating : 53,
            rs_rating : 90,
            ind_group_rs : "B+",
            smr_rating : "E",
            a_d_rating :"B+",
            eps_lst_rptd  : "06-15-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'OCUL',
            name : "Ooular Thcrapeutix Inc",
            comp_rating : 63,
            eps_rating : 25,
            rs_rating : 53,
            ind_group_rs : "B+",
            smr_rating : "D",
            a_d_rating :"D-",
            eps_lst_rptd  : "06-07-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'OTRK',
            name : "Ontrak Inc",
            comp_rating : 63,
            eps_rating : 11,
            rs_rating : 99,
            ind_group_rs : "A+",
            smr_rating : null,
            a_d_rating :"C+",
            eps_lst_rptd  : "06-05-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'PFSI',
            name : "Penymac Financal Svcs",
            comp_rating : 89,
            eps_rating : 54,
            rs_rating : 92,
            ind_group_rs : "B+",
            smr_rating : "D",
            a_d_rating :"B+",
            eps_lst_rptd  : "06-12-2022",
            eps_chg_last : 377,
            eps_chg_q_1 : 533,
            eps_chg_q_2 : 198,
            eps_chg_q_3 : 165,
        },
        {
            symbol : 'PRTK',
            name : "Paratek Pharmaceuticals",
            comp_rating : 89,
            eps_rating : 96,
            rs_rating : 96,
            ind_group_rs : "B+",
            smr_rating : "A",
            a_d_rating :"B+",
            eps_lst_rptd  : "06-10-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'PTON',
            name : "Peloton Interactive CIA",
            comp_rating : 91,
            eps_rating : 42,
            rs_rating : 96,
            ind_group_rs : "A-",
            smr_rating : "C",
            a_d_rating :"B",
            eps_lst_rptd  : "09-10-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'SE',
            name : "Sea Limited Ads CIA",
            comp_rating : 81,
            eps_rating : 22,
            rs_rating : 99,
            ind_group_rs : "A",
            smr_rating : "D",
            a_d_rating :"B-",
            eps_lst_rptd  : "08-18-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'SIGM',
            name : "Siga Technologies Inc",
            comp_rating : 75,
            eps_rating : 31,
            rs_rating : 86,
            ind_group_rs : "B+",
            smr_rating : "C",
            a_d_rating :"C+",
            eps_lst_rptd  : "08-05-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'VXRT',
            name : "Vaxart Inc",
            comp_rating : 81,
            eps_rating : 63,
            rs_rating : 99,
            ind_group_rs : "B+",
            smr_rating : "D",
            a_d_rating :"B+",
            eps_lst_rptd  : "06-06-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'XERC',
            name : "Xers Pharmaceuticals",
            comp_rating : 79,
            eps_rating : 51,
            rs_rating : 86,
            ind_group_rs : "B+",
            smr_rating : "D",
            a_d_rating :"A-",
            eps_lst_rptd  : "06-12-2022",
            eps_chg_last : null,
            eps_chg_q_1 : null,
            eps_chg_q_2 : null,
            eps_chg_q_3 : null,
        },
        {
            symbol : 'ZN',
            name : "Zoom Video Comm CIA",
            comp_rating : 99,
            eps_rating : 76,
            rs_rating : 99,
            ind_group_rs : "A",
            smr_rating : "A",
            a_d_rating :"B+",
            eps_lst_rptd  : "06-30-2022",
            eps_chg_last : 1050,
            eps_chg_q_1 : 561,
            eps_chg_q_2 : 275,
            eps_chg_q_3 : 800,
        },
    ]


    const [ mockList, setMockList ] = useState([
            'Comp Rating', "EPS Rating", 'RS Rating','Ind Group RS', 'SMR Rating', 'A/D Rating', 'EPS Lst Rptd', 'EPS Chg Lst', 'EPS Chg 1Q', 'EPS Chg 2Q', 'EPS Chg 3Q'
    ])
    
    const [mockData, setMockData] = useState(null);

    const [filterList, setFilterList] = useState(null);

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
            let temp = [] ;

            await Promise.all(
                screenResultData.map(async row => {
                    let cond = await filterCond(row) ;
                    if(cond) {
                        temp.push(row) ;
                    }
                })
            )
            setFilterList([...temp]) ;
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
        await GetScreenResultData();
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
                            <TableCell >{"ticker_symbol"}</TableCell>
                            <TableCell sx={{minWidth : '150px'}}>{"date_populated"}</TableCell>
                            {/* {
                                !changeData ?
                                mockList.map((field, index) => {
                                    return (
                                        <TableCell key={index} sx={{minWidth : '100px'}}>{field}</TableCell>
                                    )
                                }) :
                                changeData && Object.entries(changeData).map((element, index) => {
                                    return (
                                        <TableCell key={index}> {element[0]} </TableCell>
                                    )
                                })
                            } */}
                            <TableCell sx={{minWidth : '50px'}}>{"eps_rating"}</TableCell>
                            <TableCell sx={{minWidth : '50px'}}>{"rs_rating"}</TableCell>
                            <TableCell sx={{minWidth : '50px'}}>{"comp_rating"}</TableCell>
                            <TableCell sx={{minWidth : '50px'}}>{"erns_lst_rpt_date"}</TableCell>
                            <TableCell sx={{minWidth : '50px'}}>{"erns_dued"}</TableCell>
                            <TableCell sx={{minWidth : '50px'}}>{"eps_chg_lst_rpt_q"}</TableCell>
                            <TableCell sx={{minWidth : '50px'}}>{"eps_chg_q_1"}</TableCell>
                            <TableCell sx={{minWidth : '50px'}}>{"erns_stability"}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                            {
                                
                            filterList &&
                                filterList.map((row, index) => {
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
    screenResultData : state.result.screenResultData
})
const mapDispatchToProps = {
    GetScreenResultData,
    GetStockCount,
}
export default connect(mapStateToProps, mapDispatchToProps)(ScreenResultsList) ;