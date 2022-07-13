import * as React from 'react' ;

import {
    Box, 
    Checkbox, 
    FormControlLabel, 
    FormGroup,
    TextField
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Sales.styles';

const SalesForm = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box className={classes.bannderDiv}>
                Quarterly
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    1
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Sales % Change - Last Reported Quarter</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    2
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average Sales % Change - Last 2 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    3
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average Sales % Change - Last 3 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    4
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average Sales % Change - Last 4 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    5
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average Sales % Change - Last 5 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    6
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average Sales % Change - Last 6 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />
                </Box>
            </Box>
            
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    7
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Sales Acceleration - Last 3 Qtrs</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                    </FormGroup>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </FormGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    8
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Sales Acceleration - Last 3 Qtrs</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                    </FormGroup>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </FormGroup>
                </Box>
            </Box>
            <Box className={classes.bannderDiv}>
                Annual
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    9
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Sales % Change - Last Reported Year</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    10
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Sales % Growth Rate - Last 3 Years</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    12
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Total Annual Sales {`(mil)`} - Last Reported Year </Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default SalesForm ;