import * as React from 'react' ;

import { connect } from "react-redux";
import { InsertScreenOptionData } from '../../../redux/actions/screenOption';

import {
    Box, 
    Checkbox, 
    FormControlLabel, 
    FormGroup,
    TextField,
    RadioGroup,
    Radio,
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Sales.styles';

const SalesForm = (props) => {
    const classes = useStyles() ;

    const {
        formData,
        setFormData,
        InsertScreenOptionData
    } = props;

    React.useEffect(async () => {

        await InsertScreenOptionData(formData);

    }, [formData])
    
    return (
        <Box className={classes.root}>
            <Box className={classes.bannderDiv}>
                Quarterly
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    1
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Sales % Change - Last Reported Quarter</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.sales_chg_lst_rpt_q_min}
                        onChange={(e) => setFormData({...formData, sales_chg_lst_rpt_q_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.sales_chg_lst_rpt_q_max}
                        onChange={(e) => setFormData({...formData, sales_chg_lst_rpt_q_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    2
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average Sales % Change - Last 2 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.avg_sales_chg_lst_2_q_min}
                        onChange={(e) => setFormData({...formData, avg_sales_chg_lst_2_q_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.avg_sales_chg_lst_2_q_max}                        
                        onChange={(e) => setFormData({...formData, avg_sales_chg_lst_2_q_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    3
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average Sales % Change - Last 3 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.avg_sales_chg_lst_3_q_min}
                        
                        onChange={(e) => setFormData({...formData, avg_sales_chg_lst_3_q_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.avg_sales_chg_lst_3_q_max}
                        onChange={(e) => setFormData({...formData, avg_sales_chg_lst_3_q_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    4
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average Sales % Change - Last 4 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        value = {formData.avg_sales_chg_lst_4_q_min}
                        size={'small'}
                        onChange={(e) => setFormData({...formData, avg_sales_chg_lst_4_q_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        value = {formData.avg_sales_chg_lst_4_q_max}
                        size={'small'}
                        onChange={(e) => setFormData({...formData, avg_sales_chg_lst_4_q_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    5
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average Sales % Change - Last 5 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        value = {formData.avg_sales_chg_lst_5_q_min}
                        placeholder={'Min'}
                        onChange={(e) => setFormData({...formData, avg_sales_chg_lst_5_q_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        value = {formData.avg_sales_chg_lst_5_q_max}
                        size={'small'}
                        onChange={(e) => setFormData({...formData, avg_sales_chg_lst_5_q_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    6
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average Sales % Change - Last 6 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        value = {formData.avg_sales_chg_lst_6_q_min}
                        size={'small'}
                        onChange={(e) => setFormData({...formData, avg_sales_chg_lst_6_q_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        value = {formData.avg_sales_chg_lst_6_q_max}
                        size={'small'}
                        onChange={(e) => setFormData({...formData, avg_sales_chg_lst_6_q_max : e.target.value})}
                    />
                </Box>
            </Box>
            
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    7
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Sales Acceleration - Last 3 Qtrs</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value = { formData.sales_acc_lst_2_q } >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, sales_acc_lst_2_q : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, sales_acc_lst_2_q : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    8
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Sales Acceleration - Last 3 Qtrs</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={ formData.sales_acc_lst_3_q} >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, sales_acc_lst_3_q : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, sales_acc_lst_3_q : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.bannderDiv}>
                Annual
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    9
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Sales % Change - Last Reported Year</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.sales_chg_lst_rpt_y_min}
                        onChange={(e) => setFormData({...formData, sales_chg_lst_rpt_y_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.sales_chg_lst_rpt_y_max}
                        onChange={(e) => setFormData({...formData, sales_chg_lst_rpt_y_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    10
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Sales % Growth Rate - Last 3 Years</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.sales_growth_rate_lst_3_y_min}
                        onChange={(e) => setFormData({...formData, sales_growth_rate_lst_3_y_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.sales_growth_rate_lst_3_y_max}
                        onChange={(e) => setFormData({...formData, sales_growth_rate_lst_3_y_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    11
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Sales % Growth Rate - Last 5 Years</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.sales_growth_rate_lst_5_y_min}
                        onChange={(e) => setFormData({...formData, sales_growth_rate_lst_5_y_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.sales_growth_rate_lst_5_y_max}
                        onChange={(e) => setFormData({...formData, sales_growth_rate_lst_5_y_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    12
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Total Annual Sales {`(mil)`} - Last Reported Year </Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.tot_ann_sales_lst_rpt_y_min}
                        onChange={(e) => setFormData({...formData, tot_ann_sales_lst_rpt_y_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.tot_ann_sales_lst_rpt_y_max}
                        onChange={(e) => setFormData({...formData, tot_ann_sales_lst_rpt_y_max : e.target.value})}
                    />
                </Box>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = {
    InsertScreenOptionData
}

export default connect(mapStateToProps, mapDispatchToProps) (SalesForm) ;