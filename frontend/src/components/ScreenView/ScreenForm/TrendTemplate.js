import * as React from "react";

import { connect } from "react-redux";
import { GetTrendData } from "../../../redux/actions/result";
import { SetTreeViewType } from "../../../redux/actions/screen";

import { useResultViewInfo } from '../../../contexts/ResultViewContext';
import Loading from "../../Common/Loading";

import {
    Box,
    Button,
    Grid,
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontSize : '20px',
        fontWeight : 'bold',
        
        marginBottom : '30px'
    },
    text : {
        background : '#8fc5e6',
        fontStyle : 'italic',

        padding : '30px',
        marginBottom : '30px'
    },
    buttonCss : {
        textTransform : 'capitalize !important',
        background: 'linear-gradient(0deg, rgba(88,87,85,1) 0%, rgba(78,75,75,1) 52%, rgba(112,112,111,0) 100%) !important',
        border : '1px solid black !important',

        "&:hover" : {
            background : 'linear-gradient(0deg, rgba(249,166,0,1) 0%, rgba(238,197,28,1) 52%, rgba(237,142,16,0) 100%) !important'
        }
    }
}))

const TrendTemplate = (props) => {

    const classes = useStyles();
    
    const {
        GetTrendData,
        SetTreeViewType
    } = props;

    const {
        InitialResultViewPoint,
    } = useResultViewInfo() ;

    const [ loading, setLoading ] = React.useState(false);

    const handleViewResult = async () => {

        setLoading(true);
        await InitialResultViewPoint(250) ;
        await GetTrendData();
        await SetTreeViewType("trend template");
        setLoading(false);
    }

    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.title}>
                    Screen Summary for Trend Template
                </Box>
                <Box className={classes.text}>
                    Trend Template:
                    <Box>
                        1. Stock Price {'>'} (greater than) 150 MA and 200 day  <br/>
                        2. 150 day MA > 200 day MA <br/>
                        3. 200 day MA is trending up for atleast 4 month(preferable 4-5months minimum) <br/>
                        4. 50 day MA is above both 150 day MA and 200 day MA <br/>
                        5. Stock Price > 25% of 52 week low (Many of the best selections with be 100%, 300% or even greater above their 52) <br/>
                    </Box>
                    week low.
                    <Box>
                        6. Stock Price is within 25% of its 52 week high (closer to the high the better) <br/>
                        7. Relative strength ranking (as reported by investors Business Daily) is 70 or greater (90+ for better selections) <br/>
                        8. Stock price is trading above 50 day MA <br/>
                    </Box>
                </Box>
                <Button variant='contained' className={classes.buttonCss}
                    onClick={() => handleViewResult()}
                >
                    View Screen Results
                </Button>
            </Box>
            {
                loading &&
                <Loading />
            }
        </>
    );
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = {
    GetTrendData,
    SetTreeViewType
}

export default connect(mapStateToProps, mapDispatchToProps) (TrendTemplate);