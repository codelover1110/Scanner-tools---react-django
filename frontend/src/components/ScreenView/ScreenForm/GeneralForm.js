import * as React from 'react' ;

import {
    Box, 
    Checkbox, 
    Radio,
    FormControlLabel, 
    FormGroup,
    TextField
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import TwoSelectBox from './TwoSelectBoxs';

import { useStyles } from './StyledDiv/General.styles';

const GeneralForm = () => {
    const classes = useStyles() ;

    const mockData1 = [
        "AMEX",
        "ARCA",
        "BATS",
        "NASDAQ",
        "NYSE",
    ]

    const mockData2 = [
        "AB",
        "AK",
        "AL",
        "AR",
        "AQ"
    ]

    return (
        <Box className={classes.root}>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    1
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Exchange</Box>
                </Box>
                <Box className={classes.multiLetterDiv}>
                    <b>CTRL</b> or <b>SHIFT</b> to multi-select
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'Include'}</span>}
                        />
                    </FormGroup>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'Exclude'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box >
                    <TwoSelectBox 
                        baseItems={mockData1}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    2
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>ADR</Box>
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
                    <Box className={classes.underLineDiv}>ETF/Closed-End Fund</Box>
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
                    4
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>ETF</Box>
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
                    5
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Options</Box>
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
                    <Box className={classes.underLineDiv}>IPO Date</Box>
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
                    7
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Incorporation Date</Box>
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
                    9
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Headquarters - City/Country</Box>
                </Box>
                <Box className={classes.multiLetterDiv}>
                    <b>CTRL</b> or <b>SHIFT</b> to multi-select
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'Include'}</span>}
                        />
                    </FormGroup>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Radio
                                
                                />
                            }
                            label={<span>{'Exclude'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box >
                    <TwoSelectBox 
                        baseItems={mockData2}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    11
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>New CEO in Last 12 Months</Box>
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
                    12
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>IBD Article Last 2 Years</Box>
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

export default GeneralForm ;