import * as React from 'react' ;

import { connect } from "react-redux";

// import { InsertScreenOptionData } from '../../../redux/actions/screenOption';

import {
    Box, 
    Checkbox, 
    FormControlLabel, 
    FormGroup,
    TextField,
    RadioGroup,
    Radio
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Sharing.styles';

const SharingForm = (props) => {
    const classes = useStyles() ;
    
    const {
        formData,
        setFormData,
        // InsertScreenOptionData
    } = props;

    React.useEffect(async () => {

        // await InsertScreenOptionData(formData);

        console.log(formData.sponsorship_rating) ;

    }, [formData])
    
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
                        value = {formData.shares_outstanding_min}
                        onChange={(e) => setFormData({...formData, shares_outstanding_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.shares_outstanding_max}
                        onChange={(e) => setFormData({...formData, shares_outstanding_max : e.target.value})}
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
                        value = {formData.shares_in_float_min}
                        onChange={(e) => setFormData({...formData, shares_in_float_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.shares_in_float_max}
                        onChange={(e) => setFormData({...formData, shares_in_float_max : e.target.value})}
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
                        value = {formData.market_capitialization_min}
                        onChange={(e) => setFormData({...formData, market_capitialization_min : e.target.value})}
                    />
                    <Box >to</Box>
                    $<TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.market_capitialization_max}
                        onChange={(e) => setFormData({...formData, market_capitialization_max : e.target.value})}
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
                        value = {formData.enterprise_value_min}
                        onChange={(e) => setFormData({...formData, enterprise_value_min : e.target.value})}
                    />
                    <Box >to</Box>
                    $<TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.enterprise_value_max}
                        onChange={(e) => setFormData({...formData, enterprise_value_max : e.target.value})}
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
                                                onChange={(e, id) => 
                                                    {
                                                        console.log(e.target.value) ;
                                                        if(e.target.checked) {
                                                            setFormData({
                                                                ...formData,
                                                                sponsorship_rating : formData.sponsorship_rating+','+char
                                                            })
                                                        } else {
                                                            setFormData({
                                                                ...formData,
                                                                sponsorship_rating : formData.sponsorship_rating.split(',').filter(value => 
                                                                    value !== char
                                                                ).join(',')
                                                            })
                                                        }
                                                    }
                                                }
                                                checked={formData.sponsorship_rating.split(',').includes(char)} 
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
                        value = {formData.funds_min}
                        onChange={(e) => setFormData({...formData, funds_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.funds_max}
                        onChange={(e) => setFormData({...formData, funds_max : e.target.value})}
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
                        value = {formData.funds_increase_min}
                        onChange={(e) => setFormData({...formData, funds_increase_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.funds_increase_max}
                        onChange={(e) => setFormData({...formData, funds_increase_max : e.target.value})}
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
                        value = {formData.number_of_fund_min}
                        onChange={(e) => setFormData({...formData, number_of_fund_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.number_of_fund_max}
                        onChange={(e) => setFormData({...formData, number_of_fund_max : e.target.value})}
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
                        value = {formData.management_min}
                        onChange={(e) => setFormData({...formData, management_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.management_max}
                        onChange={(e) => setFormData({...formData, management_max : e.target.value})}
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
                    <RadioGroup row value={ formData.institutional_ownership } >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, institutional_ownership : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, institutional_ownership : "no"})}
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


const mapStateToProps = state => ({
})
const mapDispatchToProps = {
    // InsertScreenOptionData
}

export default connect(mapStateToProps, mapDispatchToProps) (SharingForm) ;