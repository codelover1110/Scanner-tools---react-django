import * as React from 'react' ;

import { useMeasure } from 'react-use';
import { useResultViewInfo } from '../../contexts/ResultViewContext' ;

import { connect } from 'react-redux';
import { CustomizeColumnHeader, CustomizeColumnData } from '../../redux/actions/column';

import { accordionContent } from '../Common/StaticData';
import AccordionPanel from '../Common/AccordionPanel';
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import DragListItem from './DragListItem';

import  {
    Grid,
    Dialog,
    DialogContent,
    Box,
    DialogTitle,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Button,
    TableHead,
    DialogActions
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        
    },
    paper : {
        maxWidth : '1000px !important',
        "& .MuiDialogContent-root" : {
            padding : '20px ',
        },

        "& .MuiDialogTitle-root" : {
            textAlign : 'center',
            borderBottom : '1px solid grey'
        },
        "& .MuiDialogActions-root" : {
            justifyContent : 'center'
        }
    },
    accordionDiv : {
        height : '300px',
        overflowY : 'scroll',
        border : '3px solid lightgrey',
        borderTop : '3px solid #fd7b10',
        padding : '10px'
    },
    preview : {
        border : '3px solid #fd7b10',
        borderRadius : '4px',
        marginTop : '30px',
    },
    previewTitle : {
        display : 'flex',
        justifyContent : 'space-between',
        background : '#fd7b10',
        padding : '0px 10px'
    },
    previewContent : {
        background : '#ffc873',
        position : 'relative',
        overflowX : 'scroll',
        zIndex : 500,
    },
    scrollDiv : {
        minWidth : '100%',
        position : 'absolute',
        left : 0,
    },
    previewColumn : {
        background : '#ffc873',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',

        minHeight : 80,

        "& div" : {
            height : 70,
            display : 'flex',
            alignItems : 'center', 
            gap : 10,
            background : '#ffc873',
        }
    },
    previewTable : {
        background : '#ffefd7 !important',
        padding : '10px',
        width : '100%',
        
        "& .MuiTableContainer-root" : {
        },
        "& .MuiTable-root" : {
            borderCollapse: 'separate !important',
            borderSpacing: '0 5px',
            "& .MuiTableCell-root" : {
                padding : 0,
                textAlign : 'center !important'
            }
        },
        "& .MuiTableHead-root" : {
            
        },
        "& .MuiTableBody-root" : {
            "& .MuiTableRow-root" : {
                cursor : 'pointer',
                transition : '0.2s',
                "&:hover" : {
                },
            },
            "& .MuiTableCell-root" : {
                border : 'none !important',
                fontSize : '13px',
            }
        },

        "& .MuiButtonBase-root" : {
            minWidth : '20px',
            height : '20px',
            background: 'linear-gradient(0deg, rgba(232,231,228,1) 0%, rgba(255,253,249,1) 52%, rgba(255,255,253,0) 100%)',
            textTransform : 'none',
            padding : '12px',
        },
    },
    previewFooter : {
        padding : '10px',
    }
})) ;

const CustomizeColumnModal = (props) => {

    const classes = useStyles() ;
    
    const mockDataSmartSelect = [
        {
            id : 'comp_rating',
            content : 'Comp Rating',
            field : 'Comp Rating',
            prefix : 'smartSelect',
            value : 78
        },
        {
            id : 'eps_rating',
            content : 'Sales % ChgLst Qtr 2',
            field : 'EPS Rating',
            prefix : 'smartSelect',
            value : 48
        },
        {
            id : 'rs_rating',
            field : 'RS Rating',
            content : 'RS Rating',
            prefix : 'smartSelect',
            value : 90
        },
        {
            content : 'Ind Group Rs Rating',
            id : 'ind_group',
            field : 'Ind Group RS',
            prefix : 'smartSelect',
            value : 'B+'
        },
        {
            field : 'SMR Rating',
            content : 'SMR Rating',
            id : 'smr_rating',
            prefix : 'smartSelect',
            value : 'A+'
        },
        {
            field : 'A/D Rating',
            content : 'A/D Rating',
            id : 'a_d_rating',
            prefix : 'smartSelect',
            value : 'C-'
        },
    ] ;

    const mockDataEarnings = [
        {
            id : 'erns_lst_rpt_date',
            content : 'Earnings Last Reported Date',
            field : 'Earnings Lst Rptd',
            prefix : 'earnings',
            value : '2022-08-17'
        },
        {
            id : 'erns_dued',
            content : 'Earnings Due Date',
            field : 'Earnings Due Date',
            prefix : 'earnings',
            value : '2022-07-01'
        },
        {
            id : 'eps_chg_lst_rpt_q',
            content : 'EPS % Change - Last Reported Quarter',
            field : 'EPS % Chg Lst Q',
            prefix : 'earnings',
            value : 13
        },
        {
            id : 'eps_chg_q_1',
            content : 'EPS % Change - 1 Quarter Ago',
            field : 'EPS % Chg 1Q',
            prefix : 'earnings',
            value : 23
        },
        {
            id : 'erns_acce_lst_q_3',
            content : 'Earnings Acceleration - Last 3 Qtrs',
            field : 'Earnings Acce Lst 3Q',
            prefix : 'earnings',
            value : 'NO'
        },
        {
            id : 'erns_stability',
            content : 'Earnings Stability',
            field : 'Earnings Stability',
            prefix : 'earnings',
            value : 23
        },
        {
            id : 'eps_chg_q_2',
            content : 'EPS % Change - 2 Quarter Ago',
            field : 'EPS % Chg 2Q',
            prefix : 'earnings',
            value : 169
        },
        {
            id : 'eps_chg_q_3',
            content : 'EPS % Change - 3 Quarter Ago',
            field : 'EPS % Chg 3Q',
            prefix : 'earnings',
            value : 56
        },
        {
            id : 'eps_chg_lst_rpt_q_eps_chg_lst_q_3_is_bigger',
            content : 'EPS % Change - Last Reported Quarter > Last 3 Quarters',
            field : 'EPS % Chg Lst Rptd > Lst 3Q',
            prefix : 'earnings',
            value : 'YES'
        },
        {
            id : 'avg_eps_chg_lst_q_2',
            content : 'Average EPS % Change - Last 2 Qtrs',
            field : 'Avg EPS % Chg Lst 2Q',
            prefix : 'earnings',
            value : 89
        },
        {
            id : 'avg_eps_chg_lst_q_3',
            content : 'Average EPS % Change - Last 3 Qtrs',
            field : 'Avg EPS % Chg Lst 3Q',
            prefix : 'earnings',
            value : 74
        },
        {
            id : 'avg_eps_chg_lst_q_4',
            content : 'Average EPS % Change - Last 4 Qtrs',
            field : 'Avg EPS % Chg Lst 4Q',
            prefix : 'earnings',
            value : 24
        },
        {
            id : 'avg_eps_chg_lst_q_5',
            content : 'Average EPS % Change - Last 5 Qtrs',
            field : 'Avg EPS % Chg Lst 5Q',
            prefix : 'earnings',
            value : 652
        },
        {
            id : 'avg_eps_chg_lst_q_6',
            content : 'Average EPS % Change - Last 6 Qtrs',
            field : 'Avg EPS % Chg Lst 6Q',
            prefix : 'earnings',
            value : 35
        },
        {
            id : 'eps_trailing_q_4',
            content : 'EPS - Trailing 4 Qtrs',
            field : 'EPS Trailing 4Q',
            prefix : 'earnings',
            value : 112
        },
        {
            id : 'eps_trailing_q_4_is_bigger',
            content : 'EPS - Trailing 4 Qtrs > EPS, 4Years Ago',
            field : 'EPS Trailing 4Q > EPS Lst 4Y Ago',
            prefix : 'earnings',
            value : 'YES'
        },
        {
            id : 'eps_trailing_q_4_lst_y_is_bigger',
            content : 'EPS Trailing >= Last Year',
            field : 'EPS Trailing 4Q >= Last Y',
            prefix : 'earnings',
            value : 'NO'
        },
        {
            id : 'eps_chg_lst_rpty_vs_1y_ago',
            content : 'EPS % Change - Last Reported Year vs. 1 Years Ago',
            field : 'EPS % Chg Lst RptY vs 1Y Ago',
            prefix : 'earnings',
            value : 123
        },
        {
            id : 'eps_chg_lst_rpty_vs_2y_ago',
            content : 'EPS % Change - Last Reported Year vs. 2 Years Ago',
            field : 'EPS % Chg Lst RptY vs 2Y Ago',
            prefix : 'earnings',
            value : 617
        },
        {
            id : 'eps_chg_lst_y',
            content : 'EPS % Change Last Year',
            field : 'EPS % Chg Lst Y',
            prefix : 'earnings',
            value : 367
        },
        {
            id : 'eps_grow_rate_lst_3y',
            content : 'EPS % Growth Rate - Last 3 Years',
            field : 'EPS % Growth Rate - Lst 3Y',
            prefix : 'earnings',
            value : 25
        },
        {
            id : 'eps_grow_rate_lst_5y',
            content : 'EPS % Growth Rate - Last 5 Years',
            field : 'EPS % Growth Rate - Lst 5Y',
            prefix : 'earnings',
            value : 58
        },
        {
            id : 'eps_grow_rate_lst_3y_5y_is_bigger',
            content : 'EPS % Growth Rate - Last 3 Years >= 5 Years',
            field : 'EPS % Growth Rate - Lst 3Y >= 5Y',
            prefix : 'earnings',
            value : 'YES'
        },
        {
            id : 'eps_grow_rate_lst_5y_percent_rnk',
            content : 'EPS % Growth Rate- Last 5 Years Percentile Rank',
            field : 'EPS % Growth Rate - Lst 5Y Percentile Rnk',
            prefix : 'earnings',
            value : 281
        },
        {
            id : 'eps_grow_rate_projected_sus_growth',
            content : 'EPS % Growth Rate - Projected Sustainable Growth',
            field : 'EPS % Growth Rate - Projected Sus Growth',
            prefix : 'earnings',
            value : 145
        },
        {
            id : 'eps_lst_rpty',
            content : 'EPS - Last reported Year',
            field : 'EPS - Lst Rpty',
            prefix : 'earnings',
            value : 719
        },
        {
            id : 'eps_1y_ago',
            content : 'EPS - 1 Years Ago',
            field : 'EPS 1Y',
            prefix : 'earnings',
            value : 54
        },
        {
            id : 'eps_2y_ago',
            content : 'EPS - 2 Years Ago',
            field : 'EPS 2Y',
            prefix : 'earnings',
            value : 15
        },
        {
            id : 'eps_3y_ago',
            content : 'EPS - 3 Years Ago',
            field : 'EPS 3Y',
            prefix : 'earnings',
            value : 48
        },
        {
            id : 'eps_4y_ago',
            content : 'EPS - 4 Years Ago',
            field : 'EPS 4Y',
            prefix : 'earnings',
            value : 87
        },
        {
            id : 'eps_5y_ago',
            content : 'EPS - 5 Years Ago',
            field : 'EPS 5Y',
            prefix : 'earnings',
            value : 27
        },
        {
            id : 'eps_6y_ago',
            content : 'EPS - 6 Years Ago',
            field : 'EPS 6Y',
            prefix : 'earnings',
            value : 78
        },
        {
            id : 'eps_lst_rpty_4y_is_bigger',
            content : 'EPS - Last Reported Year > 4 Years Ago',
            field : 'EPS Lst Rpty >= 4Y',
            prefix : 'earnings',
            value : 'YES'
        },
        {
            id : 'eps_est_erns_surp',
            content : 'EPS - Estimate - Earnings Surprise',
            field : 'EPS Est Erns Surp',
            prefix : 'earnings',
            value : 132
        },
        {
            id : 'eps_est_chg_next_q',
            content : 'EPS - Estimate % Change - Next Quarter',
            field : 'EPS Est % Chg Next Q',
            prefix : 'earnings',
            value : 62
        },
        {
            id : 'eps_est_chg_cur_y',
            content : 'EPS - Estimate % Change - Current Year',
            field : 'EPS Est Chg Cur Y',
            prefix : 'earnings',
            value : 259
        },
        {
            id : 'eps_est_chg_1y_forward_vs',
            content : 'EPS - Estimate % Change - 1 Year Forward vs. C...',
            field : 'EPS Est Chg 1Y Forward Vs C...',
            prefix : 'earnings',
            value : 64
        },
    ] ;

    const mockDataSales = [
        {
            id : 'sales_chg_lst_rpt_q',
            content : 'Sales % Change - Last Reported Quarter',
            field : 'Sales Chg Lst Rpt Q',
            prefix : 'sales',
            value : 28
        },
        {
            id : 'avg_sales_chg_lst_2_q',
            content : 'Average Sales % Change - Last 2 Qtrs',
            field : 'Avg Sales Chg Lst 2Q',
            prefix : 'sales',
            value : 168
        },
        {
            id : 'avg_sales_chg_lst_3_q',
            content : 'Average Sales % Change - Last 3 Qtrs',
            field : 'Avg Sales Chg Lst 3Q',
            prefix : 'sales',
            value : 51
        },
        {
            id : 'avg_sales_chg_lst_4_q',
            content : 'Average Sales % Change - Last 4 Qtrs',
            field : 'Avg Sales Chg Lst 4Q',
            prefix : 'sales',
            value : 82
        },
        {
            id : 'avg_sales_chg_lst_5_q',
            content : 'Average Sales % Change - Last 5 Qtrs',
            field : 'Avg Sales Chg Lst 5Q',
            prefix : 'sales',
            value : 128
        },
        {
            id : 'avg_sales_chg_lst_6_q',
            content : 'Average Sales % Change - Last 6 Qtrs',
            field : 'Avg Sales Chg Lst 6Q',
            prefix : 'sales',
            value : 239
        },
        {
            id : 'sales_acc_lst_2_q',
            content : 'Sales Acceleration - Last 2 Qtrs',
            field : 'Sales Acc Lst2Q',
            prefix : 'sales',
            value : 'YES'
        },
        {
            id : 'sales_acc_lst_3_q',
            content : 'Sales Acceleration - Last 3 Qtrs',
            field : 'Sales Acc Lst3Q',
            prefix : 'sales',
            value : 'NO'
        },
        {
            id : 'sales_chg_lst_rpt_y',
            content : 'Sales % Change - Last Reported Year',
            field : 'Sales Chg Lst Rpt Y',
            prefix : 'sales',
            value : 303
        },
        {
            id : 'sales_growth_rate_lst_3_y',
            content : 'Sales % Growth Rate - Last 3 Years',
            field : 'Sales Growth Rate Lst3Y',
            prefix : 'sales',
            value : 178
        },
        {
            id : 'sales_growth_rate_lst_5_y',
            content : 'Sales % Growth Rate - Last 5 Years',
            field : 'Sales Growth Rate Lst5Y',
            prefix : 'sales',
            value : 49
        },
        {
            id : 'tot_ann_sales_lst_rpt_y',
            content : 'Total Annual Sales(mil) - Last Reported Year',
            field : 'Tot Ann Sales Lst RptY',
            prefix : 'sales',
            value : 184
        },
    ] ;

    const mockDataIndustry = [
        {
            id : 'company_ids_g_r',
            content : `Company's Industry Group Rank`,
            field : 'Company Ids G R',
            prefix : 'industry',
            value : 34
        },
        {
            id : 'industry_g_n',
            content : `Industry Group Name`,
            field : 'Industry G N',
            prefix : 'industry',
            value : 'Aerospace/Defense, Agricultural Operations, Apparel-Clothing Mfg'
        },
        {
            id : 'broad_sectors',
            content : `Broad Sectors`,
            field : 'Broad Sectors',
            prefix : 'industry',
            value : 'AEROSPACE, AGRICULTURE'
        }
    ] ;

    const mockDataSharings = [
        {
            id : 'shares_outstanding',
            content : `Shares Outstanding(1000s)`,
            field : 'Shares Outstanding(1000s)',
            prefix : 'sharings',
            value : 34
        },
        {
            id : 'shares_in_float',
            content : `Shares in Float(1000s)`,
            field : 'Shares In Float(1000s)',
            prefix : 'sharings',
            value : 63
        },
        {
            id : 'market_capitialization',
            content : `Market Capitalization(mil)`,
            field : 'Market Capitalization(mil)',
            prefix : 'sharings',
            value : 49
        },
        {
            id : 'enterprise_value',
            content : `Enterprise Value(mil)`,
            field : 'Enterprise Value(mil)',
            prefix : 'sharings',
            value : 27
        },
        {
            id : 'sponsorship_rating',
            content : `Sponsorship Rating`,
            field : 'Sponsorship Rating',
            prefix : 'sharings',
            value : 'A'
        },
        {
            id : 'funds',
            content : `Funds %`,
            field : 'Funds %',
            prefix : 'sharings',
            value : 33
        },
        {
            id : 'funds_increase',
            content : `Funds % Increase`,
            field : 'Funds % Increase',
            prefix : 'sharings',
            value : 54
        },
        {
            id : 'number_of_fund',
            content : `Number of Fund`,
            field : 'Number of Fund',
            prefix : 'sharings',
            value : 28
        },
        {
            id : 'management',
            content : `Management %`,
            field : 'Management %',
            prefix : 'sharings',
            value : 44
        },
        {
            id : 'institutional_ownership',
            content : `Institutional Ownership < Median`,
            field : 'Institutional Ownership < Median',
            prefix : 'sharings',
            value : 'YES'
        }
    ] ;

    const mockDataPriceVolume = [
        {
            id : 'price',
            content : `Price`,
            field : 'Price',
            prefix : 'priceVolume',
            value : 11
        },
        {
            id : 'price_vs_52_week_high',
            content : `Price vs 52-Week High`,
            field : 'Price 52-Week High',
            prefix : 'priceVolume',
            value : 582
        },
        {
            id : 'price_chg_cur_d',
            content : `Price % Change - Current Day`,
            field : 'Price Chg CurD',
            prefix : 'priceVolume',
            value : 39
        },
        {
            id : 'price_chg',
            content : `Price $ Change`,
            field : 'Price $ Chg',
            prefix : 'priceVolume',
            value : 182
        },
        {
            id : 'price_chg_cur_w',
            content : `Price % Change - Current Week`,
            field : 'Price Chg CurW',
            prefix : 'priceVolume',
            value : 84
        },
        {
            id : 'price_chg_lst_m',
            content : `Price % Change - Last Month`,
            field : 'Price Chg LstM',
            prefix : 'priceVolume',
            value : 546
        },
        {
            id : 'price_chg_lst_3_m',
            content : `Price % Change - Last 3 Months`,
            field : 'Price Chg Lst3M',
            prefix : 'priceVolume',
            value : 164
        },
        {
            id : 'price_chg_lst_6_m',
            content : `Price % Change - Last 6 Months`,
            field : 'Price Chg Lst6M',
            prefix : 'priceVolume',
            value : 43
        },
        {
            id : 'price_chg_lst_12_m',
            content : `Price % Change - Last 12 Months`,
            field : 'Price Chg Lst12M',
            prefix : 'priceVolume',
            value : 95
        },
        {
            id : 'price_chg_y_to_d',
            content : `Price % Change -= Year to Date`,
            field : 'Price Chg Y to D',
            prefix : 'priceVolume',
            value : 392
        },
        {
            id : 'price_chg_sp_500_lst26w',
            content : `Price % Change - vs. S&P 500(Last 26 Weeks)`,
            field : 'Price Chg S&P 500 LST26W',
            prefix : 'priceVolume',
            value : 175
        },
        {
            id : 'weekly_closing_range',
            content : `Weekly Closing Range`,
            field : 'Weekly Closing Range',
            prefix : 'priceVolume',
            value : 39
        },
        {
            id : 'daily_closing_range',
            content : `Daily Closing Range`,
            field : 'Daily Closing Range',
            prefix : 'priceVolume',
            value : 449
        },
        {
            id : 'price_vs_10_d',
            content : `Price vs 10 Day`,
            field : 'Price vs 10D',
            prefix : 'priceVolume',
            value : 82
        },
        {
            id : 'price_vs_21_d',
            content : `Price vs 21 Day`,
            field : 'Price vs 21D',
            prefix : 'priceVolume',
            value : 27
        },
        {
            id : 'price_vs_50_d',
            content : `Price vs 50 Day`,
            field : 'Price vs 50D',
            prefix : 'priceVolume',
            value : 77
        },
        {
            id : 'price_vs_150_d',
            content : `Price vs 150 Day`,
            field : 'Price vs 150D',
            prefix : 'priceVolume',
            value : 150
        },
        {
            id : 'price_vs_200_d',
            content : `Price vs 200 Day`,
            field : 'Price vs 200D',
            prefix : 'priceVolume',
            value : 188
        },
        {
            id : 'd_10_d_21_d_50',
            content : `10 Day > 21 Day > 50 Day`,
            field : '10D 21D 50D',
            prefix : 'priceVolume',
            value : "YES"
        },
        {
            id : 'd_50_d_150_d_200',
            content : `50 Day > 150 Day > 200 Day`,
            field : '50D 150D 200D',
            prefix : 'priceVolume',
            value : 'NO'
        },
        {
            id : 'vol_50_d_avg',
            content : `Volume - 50 Day Average(1000s)`,
            field : 'Vol 50D Avg',
            prefix : 'priceVolume',
            value : 33
        },
        {
            id : 'vol_Chg_50_d_avg',
            content : `Volume - % Chg vs. 50 Day Average`,
            field : 'Volume Chg 50D Avg',
            prefix : 'priceVolume',
            value : 70
        },
        {
            id : 'w_vol_chg_10_w_avg',
            content : `Weekly Volume - % Chg vs. 10 Week Average`,
            field : 'W Vol Chg 10W Avg',
            prefix : 'priceVolume',
            value : 104
        },
        {
            id : 'cur_d_vol_grt_pre_5_d',
            content : `Current day's Volume greater than previous 5 days`,
            field : 'Cur D Vol grt pre 5D',
            prefix : 'priceVolume',
            value : 'YES'
        },
        {
            id : 'cur_d_vol_grt_pre_10_d',
            content : `Current day's Volume greater than previous 10 days`,
            field : 'Cur D Vol grt pre 10D',
            prefix : 'priceVolume',
            value : 'YES'
        },
        {
            id : 'cur_d_vol_grt_pre_20_d',
            content : `Current day's Volume greater than previous 20 days`,
            field : 'Cur D Vol grt pre 20D',
            prefix : 'priceVolume',
            value : 'YES'
        },
        {
            id : 'vol_int',
            content : `Volume-Instraday(1000s)`,
            field : 'Vol Int',
            prefix : 'priceVolume',
            value : 229
        },
        {
            id : 'up_down_vol_rat',
            content : `Up/Down Volume Ratio`,
            field : 'Up Down Vol Rat',
            prefix : 'priceVolume',
            value : 59
        },
        {
            id : 'vol_50_d_avg_dol_1000s',
            content : `Volume - 50 Day Average Dollar 1000s`,
            field : 'Vol 50D Avg Dol 1000s',
            prefix : 'priceVolume',
            value : 189
        },
        {
            id : 'rs_line_new_high',
            content : `RS Line New High`,
            field : 'RS Line New High',
            prefix : 'priceVolume',
            value : 'NO'
        },
        {
            id : 'rs_line_new_low',
            content : `RS Line NEw Low`,
            field : 'RS Line New Low',
            prefix : 'priceVolume',
            value : 'YES'
        },
        {
            id : 'rs_rating_3_m',
            content : `RS Rating - 3 Month`,
            field : 'RS Rating 3M',
            prefix : 'priceVolume',
            value : 411
        },
        {
            id : 'rs_rating_6_m',
            content : `RS Rating - 6 Month`,
            field : 'RS Rating 6M',
            prefix : 'priceVolume',
            value : 369
        },
        {
            id : 'timeliness_rating',
            content : `Timeliness Rating`,
            field : 'Timeliness Rating',
            prefix : 'priceVolume',
            value : 'A, B, C'
        },
        {
            id : 'alpha',
            content : `Alpha`,
            field : 'Alpha',
            prefix : 'priceVolume',
            value : 339
        },
        {
            id : 'beta',
            content : `Beta`,
            field : 'Beta',
            prefix : 'priceVolume',
            value : 89
        },
        {
            id : 'avg_true_range_30_d',
            content : `Average True Range(30 Days)`,
            field : 'Avg True Range 30D',
            prefix : 'priceVolume',
            value : 802
        },
    ] ;

    const mockDataMargins = [
        {
            id : 'davidend_yield',
            content : `Davidend Yield`,
            field : 'Davidend Yield',
            prefix : 'margins',
            value : 30
        },
        {
            id : 'after_tax_mrgn_acce_lst_3_q',
            content : `After Tax Margin Acceleration Last 3 Qtrs`,
            field : 'After Tax Mrgn Acce Lst 3Q',
            prefix : 'margins',
            value : 25
        },
        {
            id : 'pre_tax_mrgn_lst_rpty',
            content : `Pre Tax Margin Last Reported Year`,
            field : 'Pre Tax Mrgn Lst Rpty',
            prefix : 'margins',
            value : 89
        },
        {
            id : 'after_tax_mrgn_lst_rpt_q',
            content : `After Tax Margin - Last Reported Quarter`,
            field : 'After Tax Mrgn Lst RptQ',
            prefix : 'margins',
            value : 23
        },
        {
            id : 'after_tax_mrgn_avg_lst_q_2',
            content : `After Tax Margin - Average Last 2 Qtrs`,
            field : 'After Tax Mrgn Avg Lst 2Q',
            prefix : 'margins',
            value : 456
        },
        {
            id : 'after_tax_mrgn_avg_lst_q_3',
            content : `After Tax Margin Average Last 3 Qtrs`,
            field : 'After Tax Mrgn Avg Lst 3Q',
            prefix : 'margins',
            value : 124
        },
        {
            id : 'after_tax_mrgn_avg_lst_q_4',
            content : `After Tax Margin Average Last 4 Qtrs`,
            field : 'After Tax Mrgn Avg Lst 4Q',
            prefix : 'margins',
            value : 254
        },
        
        {
            id : 'after_tax_mrgn_avg_lst_q_5',
            content : `After Tax Margin Average Last 5 Qtrs`,
            field : 'After Tax Mrgn Avg Lst 5Q',
            prefix : 'margins',
            value : 658
        },
        {
            id : 'after_tax_mrgn_avg_lst_q_6',
            content : `After Tax Margin Average Last 6 Qtrs`,
            field : 'After Tax Mrgn Avg Lst 6Q',
            prefix : 'margins',
            value : 78
        },
        {
            id : 'opr_sys_ids_median_is_bigger',
            content : `Operating System >= Industry Median`,
            field : 'Operating Sys >= Industry Median',
            prefix : 'margins',
            value : 'No'
        },
        {
            id : 'profile_mrgn_ids_median_is_bigger',
            content : `Profile Margin >= Industry Median`,
            field : 'Profile Mrgn >= Industry Median',
            prefix : 'margins',
            value : 'YES'
        },
        {
            id : 'p_e_current',
            content : `P/E Current`,
            field : 'P/E Current',
            prefix : 'margins',
            value : 154
        },
        {
            id : 'p_e_est',
            content : `P/E Estimated`,
            field : 'P/E Estimaged',
            prefix : 'margins',
            value : 254
        },
        {
            id : 'p_e_vs_sp_500',
            content : `P/E - vs. S&P 500 P/E`,
            field : 'P/E Vs S&P 500',
            prefix : 'margins',
            value : 457
        },
        {
            id : 'p_e_percent_rnk',
            content : `P/E - Percentile Rank`,
            field : 'P/E Percentile Rnk',
            prefix : 'margins',
            value : 875
        },
        {
            id : 'p_e_percent_rnk_in_grp',
            content : `P/E - Percentile Rank in Group`,
            field : 'P/E - Percentila Rnk in Grp',
            prefix : 'margins',
            value : 451
        },
        {
            id : 'p_e_avg_5y_is_bigger',
            content : `P/E < Average 5 Year P/E`,
            field : 'P/E < Avg 5Y',
            prefix : 'margins',
            value : "YES"
        },
        {
            id : 'peg',
            content : `PEG`,
            field : 'PEG',
            prefix : 'margins',
            value : 237
        },
        {
            id : 'peg_divid_adj',
            content : `PEG(Dividend Adjusted)`,
            field : 'PEG Divd Adj',
            prefix : 'margins',
            value : 185
        },
        {
            id : 'cf_v_eps_diff_lst_rpt_q',
            content : `CF vs EPS % Difference - Last Reported Quarter`,
            field : 'CF v EPS Diff Lst R Q',
            prefix : 'margins',
            value : 363
        },
        {
            id : 'cf_v_eps_diff_lst_rpt_y',
            content : `CF vs EPS % Difference - Last Reported Year`,
            field : 'CF v EPS Diff Lst R Y',
            prefix : 'margins',
            value : 26
        },
        {
            id : 'roe_5y_avg',
            content : `ROE - 5Year Average`,
            field : 'ROE 5Y Avg',
            prefix : 'margins',
            value : 154
        },
        {
            id : 'debit_lst_rpt_y',
            content : `Debit % - Last Reported Year`,
            field : 'Debit Lst Rpt Y',
            prefix : 'margins',
            value : 75
        },
        {
            id : 'current_ratio',
            content : `Current Ratio`,
            field : 'Current Ratio',
            prefix : 'margins',
            value : 62
        },
        {
            id : 'price_to_sales',
            content : `Price to Sales`,
            field : 'Price to Sales',
            prefix : 'margins',
            value : 448
        },
        {
            id : 'price_to_book_value',
            content : `Price to Book Value`,
            field : 'Price to Book Value',
            prefix : 'margins',
            value : 154
        },
        {
            id : 'price_to_cash_flow',
            content : `Price to Cash Flow`,
            field : 'Price to Cash Flow',
            prefix : 'margins',
            value : 95
        },
        {
            id : 'epr_val_free_cash_flow',
            content : `Enterprise Value to Free Cash Flow`,
            field : 'Ent Val Free Cash Flow',
            prefix : 'margins',
            value : 154
        },
        {
            id : 'long_term_debit_work_cap',
            content : `Long Term Debit to Working Captial`,
            field : 'Long Term Debit Work Cap',
            prefix : 'margins',
            value : 34
        },
        {
            id : 'tot_lia_tot_ass',
            content : `Total Liabilities/Total Assets < Industry Median`,
            field : 'Total Lia/Total Ass',
            prefix : 'margins',
            value : "YES"
        },
    ] ;

    const mockDataGeneralStock = [
        {
            id : 'exchange',
            content : `Exchange`,
            field : 'Exchange',
            prefix : 'generalStock',
            value : 'AMEX, ARCA, BATS'
        },
        {
            id : 'adr',
            content : `ADR`,
            field : 'ADR',
            prefix : 'generalStock',
            value : 'YES'
        },
        {
            id : 'etf_closed_end_fund',
            content : `ETF/Closed-End Fund`,
            field : 'ETF/Closed-End Fund',
            prefix : 'generalStock',
            value : 'YES'
        },
        {
            id : 'etf',
            content : `ETF`,
            field : 'ETF',
            prefix : 'generalStock',
            value : 'YES'
        },
        {
            id : 'options',
            content : `Options`,
            field : 'Options',
            prefix : 'generalStock',
            value : 'YES'
        },
        {
            id : 'ipo_date',
            content : `IPO Date`,
            field : 'IPO Date',
            prefix : 'generalStock',
            value : '2022-05-03'
        },
        {
            id : 'incorporation_date',
            content : `Incorporation Date`,
            field : 'Incorporation Date',
            prefix : 'generalStock',
            value : '2016-07-05'
        },
        {
            id : 'headquarters_city',
            content : `Headquarters-City/Country`,
            field : 'Headquarters-City/Country',
            prefix : 'generalStock',
            value : 'AB, AK, AL, AR'
        },
        {
            id : 'new_ceo_in_lst_12_m',
            content : `New CEO in Last 12 Months`,
            field : 'New CEO in Lst 12M',
            prefix : 'generalStock',
            value : 'YES'
        },
        {
            id : 'ibd_article_lst_2_y',
            content : `IBD Article Last 2 Years`,
            field : 'IBD Article Lst 2Y',
            prefix : 'generalStock',
            value : 'YES'
        },
    ] ;

    const mockDataIbd = [
        {
            id : 'ibd_50',
            content : `IBD 50`,
            field : 'IBD 50',
            prefix : 'ibd',
            value : 'YES'
        },
        {
            id : 'ibd_new_america',
            content : `IBD New America`,
            field : 'IBD New America',
            prefix : 'ibd',
            value : 'YES'
        },
        {
            id : 'ibd_85',
            content : `IBD 85-85`,
            field : 'IBD 85-85',
            prefix : 'ibd',
            value : 'YES'
        },
        {
            id : 'ibd_big_cap_20',
            content : `IBD Big Cap 20`,
            field : 'IBD Big Cap 20',
            prefix : 'ibd',
            value : 'YES'
        },
    ] ;

    const mockDataPreview = [
       
    ] ;

    const {
        open,
        handleClose,
        CustomizeColumnHeader,
        CustomizeColumnData,
    } = props ;

    const {
        status
    } = useResultViewInfo() ;

    const [scrollDiv , {width, height}] = useMeasure() ;
    const [isDropDisabled, setDropDisabled] = React.useState(false) ;

    const [elements, setElements] = React.useState({
        'smartSelect' : mockDataSmartSelect,
        'earnings' : mockDataEarnings,
        'sales' : mockDataSales,
        'industry' : mockDataIndustry,
        'sharings' : mockDataSharings,
        'priceVolume' : mockDataPriceVolume,
        'margins' : mockDataMargins,
        'generalStock' : mockDataGeneralStock,
        'ibd' : mockDataIbd,
        'preview' : mockDataPreview
    });

    const removeFromList = (list, index) => {
        const result = Array.from(list);
        const [removed] = result.splice(index, 1);
        return [removed, result];
    };
      
    const addToList = (list, index, element) => {
        const result = Array.from(list);
        result.splice(index, 0, element);
        return result;
    };

    const extractDroppableId = (raw_droppable_id) => {
        return raw_droppable_id.split("_")[0] ;
    }

    const onDragStart = (result) => {
        if(extractDroppableId(result.source.droppableId) !== 'preview') {
            setDropDisabled(true) ;
        }
    }
    
    const onDragEnd = (result) => {

        if (!result.destination) {
          return;
        }

        const listCopy = { ...elements };

        const sourceList = listCopy[extractDroppableId(result.source.droppableId)];
    
        const [removedElement, newSourceList] = removeFromList(
            sourceList,
            result.source.index
        );
    
        listCopy[extractDroppableId(result.source.droppableId)] = newSourceList;

        const destinationList = listCopy[extractDroppableId(result.destination.droppableId)];
        
        listCopy[extractDroppableId(result.destination.droppableId)] = addToList(
            destinationList,
            result.destination.index,
            removedElement
        );
    
        setElements({
            ...listCopy
        });

        setDropDisabled(false) ;
    };

    const handleSaveCSV = () => {
        let tempHeader = [] ;
        let tempData = {} ;

        elements.preview.map((item, index) => {
            console.log(item.field);
            tempHeader.push(item.field);
            tempData[index] = item;
        })
        CustomizeColumnHeader(tempHeader);
        CustomizeColumnData(tempData);
    }
    
    return (
        <Box className={classes.root}>
            <Dialog
                open={open}
                fullWidth
                classes ={{
                    paper : classes.paper
                }}
                onClose={handleClose}
            >
                <DialogTitle>
                    Customize Column Layout
                </DialogTitle>
                <DialogContent>
                    <Box sx={{fontWeight : 'bold', p : 1}}>
                        Add a column by dragging it to the preview container below
                    </Box>
                    
                    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
                        <Box className={classes.accordionDiv}>
                            {
                                accordionContent.map((element, index) => {
                                    return(
                                        <AccordionPanel 
                                            key={index}
                                            droppableId={element.droppableId}
                                            title={element.title}
                                            idx={index}
                                            context={element.context}
                                            draggableList={elements[Object.keys(elements)[index]]}
                                            isDropDisabled={isDropDisabled}
                                        />
                                    )
                                })
                            }
                        </Box>
                        
                        <Box className={classes.preview}>
                            <Box className={classes.previewTitle}>
                                <Box sx={{fontWeight : 'bold', color : 'white'}}>
                                    Column Layout Preview
                                </Box>
                                <Box sx={{fontWeight : 'bold', color : '#377878'}}>
                                    Clear All
                                </Box>
                            </Box>

                            <Box className={classes.previewContent} sx={{height : (height + 9) + 'px'}}>
                                <Box className={classes.scrollDiv} ref={scrollDiv}>
                                    <Box className={classes.previewColumn}>
                                        <Droppable droppableId={`${'preview'}`}
                                            direction='horizontal'
                                        >
                                            {
                                                (provided) => (
                                                    <div {...provided.droppableProps} ref={provided.innerRef}>
                                                    {
                                                        elements.preview.map((item, index) => (
                                                            <DragListItem key={item.id} item={item} index={index} />
                                                        ))
                                                    }
                                                    {provided.placeholder}
                                                    </div>
                                                )
                                            }
                                        </Droppable>
                                    </Box>
                                    <Box className={classes.previewTable}>
                                        <Box sx={{fontWeight : 'bold'}}> Sample Data </Box>
                                        <TableContainer component={Paper}>
                                            <Table size="small" aria-label="a dense table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell sx={{width : '100px !important'}}>Stoke Name</TableCell>
                                                        {
                                                            elements.preview.map((field, index) => {
                                                                return (
                                                                    <TableCell key={index}>
                                                                        { field.field }
                                                                    </TableCell>
                                                                )
                                                            })
                                                        }
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow
                                                    >
                                                        <TableCell sx={{ width : '100px !important'}}>
                                                            {status}
                                                        </TableCell>
                                                        {
                                                            elements.preview.map((field, index) => {
                                                                return (
                                                                    <TableCell key={index} sx={{textAlign  :'center !important'}}>
                                                                        { field.value }
                                                                    </TableCell>
                                                                )
                                                            })
                                                        }
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                            </TableContainer>
                                    </Box>
                                </Box>
                            </Box>

                            <Box className={classes.previewFooter}>
                                <Grid container>
                                    <Grid item xs={6} sx={{fontSize : '12px'}}>
                                        <Box component={"span"} sx={{fontWeight : 'bold'}}>Instructions: </Box> Columns can be recordered using a drag and drop action with your mouse.
                                        Click and hold any Column Header and drag it either left or right to the location you preter.
                                        Reconfiguring the table lets you group data items together for easier comparison.
                                        Column definition available on right click of column. 
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{display : 'flex', justifyContent : 'flex-end !important', mb : 1}}>
                                            <Button variant="outlined">
                                                Modified & unsaved
                                            </Button>
                                        </Box>
                                        <Box sx={{display : 'flex', justifyContent : 'flex-end !important', alignItems : 'center'}}>
                                            Current Layout:&nbsp; <Box component={"span"} sx={{color : '#4680bd', fontSize : '14px'}}>Un-Saved</Box>
                                            <Button variant="outlined" sx={{ml : 2}}>
                                                Save As
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>    
                    </DragDropContext>
                    
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" sx={{ml : 2}}>
                        Cancel
                    </Button>
                    <Button variant="outlined" onClick={handleSaveCSV} sx={{ml : 2}}>
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}
CustomizeColumnModal.propTypes = {
}
const mapStateToProps = state => ({
})
const mapDispatchToProps = {
    CustomizeColumnHeader,
    CustomizeColumnData
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomizeColumnModal) ;