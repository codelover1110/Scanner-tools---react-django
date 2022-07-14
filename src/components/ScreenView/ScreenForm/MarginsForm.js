import * as React from 'react' ;

import {
    Box, 
    Checkbox, 
    FormControlLabel, 
    FormGroup,
    TextField
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Margins.styles';

const MarginsForm = () => {
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
            <Box className={classes.bannderDiv}>
                Margins
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    1
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Davidend Yield</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    $<TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    $<TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    2
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>After Tax Margin Acceleration - Last 3 Qtrs</Box>
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
                    3
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Pre Tax Margin - Last Reported Year</Box>
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
                    <Box className={classes.underLineDiv}>After Tax Margin - Last Reported Quarter</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    $<TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />%
                    <Box >to</Box>
                    $<TextField
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
                    <Box className={classes.underLineDiv}>After Tax Margin - Average Last 2 Qtrs</Box>
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
                    6
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>After Tax Margin - Average Last 3 Qtrs</Box>
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
                    7
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>After Tax Margin - Average Last 4 Qtrs</Box>
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
                    <Box className={classes.underLineDiv}>After Tax Margin - Average Last 5 Qtrs</Box>
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
                    <Box className={classes.underLineDiv}>After Tax Margin - Average Last 6 Qtrs</Box>
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
                    10
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Operating System {`>=`} Industry Median</Box>
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
                <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    11
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Profit Margin {`>=`} Industry Median</Box>
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
                <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
            </Box>

            <Box className={classes.bannderDiv}>P/E Ratio</Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    12
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>P/E - Current</Box>
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
                    <Box className={classes.underLineDiv}>P/E - Estimated</Box>
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
                    <Box className={classes.underLineDiv}>P/E - vs. S{`&`}P 500 P/E</Box>
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
                    15
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>P/E - Percentile Rank</Box>
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
                    <Box className={classes.underLineDiv}>P/E - Percentile Rank in Group</Box>
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

            <Box className={classes.bannderDiv}>Margins</Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    17
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>P/E {`<`} Average 5 Year P/E</Box>
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

            <Box className={classes.bannderDiv}>P/E Ratio</Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    18
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>PEG</Box>
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
                    <Box className={classes.underLineDiv}>PEG {`(Dividend Adjusted)`}</Box>
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
            
            <Box className={classes.bannderDiv}>Ratios</Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    20
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>CF vs EPS % Difference - Last Reported Quarter</Box>
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
                    <Box className={classes.underLineDiv}>CF vs EPS % Difference - Last Reported Year</Box>
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
                    23
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>ROE - 5 Year Average</Box>
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
                    24
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Debit % - Last Reported Year</Box>
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
                    <Box className={classes.underLineDiv}>Current Ratio</Box>
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
                    26
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price to Sales</Box>
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
                    27
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price to Book Value</Box>
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
                    28
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price to Cash Flow</Box>
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
                    29
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Enterprice Value to Free Cash Flow</Box>
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
                    30
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Long Term Debit to Working Capital</Box>
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
                    31
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Total Liabilities/Total Assets {`<`} Industry Median</Box>
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
        </Box>
    )
}

export default MarginsForm ;