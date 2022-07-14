import * as React from 'react' ;

import {
    Box, 
    Checkbox, 
    FormControlLabel, 
    FormGroup,
    TextField
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Earning.styles';

const EarningForm = () => {
    const classes = useStyles() ;

    const charItems = [
        "A",
        "B",
        "C",
        "D",
        "E"
    ]

    return (
        <Box className={classes.root}>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    1
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Earnings Last Reported Date</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <Box>
                        <TextField
                            type={'date'}
                            size={'small'}
                            defaultValue={new Date().toLocaleDateString()}
                        />
                        <Box sx={{fontSize : '13px', textAlign : 'right'}}>Date</Box>
                    </Box>
                    <Box >to</Box>
                    <Box>
                        <TextField
                            type={'date'}
                            size={'small'}
                            defaultValue={new Date().toLocaleDateString()}
                        />
                        <Box sx={{fontSize : '13px', textAlign : 'right'}}>Date</Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    2
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Earning Due Date</Box>
                </Box>
                <Box className={classes.selectDateDiv}>
                    <Box className={classes.selectDiv}>Today</Box>
                    <Box className={classes.selectDiv}>Tomorror</Box>
                    <Box className={classes.selectDiv}>Next 5 Days</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <Box>
                        <TextField
                            type={'date'}
                            size={'small'}
                            defaultValue={new Date().toLocaleDateString()}
                        />
                        <Box sx={{fontSize : '13px', textAlign : 'right'}}>Date</Box>
                    </Box>
                    <Box >to</Box>
                    <Box>
                        <TextField
                            type={'date'}
                            size={'small'}
                            defaultValue={new Date().toLocaleDateString()}
                        />
                        <Box sx={{fontSize : '13px', textAlign : 'right'}}>Date</Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.bannderDiv}>
                Quarterly
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    3
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - Last Reported Quarter</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'Include stocks iwth negative comparison quarter'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    4
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - 1 Quarter Ago</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'Include stocks iwth negative comparison quarter'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    5
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Earnings Acceleration - Last 3 Qtrs</Box>
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
                    6
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Earnings Stability</Box>
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
                    <Box className={classes.underLineDiv}>EPS % Change - 2 Quarter Ago</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'Include stocks iwth negative comparison quarter'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    8
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - 3 Quarter Ago</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'Include stocks iwth negative comparison quarter'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    9
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Earnings Acceleration - Last 3 Qtrs</Box>
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
                    10
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average EPS % Change - Last 2 Qtrs</Box>
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
                    11
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average EPS % Change - Last 3 Qtrs</Box>
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
                    <Box className={classes.underLineDiv}>Average EPS % Change - Last 4 Qtrs</Box>
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
                    13
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average EPS % Change - Last 5 Qtrs</Box>
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
                    14
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average EPS % Change - Last 6 Qtrs</Box>
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
                    15
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - Trailing 4 Qtrs</Box>
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
                    16
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - Trailing 4 Qtrs {`>`} EPS, 4 Years Ago</Box>
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
                    17
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - Trailing 4 Qtrs {`>=`} Last Year</Box>
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
                    18
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - Last Reported Year vs. 1 Years Ago</Box>
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
                    19
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - Last Reported Year vs. 2 Years Ago</Box>
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
                    20
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - Last Year</Box>
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
                    21
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Growth Rate - Last 3 Years</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    22
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Growth Rate - Last 5 Years</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>


            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    23
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Growth Rate - Last 3 Years {`>=`} 5 Years</Box>
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
                    24
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Growth Rate - Last 5 Years</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    25
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Growth Rate - Projected...</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    26
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - Last Reported Year</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    27
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 1 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    28
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 1 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    28
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 2 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    29
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 3 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    30
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 4 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    31
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 5 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    32
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 6 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    33
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - Last Reported Year {`>`} 4 Years Ago</Box>
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
                Estimates
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    34
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS Estimate - Earnings Surprise</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    35
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS Estimate % Change - Next Quarter</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    36
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS Estimate % Change - CUrrent Year</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    37
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS Estimate % Change - 1 Year Forward vs. C...</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
        </Box>
    )
}

export default EarningForm ;