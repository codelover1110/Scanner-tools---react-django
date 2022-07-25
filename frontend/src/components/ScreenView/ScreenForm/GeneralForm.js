import * as React from 'react' ;

import {
    Box, 
    Checkbox, 
    Radio,
    FormControlLabel, 
    TextField,
    RadioGroup,
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import TwoSelectBox from './TwoSelectBoxs';

import { useStyles } from './StyledDiv/General.styles';

const GeneralForm = ( props ) => {
    const classes = useStyles() ;

    const {
        formData,
        setFormData        
    } = props;

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
                        baseItems={mockData1}
                        formData = {formData}
                        parent_value = "exchange"
                        setFormData = {setFormData}
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
                    <RadioGroup 
                        row
                        value = { formData.adr }
                    >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, adr : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, adr : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    3
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>ETF/Closed-End Fund</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value = { formData.etf_closed_end_fund }>
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, etf_closed_end_fund : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, etf_closed_end_fund : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    4
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>ETF</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row  value = { formData.etf }
                    >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, etf : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, etf : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    5
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Options</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup 
                        row 
                        value = { formData.options }
                    >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, options : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, options : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
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
                            defaultValue={new Date().toISOString().substring(0, 10)}
                            value = { formData.ipo_date_min }
                            onChange={(e) => setFormData({...formData, ipo_date_min : e.target.value})}
                        />
                        <Box sx={{fontSize : '13px', textAlign : 'right'}}>Date</Box>
                    </Box>
                    <Box >to</Box>
                    <Box>
                        <TextField
                            type={'date'}
                            size={'small'}
                            defaultValue={new Date().toISOString().substring(0, 10)}
                            value = { formData.ipo_date_max }
                            onChange={(e) => setFormData({...formData, ipo_date_max : e.target.value})}
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
                            defaultValue={new Date().toISOString().substring(0, 10)}
                            value = { formData.incorporation_date_min }
                            onChange={(e) => setFormData({...formData, incorporation_date_min : e.target.value})}

                        />
                        <Box sx={{fontSize : '13px', textAlign : 'right'}}>Date</Box>
                    </Box>
                    <Box >to</Box>
                    <Box>
                        <TextField
                            type={'date'}
                            size={'small'}
                            defaultValue={new Date().toISOString().substring(0, 10)}
                            value = { formData.incorporation_date_max }
                            onChange={(e) => setFormData({...formData, incorporation_date_max : e.target.value})}
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
                        formData = {formData}
                        parent_value = "headquarters_city"
                        setFormData = {setFormData}
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
                    <RadioGroup 
                    row defaultValue="no" 
                    value = { formData.new_ceo_in_lst_12_m }
                    >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, new_ceo_in_lst_12_m : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, new_ceo_in_lst_12_m : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    12
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>IBD Article Last 2 Years</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup 
                    row 
                    defaultValue="no" 
                    value = { formData.ibd_article_lst_2_y }
                    >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, ibd_article_lst_2_y : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, ibd_article_lst_2_y : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
        </Box>
    )
}

export default GeneralForm ;