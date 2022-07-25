import * as React from 'react' ;

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

import { useStyles } from './StyledDiv/Price.styles';

const PriceVolumeForm = (props) => {
    const classes = useStyles() ;

    const {
        formData,
        setFormData,
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
                    <Box className={classes.underLineDiv}>Price</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    $<TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_min}
                        onChange={(e) => setFormData({...formData, price_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    $<TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_max}
                        onChange={(e) => setFormData({...formData, price_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    2
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price vs 52-Week High</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_vs_52_week_high_min}
                        onChange={(e) => setFormData({...formData, price_vs_52_week_high_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_vs_52_week_high_max}
                        onChange={(e) => setFormData({...formData, price_vs_52_week_high_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    3
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price % Change - Current Day</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_chg_cur_d_min}
                        onChange={(e) => setFormData({...formData, price_chg_cur_d_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_chg_cur_d_max}
                        onChange={(e) => setFormData({...formData, price_chg_cur_d_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    4
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price $ Change</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    $<TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_chg_min}
                        onChange={(e) => setFormData({...formData, price_chg_min : e.target.value})}
                    />
                    <Box >to</Box>
                    $<TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_chg_max}
                        onChange={(e) => setFormData({...formData, price_chg_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    5
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price % Change - Current Week</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_chg_cur_w_min}
                        onChange={(e) => setFormData({...formData, price_chg_cur_w_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_chg_cur_w_max}
                        onChange={(e) => setFormData({...formData, price_chg_cur_w_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    6
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price % Change - Last Month</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_chg_lst_m_min}
                        onChange={(e) => setFormData({...formData, price_chg_lst_m_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_chg_lst_m_max}
                        onChange={(e) => setFormData({...formData, price_chg_lst_m_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    7
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price % Change - Last 3 Months</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_chg_lst_3_m_min}
                        onChange={(e) => setFormData({...formData, price_chg_lst_3_m_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_chg_lst_3_m_max}
                        onChange={(e) => setFormData({...formData, price_chg_lst_3_m_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    8
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price % Change - Last 6 Months</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_chg_lst_6_m_min}
                        onChange={(e) => setFormData({...formData, price_chg_lst_6_m_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_chg_lst_6_m_max}
                        onChange={(e) => setFormData({...formData, price_chg_lst_6_m_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    9
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price % Change - Last 12 Months</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_chg_lst_12_m_min}
                        onChange={(e) => setFormData({...formData, price_chg_lst_12_m_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_chg_lst_12_m_max}
                        onChange={(e) => setFormData({...formData, price_chg_lst_12_m_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    10
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price % Change -= Year to Date</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_chg_y_to_d_min}
                        onChange={(e) => setFormData({...formData, price_chg_y_to_d_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_chg_y_to_d_max}
                        onChange={(e) => setFormData({...formData, price_chg_y_to_d_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    11
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price % Change - vs. S{`&`}P 500{`(Last 26 Weeks)`}</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_chg_sp_500_lst26w_min}
                        onChange={(e) => setFormData({...formData, price_chg_sp_500_lst26w_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_chg_sp_500_lst26w_max}
                        onChange={(e) => setFormData({...formData, price_chg_sp_500_lst26w_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    12
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Weekely Closing Range</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.weekly_closing_range_min}
                        onChange={(e) => setFormData({...formData, weekly_closing_range_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.weekly_closing_range_max}
                        onChange={(e) => setFormData({...formData, weekly_closing_range_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    13
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Daily Closing Range</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.daily_closing_range_min}
                        onChange={(e) => setFormData({...formData, daily_closing_range_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.daily_closing_range_max}
                        onChange={(e) => setFormData({...formData, daily_closing_range_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.bannderDiv}>
                Moving Average
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    14
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price vs 10 Day</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_vs_10_d_min}
                        onChange={(e) => setFormData({...formData, price_vs_10_d_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_vs_10_d_max}
                        onChange={(e) => setFormData({...formData, price_vs_10_d_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    15
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price vs 21 Day</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_vs_21_d_min}
                        onChange={(e) => setFormData({...formData, price_vs_21_d_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_vs_21_d_min}
                        onChange={(e) => setFormData({...formData, price_vs_21_d_min : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    16
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price vs 50 Day</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_vs_50_d_min}
                        onChange={(e) => setFormData({...formData, price_vs_50_d_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_vs_50_d_max}
                        onChange={(e) => setFormData({...formData, price_vs_50_d_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    17
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price vs 150 Day</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_vs_150_d_min}
                        onChange={(e) => setFormData({...formData, price_vs_150_d_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_vs_150_d_max}
                        onChange={(e) => setFormData({...formData, price_vs_150_d_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    18
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price vs 200 Day</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_vs_200_d_min}
                        onChange={(e) => setFormData({...formData, price_vs_200_d_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_vs_200_d_max}
                        onChange={(e) => setFormData({...formData, price_vs_200_d_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    19
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>10 Day {`>`} 21 Day {`>`} 50 Day</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={ formData.d_10_d_21_d_50 } >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, d_10_d_21_d_50 : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, d_10_d_21_d_50 : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    20
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>50 Day {`>`} 150 Day {`>`} 200 Day</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={ formData.d_50_d_150_d_200} >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, d_50_d_150_d_200 : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, d_50_d_150_d_200 : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>

            <Box className={classes.bannderDiv}>Volume</Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    21
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Volume - 50 Day Average {`(1000s)`}</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.vol_50_d_avg_min}
                        onChange={(e) => setFormData({...formData, vol_50_d_avg_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.vol_50_d_avg_max}
                        onChange={(e) => setFormData({...formData, vol_50_d_avg_max : e.target.value})}
                    />
                </Box>
            </Box>

           
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    22
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Volume - % Chg vs. 50 Day Average</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.vol_Chg_50_d_avg_min}
                        onChange={(e) => setFormData({...formData, vol_Chg_50_d_avg_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.vol_Chg_50_d_avg_max}
                        onChange={(e) => setFormData({...formData, vol_Chg_50_d_avg_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    23
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Weekly Volume - % Chg vs. 10 Week Average</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.w_vol_chg_10_w_avg_min}
                        onChange={(e) => setFormData({...formData, w_vol_chg_10_w_avg_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.w_vol_chg_10_w_avg_max}
                        onChange={(e) => setFormData({...formData, w_vol_chg_10_w_avg_max : e.target.value})}
                    />%
                </Box>
            </Box>


            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    24
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Current day's Volume greater than previouse 5 da...</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={ formData.cur_d_vol_grt_pre_5_d } >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, cur_d_vol_grt_pre_5_d : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, cur_d_vol_grt_pre_5_d : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    25
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Current day's Volume greater than previouse 10 da...</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={formData.cur_d_vol_grt_pre_10_d} >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, cur_d_vol_grt_pre_10_d : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, cur_d_vol_grt_pre_10_d : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    26
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Current day's Volume greater than previouse 20 da...</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={formData.cur_d_vol_grt_pre_20_d } >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, cur_d_vol_grt_pre_20_d : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, cur_d_vol_grt_pre_20_d : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    27
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Volume - Intraday {`(1000s)`}</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.vol_int_min}
                        onChange={(e) => setFormData({...formData, vol_int_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.vol_int_max}
                        onChange={(e) => setFormData({...formData, vol_int_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    28
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Up/Down Volume Ratio</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.up_down_vol_rat_min}
                        onChange={(e) => setFormData({...formData, up_down_vol_rat_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.up_down_vol_rat_max}
                        onChange={(e) => setFormData({...formData, up_down_vol_rat_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    29
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Volume - 50 Day Average Dollar {`1000s`}</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.vol_50_d_avg_dol_1000s_min}
                        onChange={(e) => setFormData({...formData, vol_50_d_avg_dol_1000s_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.vol_50_d_avg_dol_1000s_max}
                        onChange={(e) => setFormData({...formData, vol_50_d_avg_dol_1000s_max : e.target.value})}
                    />
                </Box>
            </Box>

            <Box className={classes.bannderDiv}>
                Relative Strength
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    30
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>RS Line New High</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={ formData.rs_line_new_high } >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, rs_line_new_high : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, rs_line_new_high : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    31
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>RS Line New Low</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={ formData.rs_line_new_low } >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, rs_line_new_low : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, rs_line_new_low : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    32
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>RS Rating - 3 Month</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.rs_rating_3_m_min}
                        onChange={(e) => setFormData({...formData, rs_rating_3_m_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.rs_rating_3_m_max}
                        onChange={(e) => setFormData({...formData, rs_rating_3_m_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    33
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>RS Rating - 6 Month</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.rs_rating_6_m_min}
                        onChange={(e) => setFormData({...formData, rs_rating_6_m_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.rs_rating_6_m_max}
                        onChange={(e) => setFormData({...formData, rs_rating_6_m_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.bannderDiv}>
                Other
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    34
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Timeliness Rating</Box>
                </Box>
                <Box className={classes.checkboxDiv}>
                    {
                        charItems.map((char, index) => {
                            return (
                                <FormGroup row key={index}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={(e, id) => 
                                                    {
                                                        console.log(e.target.value) ;
                                                        if(e.target.checked) {
                                                            setFormData({
                                                                ...formData,
                                                                timeliness_rating : formData.timeliness_rating+','+char
                                                            })
                                                        } else {
                                                            setFormData({
                                                                ...formData,
                                                                timeliness_rating : formData.timeliness_rating.split(',').filter(value => 
                                                                    value !== char
                                                                ).join(',')
                                                            })
                                                        }
                                                    }
                                                }
                                                checked={formData.timeliness_rating.split(',').includes(char)} 
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
                    35
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Alpha</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.alpha_min}
                        onChange={(e) => setFormData({...formData, alpha_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.alpha_max}
                        onChange={(e) => setFormData({...formData, alpha_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    36
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Beta</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.beta_min}
                        onChange={(e) => setFormData({...formData, beta_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.beta_max}
                        onChange={(e) => setFormData({...formData, beta_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    37
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Average True Range {`(30 Days)`}</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.avg_true_range_30_d_min}
                        onChange={(e) => setFormData({...formData, avg_true_range_30_d_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.avg_true_range_30_d_max}
                        onChange={(e) => setFormData({...formData, avg_true_range_30_d_max : e.target.value})}
                    />%
                </Box>
            </Box>
        </Box>
    )
}

export default PriceVolumeForm ;