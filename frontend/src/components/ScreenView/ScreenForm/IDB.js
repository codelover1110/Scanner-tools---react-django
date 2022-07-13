import * as React from 'react' ;

import {
    Box, 
    Radio, 
    FormControlLabel, 
    FormGroup,
    TextField
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/IDB.styles';

const IDB = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    1
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>IBD 50</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                    </FormGroup>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    2
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>IBD New America</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                    </FormGroup>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    3
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>IBD 85-85</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                    </FormGroup>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    4
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>IBD Big Cap 20</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                    </FormGroup>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
            </Box>
        </Box>
    )
}

export default IDB ;