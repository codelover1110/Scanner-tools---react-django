import * as React from 'react' ;

import {
    Box, 
    Checkbox, 
    FormControlLabel, 
    FormGroup,
    TextField
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Favorite.styles';

const Favorite = () => {
    const classes = useStyles() ;

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

export default Favorite ;