import * as React from "react";

import { connect } from "react-redux";
import { GetScreenOptionData } from "../../../redux/actions/screenOption";

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
        selectedItem,
        stateFormData,
        setStateFormData,
        selectedScreenList,
        GetScreenOptionData
    } = props ;
 
    React.useEffect(async () => {
        
        await GetScreenOptionData(selectedScreenList)
        
    }, [selectedScreenList])
    
    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                CRITERIA
            </Box>
            {
                selectedItem === 'smart' && <SmartForm formData={stateFormData} setFormData={setStateFormData}/>
            }
            {
                selectedItem === 'earning' && <EarningForm formData={stateFormData} setFormData={setStateFormData}/>
            }
            {
                selectedItem === 'sales' && <SalesForm formData={stateFormData} setFormData={setStateFormData}/>
            }
            {
                selectedItem === 'industry' && <IndustryForm formData={stateFormData} setFormData={setStateFormData}/>
            }
            {
                selectedItem === 'sharing' && <SharingForm  formData={stateFormData} setFormData={setStateFormData}/>
            }
            {
                selectedItem === 'pricevolume' && <PriceVolumeForm formData={stateFormData} setFormData={setStateFormData}/>
            }
            {
                selectedItem === 'margins' && <MarginsForm formData={stateFormData} setFormData={setStateFormData}/>
            }
            {
                selectedItem === 'general' && <GeneralForm formData={stateFormData} setFormData={setStateFormData}/>
            }
            {
                selectedItem === 'idb' && <IDB formData={stateFormData} setFormData={setStateFormData}/>
            }
            {
                selectedItem === 'favorite' && <Favorite  formData={stateFormData}/>
            }
        </Box>
    );
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = {
    GetScreenOptionData
}

export default connect(mapStateToProps, mapDispatchToProps) (Criteria)  ;