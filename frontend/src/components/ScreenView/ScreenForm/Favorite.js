import * as React from 'react' ;

import { connect } from "react-redux";
import { InsertScreenOptionData } from '../../../redux/actions/screenOption';

import Loading from '../../Common/Loading';

import {
    Box,
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Favorite.styles';

const Favorite = (props) => {
    const classes = useStyles() ;

    const {
        InsertScreenOptionData,
        selectedScreenList,
        formData,
    } = props;
    
    const [ loading, setLoading ] = React.useState(false);

    React.useEffect(async () => {

        setLoading(true);

            await InsertScreenOptionData(formData);
            
            console.log( formData, '[ tobacked')
            console.log( 'to backedn');

        setLoading(false);
        
    }, [formData])


    return (
        <>
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
            {
                loading && <Loading
                    status={"Insert setdata to database"}
                />
            }
        </>
    )
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = {
    InsertScreenOptionData,
}

export default connect(mapStateToProps, mapDispatchToProps) (Favorite) ;