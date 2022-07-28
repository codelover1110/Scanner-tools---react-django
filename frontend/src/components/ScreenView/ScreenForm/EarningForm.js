import * as React from 'react' ;

import { connect } from "react-redux";

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

import { useStyles } from './StyledDiv/Earning.styles';

const EarningForm = (props) => {
    const classes = useStyles() ;

    const {
        formData,
        setFormData,
    } = props;

    return (
        <Box className={classes.root}>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    1
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Earnings Last Reported Date</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <Box>
                        <TextField
                            type={'date'}
                            size={'small'}
                            value = { formData.erns_lst_rpt_date_min }
                            // defaultValue={ new Date().toISOString().substring(0, 10) }
                            onChange={(e) => setFormData({...formData, erns_lst_rpt_date_min : e.target.value})}
                        />
                        <Box sx={{fontSize : '13px', textAlign : 'right'}}>Date</Box>
                    </Box>
                    <Box >to</Box>
                    <Box>
                        <TextField
                            type={'date'}
                            size={'small'}
                            value = { formData.erns_lst_rpt_date_max}
                            // defaultValue={ new Date().toISOString().substring(0, 10)}
                            onChange={(e) => setFormData({...formData, erns_lst_rpt_date_max : e.target.value})}
                        />
                        <Box sx={{fontSize : '13px', textAlign : 'right'}}>Date</Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    2
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Earning Due Date</Box>
                </Box>
                <Box className={classes.selectDateDiv}>
                    <Box className={classes.selectDiv}>Today</Box>
                    <Box className={classes.selectDiv}>Tomorror</Box>
                    <Box className={classes.selectDiv}>Next 5 Days</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <Box>
                        <TextField
                            type={'date'}
                            size={'small'}
                            // defaultValue={new Date().toISOString().substring(0, 10)}
                            value = { formData.erns_dued_min}
                            onChange={(e) => setFormData({...formData, erns_dued_min : e.target.value})}
                        />
                        <Box sx={{fontSize : '13px', textAlign : 'right'}}>Date</Box>
                    </Box>
                    <Box >to</Box>
                    <Box>
                        <TextField
                            type={'date'}
                            size={'small'}
                            // defaultValue={new Date().toISOString().substring(0, 10) }
                            value = { formData.erns_dued_max}
                            onChange={(e) => setFormData({...formData, erns_dued_max : e.target.value})}
                        />
                        <Box sx={{fontSize : '13px', textAlign : 'right'}}>Date</Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.bannderDiv}>
                Quarterly
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    3
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - Last Reported Quarter</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'Include stocks with negative comparison quarter'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_chg_lst_rpt_q_min}
                        onChange={(e) => setFormData({...formData, eps_chg_lst_rpt_q_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        value = { formData.eps_chg_lst_rpt_q_max}
                        size={'small'}
                        onChange={(e) => setFormData({...formData, eps_chg_lst_rpt_q_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    4
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - 1 Quarter Ago</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'Include stocks with negative comparison quarter'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        value = { formData.eps_chg_q_1_min}
                        size={'small'}
                        onChange={(e) => setFormData({...formData, eps_chg_q_1_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        value = { formData.eps_chg_q_1_max}
                        size={'small'}
                        onChange={(e) =>setFormData({...formData, eps_chg_q_1_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    5
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Earnings Acceleration - Last 3 Qtrs</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={ formData.erns_acce_lst_q_3} >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, erns_acce_lst_q_3 : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, erns_acce_lst_q_3 : "no"})}
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
                    <Box className={classes.underLineDiv}>Earnings Stability</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        value = { formData.erns_stability_min}
                        size={'small'}
                        onChange={(e) =>setFormData({...formData, erns_stability_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        value = { formData.erns_stability_max}
                        size={'small'}
                        onChange={(e) =>setFormData({...formData, erns_stability_max : e.target.value})}
                    />
                </Box>
            </Box>
            
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    7
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - 2 Quarter Ago</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                />
                            }
                            label={<span>{'Include stocks with negative comparison quarter'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        value = { formData.eps_chg_q_2_min}
                        size={'small'}
                        onChange={(e) =>setFormData({...formData, eps_chg_q_2_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_chg_q_2_max}
                        onChange={(e) =>setFormData({...formData, eps_chg_q_2_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    8
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - 3 Quarter Ago</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <FormGroup row >
                        <FormControlLabel
                            control={
                                <Checkbox
                                
                                />
                            }
                            label={<span>{'Include stocks with negative comparison quarter'}</span>}
                        />
                    </FormGroup>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_chg_q_3_min}
                        onChange={(e) =>setFormData({...formData, eps_chg_q_3_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_chg_q_3_max}
                        onChange={(e) =>setFormData({...formData, eps_chg_q_3_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    9
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - Last Reported Quarter {'>'} Last 3 Quarters</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={ formData.eps_chg_lst_rpt_q_eps_chg_lst_q_3_is_bigger} >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={(e) => setFormData({...formData, eps_chg_lst_rpt_q_eps_chg_lst_q_3_is_bigger : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={(e) => setFormData({...formData, eps_chg_lst_rpt_q_eps_chg_lst_q_3_is_bigger : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    10
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average EPS % Change - Last 2 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.avg_eps_chg_lst_q_2_min}
                        onChange={(e) =>setFormData({...formData, avg_eps_chg_lst_q_2_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.avg_eps_chg_lst_q_2_max}
                        onChange={(e) =>setFormData({...formData, avg_eps_chg_lst_q_2_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    11
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average EPS % Change - Last 3 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.avg_eps_chg_lst_q_3_min}
                        onChange={(e) =>setFormData({...formData, avg_eps_chg_lst_q_3_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.avg_eps_chg_lst_q_3_max}
                        onChange={(e) =>setFormData({...formData, avg_eps_chg_lst_q_3_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    12
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average EPS % Change - Last 4 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.avg_eps_chg_lst_q_4_min}
                        onChange={(e) =>setFormData({...formData, avg_eps_chg_lst_q_4_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.avg_eps_chg_lst_q_4_max}
                        onChange={(e) =>setFormData({...formData, avg_eps_chg_lst_q_4_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    13
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average EPS % Change - Last 5 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.avg_eps_chg_lst_q_5_min}
                        onChange={(e) =>setFormData({...formData, avg_eps_chg_lst_q_5_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.avg_eps_chg_lst_q_5_max}
                        onChange={(e) =>setFormData({...formData, avg_eps_chg_lst_q_5_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    14
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average EPS % Change - Last 6 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.avg_eps_chg_lst_q_6_min}
                        onChange={(e) =>setFormData({...formData, avg_eps_chg_lst_q_6_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.avg_eps_chg_lst_q_6_max}
                        onChange={(e) =>setFormData({...formData, avg_eps_chg_lst_q_6_min : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    15
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - Trailing 4 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_trailing_q_4_min}
                        onChange={(e) =>setFormData({...formData, eps_trailing_q_4_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_trailing_q_4_max}
                        onChange={(e) =>setFormData({...formData, eps_trailing_q_4_max : e.target.value})}
                    />
                </Box>
            </Box>

            
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    16
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - Trailing 4 Qtrs {`>`} EPS, 4 Years Ago</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={ formData.eps_trailing_q_4_is_bigger} >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, eps_trailing_q_4_is_bigger : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, eps_trailing_q_4_is_bigger : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    17
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - Trailing 4 Qtrs {`>=`} Last Year</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row  value={ formData.eps_trailing_q_4_lst_y_is_bigger}>
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, eps_trailing_q_4_lst_y_is_bigger : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, eps_trailing_q_4_lst_y_is_bigger : "no"})}
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
                    18
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - Last Reported Year vs. 1 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_chg_lst_rpty_vs_1y_ago_min}
                        onChange={(e) =>setFormData({...formData, eps_chg_lst_rpty_vs_1y_ago_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_chg_lst_rpty_vs_1y_ago_max}
                        onChange={(e) =>setFormData({...formData, eps_chg_lst_rpty_vs_1y_ago_max : e.target.value})}
                    />
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    19
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - Last Reported Year vs. 2 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_chg_lst_rpty_vs_2y_ago_min}
                        onChange={(e) =>setFormData({...formData, eps_chg_lst_rpty_vs_2y_ago_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_chg_lst_rpty_vs_2y_ago_max}
                        onChange={(e) =>setFormData({...formData, eps_chg_lst_rpty_vs_2y_ago_max : e.target.value})}
                    />
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    20
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Change - Last Year</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_chg_lst_y_min}
                        onChange={(e) =>setFormData({...formData, eps_chg_lst_y_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_chg_lst_y_max}
                        onChange={(e) =>setFormData({...formData, eps_chg_lst_y_max : e.target.value})}
                    />
                </Box>
            </Box>

           
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    21
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Growth Rate - Last 3 Years</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_grow_rate_lst_3y_min}
                        onChange={(e) =>setFormData({...formData, eps_grow_rate_lst_3y_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_grow_rate_lst_3y_max}
                        onChange={(e) =>setFormData({...formData, eps_grow_rate_lst_3y_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    22
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Growth Rate - Last 5 Years</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_grow_rate_lst_5y_min}
                        onChange={(e) =>setFormData({...formData, eps_grow_rate_lst_5y_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_grow_rate_lst_5y_max}
                        onChange={(e) =>setFormData({...formData, eps_grow_rate_lst_5y_max : e.target.value})}
                    />%
                </Box>
            </Box>


            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    23
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Growth Rate - Last 3 Years {`>=`} 5 Years</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={ formData.eps_grow_rate_lst_3y_5y_is_bigger}>
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, eps_grow_rate_lst_3y_5y_is_bigger : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, eps_grow_rate_lst_3y_5y_is_bigger : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    24
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Growth Rate - Last 5 Years Percential Rank</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_grow_rate_lst_5y_percent_rnk_min}
                        onChange={(e) =>setFormData({...formData, eps_grow_rate_lst_5y_percent_rnk_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_grow_rate_lst_5y_percent_rnk_max}
                        onChange={(e) =>setFormData({...formData, eps_grow_rate_lst_5y_percent_rnk_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    25
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS % Growth Rate - Projected Sustainable Growth</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_grow_rate_projected_sus_growth_min}
                        onChange={(e) =>setFormData({...formData, eps_grow_rate_projected_sus_growth_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_grow_rate_projected_sus_growth_max}
                        onChange={(e) =>setFormData({...formData, eps_grow_rate_projected_sus_growth_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    26
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - Last Reported Year</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_lst_rpty_min}
                        onChange={(e) =>setFormData({...formData, eps_lst_rpty_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_lst_rpty_max}
                        onChange={(e) =>setFormData({...formData, eps_lst_rpty_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    27
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 1 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_1y_ago_min}
                        onChange={(e) =>setFormData({...formData, eps_1y_ago_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_1y_ago_max}
                        onChange={(e) =>setFormData({...formData, eps_1y_ago_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    28
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 2 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_2y_ago_min}
                        onChange={(e) =>setFormData({...formData, eps_2y_ago_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_2y_ago_max}
                        onChange={(e) =>setFormData({...formData, eps_2y_ago_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    29
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 3 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_3y_ago_min}
                        onChange={(e) =>setFormData({...formData, eps_3y_ago_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_3y_ago_max}
                        onChange={(e) =>setFormData({...formData, eps_3y_ago_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    30
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 4 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_4y_ago_min}
                        onChange={(e) =>setFormData({...formData, eps_4y_ago_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_4y_ago_max}
                        onChange={(e) =>setFormData({...formData, eps_4y_ago_min : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    31
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 5 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_5y_ago_min}
                        onChange={(e) => setFormData({...formData, eps_5y_ago_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_5y_ago_max}
                        onChange={(e) => setFormData({...formData, eps_5y_ago_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    32
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - 6 Years Ago</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_6y_ago_min}
                        onChange={(e) => setFormData({...formData, eps_6y_ago_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_6y_ago_max}
                        onChange={(e) => setFormData({...formData, eps_6y_ago_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    33
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS - Last Reported Year {`>`} 4 Years Ago</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={ formData.eps_lst_rpty_4y_is_bigger}>
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, eps_lst_rpty_4y_is_bigger : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, eps_lst_rpty_4y_is_bigger : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>

            <Box className={classes.bannderDiv}>
                Estimates
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    34
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS Estimate - Earnings Surprise</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_est_erns_surp_min}
                        onChange={(e) => setFormData({...formData, eps_est_erns_surp_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_est_erns_surp_max}
                        onChange={(e) => setFormData({...formData, eps_est_erns_surp_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    35
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS Estimate % Change - Next Quarter</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_est_chg_next_q_min}
                        onChange={(e) => setFormData({...formData, eps_est_chg_next_q_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_est_chg_next_q_max}
                        onChange={(e) => setFormData({...formData, eps_est_chg_next_q_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    36
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS Estimate % Change - CUrrent Year</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_est_chg_cur_y_min}
                        onChange={(e) => setFormData({...formData, eps_est_chg_cur_y_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        value = { formData.eps_est_chg_cur_y_max}
                        size={'small'}
                        onChange={(e) => setFormData({...formData, eps_est_chg_cur_y_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    37
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>EPS Estimate % Change - 1 Year Forward vs. C...</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = { formData.eps_est_chg_1y_forward_vs_min}
                        onChange={(e) => setFormData({...formData, eps_est_chg_1y_forward_vs_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = { formData.eps_est_chg_1y_forward_vs_max}
                        onChange={(e) => setFormData({...formData, eps_est_chg_1y_forward_vs_max : e.target.value})}
                    />%
                </Box>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps) (EarningForm) ;