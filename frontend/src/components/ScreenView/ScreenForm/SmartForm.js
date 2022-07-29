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

const SmartForm = (props) => {
    const classes = useStyles() ;

    const {
        formData,
        setFormData
    } = props;

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
                        value = {formData.eps_rating_min}
                        onChange={(e) => setFormData({...formData, eps_rating_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        value = { formData.eps_rating_max }
                        size={'small'}
                        onChange={(e) =>setFormData({...formData, eps_rating_max : e.target.value})}
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
                        value = { formData.rs_rating_min }
                        onChange={(e) =>setFormData({...formData, rs_rating_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        value = { formData.rs_rating_max }
                        size={'small'}
                        onChange={(e) =>setFormData({...formData, rs_rating_max : e.target.value})}
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
                                                onChange={(e, id) => 
                                                    {
                                                        console.log(e.target.value) ;
                                                        if(e.target.checked) {
                                                            setFormData({
                                                                ...formData,
                                                                smr_rating : formData.smr_rating+','+char
                                                            })
                                                        } else {
                                                            setFormData({
                                                                ...formData,
                                                                smr_rating : formData.smr_rating.split(',').filter(value => 
                                                                    value !== char
                                                                ).join(',')
                                                            })
                                                        }
                                                    }
                                                }
                                                // value={formData.smr_rating.split(',').includes(char)} 
                                                checked={formData.smr_rating.split(',').includes(char)}
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
                                                onChange={(e, id) => 
                                                    {
                                                        console.log(e.target.value) ;
                                                        if(e.target.checked) {
                                                            setFormData({
                                                                ...formData,
                                                                ad_rating : formData.ad_rating+','+char
                                                            })
                                                        } else {
                                                            setFormData({
                                                                ...formData,
                                                                ad_rating : formData.ad_rating.split(',').filter(value => 
                                                                    value !== char
                                                                ).join(',')
                                                            })
                                                        }
                                                    }
                                                }
                                                checked={formData.ad_rating.split(',').includes(char)}
                                            
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
                        value = { formData.comp_rating_min }
                        size={'small'}
                        onChange={(e) =>setFormData({...formData, comp_rating_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        value = { formData.comp_rating_max }
                        size={'small'}
                        onChange={(e) =>setFormData({...formData, comp_rating_max : e.target.value})}
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
                                                onChange={(e, id) => 
                                                    {
                                                        console.log(e.target.value) ;
                                                        if(e.target.checked) {
                                                            setFormData({
                                                                ...formData,
                                                                ind_group_rs_rating : formData.ind_group_rs_rating+','+char
                                                            })
                                                        } else {
                                                            setFormData({
                                                                ...formData,
                                                                ind_group_rs_rating : formData.ind_group_rs_rating.split(',').filter(value => 
                                                                    value !== char
                                                                ).join(',')
                                                            })
                                                        }
                                                    }
                                                }
                                                checked={formData.ind_group_rs_rating.split(',').includes(char)}                         
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