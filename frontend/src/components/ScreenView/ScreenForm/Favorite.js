import * as React from 'react' ;

import { connect } from "react-redux";
import { InsertScreenOptionData } from '../../../redux/actions/screenOption';

import {
    Box,
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Favorite.styles';

const Favorite = (props) => {
    const classes = useStyles() ;

    const {
        InsertScreenOptionData,
        formData,
    } = props;
    
    React.useEffect(async () => {

        await InsertScreenOptionData(formData);
        console.log( formData, '[ tobacked')
        console.log( 'to backedn');

    }, [formData])


    return (
        <Box className={classes.root}>
            <Box className={classes.sectionDiv}>
                Your Favorite Criterial are dislayed here in the 'Favorite Criteria' Category
            </Box>
            <Box className={classes.sectionDiv}>
                As you click the favorite icon <StarBorderIcon /> for a criteria, a copy of that criteria will appear.
            </Box>
            <Box className={classes.sectionDiv}>
                You might find it useful to keep track of criteria that you commonly use in multiple screens.
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = {
    InsertScreenOptionData
}

export default connect(mapStateToProps, mapDispatchToProps) (Favorite) ;