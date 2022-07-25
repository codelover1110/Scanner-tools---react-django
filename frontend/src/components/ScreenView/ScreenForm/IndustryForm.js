import * as React from 'react' ;

import TwoSelectBox from './TwoSelectBoxs';

import {
    Box, 
    Radio, 
    FormControlLabel, 
    FormGroup,
    TextField,
    RadioGroup,
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Industry.styles';

const IndustryForm = (props) => {
    const classes = useStyles() ;

    const {
        formData,
        setFormData
    } = props;
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
                        value = {formData.company_ids_g_r_min}
                        onChange={(e) => setFormData({...formData, company_ids_g_r_min : e.target.value})}
                        
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.company_ids_g_r_max}
                        onChange={(e) => setFormData({...formData, company_ids_g_r_max : e.target.value})}
                        
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
                    <RadioGroup row defaultValue="no" >
                        <FormControlLabel
                            value="include"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'Include'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'Exclude'}</span>}
                        />
                    </RadioGroup>
                </Box>
                <Box >
                    <TwoSelectBox 
                        baseItems={mockData1}
                        setFormData={setFormData}
                        formData = {formData}
                        parent_value = "industry_g_n"
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
                    <RadioGroup row defaultValue="include" >
                        <FormControlLabel
                            value="include"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'Include'}</span>}
                        />
                        <FormControlLabel
                            value="exclude"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'Exclude'}</span>}
                        />
                    </RadioGroup>
                </Box>
                <Box >
                    <TwoSelectBox 
                        baseItems={mockData2}
                        setFormData={setFormData}
                        formData = {formData}
                        parent_value = "broad_sectors"
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default IndustryForm ;