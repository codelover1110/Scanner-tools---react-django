import * as React from "react";

import SmartForm from "./SmartForm";
import EarningForm from './EarningForm' ;
import SalesForm from './SalesForm' ;
import IndustryForm from "./IndustryForm";
import SharingForm from "./SharingForm";
import PriceVolumeForm from "./PriceVolumeForm";
import MarginsForm from "./MarginsForm";
import GeneralForm from "./GeneralForm";
import IDB from "./IDB";

import {
    Box,
} from '@mui/material';

import { makeStyles } from "@mui/styles";
import Favorite from "./Favorite";

const useStyles = makeStyles((theme) => ({
    root : {
        padding : '0px 10px',

        "& .MuiSvgIcon-root" : {
            color : 'yellow',
            width : '16px'
        },
        "& .MuiListItem-root" : {
            justifyContent : 'space-between'
        },
        "& input" : {
            width : '80px',
            height : '30px'
        }
    },
    title : {
        fontSize : '13px',
        color : 'gray',
        background : 'rgb(240,240,230)'
    },
}))

const Criteria = (props) => {

    const classes = useStyles();

    const {
        selectedItem
    } = props ;

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                CRITERIA
            </Box>
            {
                selectedItem === 'smart' && <SmartForm />
            }
            {
                selectedItem === 'earning' && <EarningForm />
            }
            {
                selectedItem === 'sales' && <SalesForm />
            }
            {
                selectedItem === 'industry' && <IndustryForm />
            }
            {
                selectedItem === 'sharing' && <SharingForm />
            }
            {
                selectedItem === 'pricevolume' && <PriceVolumeForm />
            }
            {
                selectedItem === 'margins' && <MarginsForm />
            }
            {
                selectedItem === 'general' && <GeneralForm />
            }
            {
                selectedItem === 'idb' && <IDB />
            }
            {
                selectedItem === 'favorite' && <Favorite />
            }
        </Box>
    );
}

export default Criteria;