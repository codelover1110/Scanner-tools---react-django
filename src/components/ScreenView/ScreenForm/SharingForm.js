import * as React from 'react' ;

import {
    Box, 
    Checkbox, 
    FormControlLabel, 
    FormGroup,
    TextField
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Sharing.styles';

const SharingForm = () => {
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
                    <Box className={classes.underLineDiv}>Shares Outstanding {`(1000s)`}</Box>
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
                    <Box className={classes.underLineDiv}>Share in Float {`(1000s)`}</Box>
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
                    <Box className={classes.underLineDiv}>Market Capitialization {`(mil)`} </Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    $<TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />
                    <Box >to</Box>
                    $<TextField
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
                    <Box className={classes.underLineDiv}>Enterprise Value {`(mil)`} </Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    $<TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                    />
                    <Box >to</Box>
                    $<TextField
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
                    <Box className={classes.underLineDiv}>Sponsorship Rating</Box>
                </Box>
                <Box className={classes.checkboxDiv}>
                    {
                        charItems.map((char, index) => {
                            return (
                                <FormGroup row key={index} >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            
                                            />
                                        }
                                        label={<span>{char}</span>}
                                    />
                                </FormGroup>
                            )
                        })
                    }
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    6
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Funds %</Box>
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
                    <Box className={classes.underLineDiv}>Funds % Increase</Box>
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
                    <Box className={classes.underLineDiv}>Number of Fund</Box>
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
                    <Box className={classes.underLineDiv}>Management %</Box>
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
                    <Box className={classes.underLineDiv}>Institutional Ownership {`<`} Median</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row  >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                    </FormGroup>
                    <FormGroup row  >
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

export default SharingForm ;