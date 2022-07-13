import * as React from 'react' ;

import {
    Box, 
    Checkbox, 
    FormControlLabel, 
    FormGroup,
    TextField
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Smart.styles';

const SmartForm = () => {
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
                    <Box className={classes.underLineDiv}>EPS Rating</Box>
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
                    <Box className={classes.underLineDiv}>RS Rating</Box>
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
                    <Box className={classes.underLineDiv}>SMR Rating</Box>
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
                    4
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>A/D Rating</Box>
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
                    5
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Comp Rating</Box>
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
                    <Box className={classes.underLineDiv}>Ind Group Rs Rating</Box>
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
        </Box>
    )
}

export default SmartForm ;