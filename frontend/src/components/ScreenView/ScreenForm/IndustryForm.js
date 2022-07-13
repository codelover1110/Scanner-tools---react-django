import * as React from 'react' ;

import TwoSelectBox from './TwoSelectBoxs';

import {
    Box, 
    Radio, 
    FormControlLabel, 
    FormGroup,
    TextField,
    NativeSelect
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Industry.styles';

const IndustryForm = () => {
    const classes = useStyles() ;

    const mockData1 = [
        "Aerospace/Defense",
        "Agricultural Operations",
        "Apparel-Clothing Mfg",
        "Apparel-Shoes & Rel Mfg",
        "Auto Manufactures",
        "Auto/Truck-Original Exp",
        "Auto/Truck-Replace Parts",
    ]

    const mockData2 = [
        "AEROSPACE",
        "AGRICULTRE",
        "ALCOHL/TOB",
        "APPAREL",
        "AUTO",
        "BANKS",
        "BUILDING",
    ]

    return (
        <Box className={classes.root}>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    1
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Company's Industry Group Rank</Box>
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
                    <Box className={classes.underLineDiv}>Industry Group Name</Box>
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
                    3
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Broad Sectors</Box>
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
        </Box>
    )
}

export default IndustryForm ;