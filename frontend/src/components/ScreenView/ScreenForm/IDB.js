import * as React from 'react' ;

import {
    Box, 
    Radio, 
    FormControlLabel, 
    FormGroup,
    TextField,
    RadioGroup
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/IDB.styles';

const IDB = ( props ) => {
    const classes = useStyles() ;
    const {
        formData,
        setFormData        
    } = props;

    return (
        <Box className={classes.root}>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    1
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>IBD 50</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup 
                        row 
                        defaultValue="no" 
                        value = { formData.ibd_50 } 
                        onChange = { 
                            (e) => { 
                                setFormData({...formData, ibd_50 : e.target.value}) ;
                            }
                        }
                    >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
                <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    2
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>IBD New America</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row defaultValue="no" 
                        value = { formData.ibd_new_america } 
                        onChange = { 
                            (e) => { 
                                setFormData({...formData, ibd_new_america : e.target.value}) ;
                            }
                        }
                    >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
                <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    3
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>IBD 85-85</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row defaultValue="no" 
                        value = { formData.ibd_85 } 
                        onChange = { 
                            (e) => { 
                                setFormData({...formData, ibd_85 : e.target.value}) ;
                            }
                        }
                    >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
                <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    4
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>IBD Big Cap 20</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row defaultValue="no" 
                         value = { formData.ibd_big_cap_20 } 
                         onChange = { 
                             (e) => { 
                                 setFormData({...formData, ibd_big_cap_20 : e.target.value}) ;
                             }
                         }
                    >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
                <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
            </Box>
        </Box>
    )
}

export default IDB ;