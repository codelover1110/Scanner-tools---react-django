import * as React from 'react' ;

import {
    Box, 
    FormControlLabel, 
    TextField,
    RadioGroup,
    Radio
} from '@mui/material' ;

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useStyles } from './StyledDiv/Margins.styles';

const MarginsForm = (props) => {
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
            <Box className={classes.bannderDiv}>
                Margins
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    1
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Davidend Yield</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    $<TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.davidend_yield_min}
                        onChange={(e) => setFormData({...formData, davidend_yield_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    $<TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.davidend_yield_max}
                        onChange={(e) => setFormData({...formData, davidend_yield_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    2
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>After Tax Margin Acceleration - Last 3 Qtrs</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value = { formData.after_tax_mrgn_acce_lst_3_q }>
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, after_tax_mrgn_acce_lst_3_q : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, after_tax_mrgn_acce_lst_3_q : "no"})}
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
                    <Box className={classes.underLineDiv}>Pre Tax Margin - Last Reported Year</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.pre_tax_mrgn_lst_rpty_min}
                        onChange={(e) => setFormData({...formData, pre_tax_mrgn_lst_rpty_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.pre_tax_mrgn_lst_rpty_max}
                        onChange={(e) => setFormData({...formData, pre_tax_mrgn_lst_rpty_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    4
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>After Tax Margin - Last Reported Quarter</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    $<TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_lst_rpt_q_min}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_lst_rpt_q_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    $<TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_lst_rpt_q_max}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_lst_rpt_q_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    5
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>After Tax Margin - Average Last 2 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_avg_lst_q_2_min}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_avg_lst_q_2_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_avg_lst_q_2_max}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_avg_lst_q_2_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    6
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>After Tax Margin - Average Last 3 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_avg_lst_q_3_min}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_avg_lst_q_3_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_avg_lst_q_3_max}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_avg_lst_q_3_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    7
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>After Tax Margin - Average Last 4 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_avg_lst_q_4_min}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_avg_lst_q_4_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_avg_lst_q_4_max}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_avg_lst_q_4_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    8
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>After Tax Margin - Average Last 5 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_avg_lst_q_5_min}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_avg_lst_q_5_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_avg_lst_q_5_max}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_avg_lst_q_5_max : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    9
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>After Tax Margin - Average Last 6 Qtrs</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_avg_lst_q_6_min}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_avg_lst_q_6_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.after_tax_mrgn_avg_lst_q_6_max}
                        onChange={(e) => setFormData({...formData, after_tax_mrgn_avg_lst_q_6_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    10
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Operating System {`>=`} Industry Median</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={formData.opr_sys_ids_median_is_bigger} >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, opr_sys_ids_median_is_bigger : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, opr_sys_ids_median_is_bigger : "no"})}
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
                    11
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Profit Margin {`>=`} Industry Median</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={formData.profile_mrgn_ids_median_is_bigger} >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, profile_mrgn_ids_median_is_bigger : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, profile_mrgn_ids_median_is_bigger : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
                <Box sx={{textAlign : 'right'}}><u>Reset</u></Box>
            </Box>

            <Box className={classes.bannderDiv}>P/E Ratio</Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    12
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>P/E - Current</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.p_e_current_min}
                        onChange={(e) => setFormData({...formData, p_e_current_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.p_e_current_max}
                        onChange={(e) => setFormData({...formData, p_e_current_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    13
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>P/E - Estimated</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.p_e_est_min}
                        onChange={(e) => setFormData({...formData, p_e_est_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.p_e_est_max}
                        onChange={(e) => setFormData({...formData, p_e_est_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    14
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>P/E - vs. S{`&`}P 500 P/E</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.p_e_vs_sp_500_min}
                        onChange={(e) => setFormData({...formData, p_e_vs_sp_500_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.p_e_vs_sp_500_max}
                        onChange={(e) => setFormData({...formData, p_e_vs_sp_500_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    15
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>P/E - Percentile Rank</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.p_e_percent_rnk_min}
                        onChange={(e) => setFormData({...formData, p_e_percent_rnk_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.p_e_percent_rnk_max}
                        onChange={(e) => setFormData({...formData, p_e_percent_rnk_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    16
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>P/E - Percentile Rank in Group</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.p_e_percent_rnk_in_grp_min}
                        onChange={(e) => setFormData({...formData, p_e_percent_rnk_in_grp_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.p_e_percent_rnk_in_grp_max}
                        onChange={(e) => setFormData({...formData, p_e_percent_rnk_in_grp_max : e.target.value})}
                    />
                </Box>
            </Box>

            <Box className={classes.bannderDiv}>Margins</Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    17
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>P/E {`<`} Average 5 Year P/E</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup row value={formData.p_e_avg_5y_is_bigger} >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, p_e_avg_5y_is_bigger : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, p_e_avg_5y_is_bigger : "no"})}
                                />
                            }
                            label={<span>{'No'}</span>}
                        />
                    </RadioGroup>
                </Box>
            </Box>

            <Box className={classes.bannderDiv}>P/E Ratio</Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    18
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>PEG</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.peg_min}
                        onChange={(e) => setFormData({...formData, peg_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.peg_max}
                        onChange={(e) => setFormData({...formData, peg_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    19
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>PEG {`(Dividend Adjusted)`}</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.peg_divid_adj_min}
                        onChange={(e) => setFormData({...formData, peg_divid_adj_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.peg_divid_adj_max}
                        onChange={(e) => setFormData({...formData, peg_divid_adj_max : e.target.value})}
                    />
                </Box>
            </Box>
            
            <Box className={classes.bannderDiv}>Ratios</Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    20
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>CF vs EPS % Difference - Last Reported Quarter</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.cf_v_eps_diff_lst_rpt_q_min}
                        onChange={(e) => setFormData({...formData, cf_v_eps_diff_lst_rpt_q_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.cf_v_eps_diff_lst_rpt_q_max}
                        onChange={(e) => setFormData({...formData, cf_v_eps_diff_lst_rpt_q_max : e.target.value})}
                    />
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    21
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>CF vs EPS % Difference - Last Reported Year</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.cf_v_eps_diff_lst_rpt_y_min}
                        onChange={(e) => setFormData({...formData, cf_v_eps_diff_lst_rpt_y_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.cf_v_eps_diff_lst_rpt_y_max}
                        onChange={(e) => setFormData({...formData, cf_v_eps_diff_lst_rpt_y_max : e.target.value})}
                    />
                </Box>
            </Box>

           
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    23
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>ROE - 5 Year Average</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.roe_5y_avg_min}
                        onChange={(e) => setFormData({...formData, roe_5y_avg_min : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.roe_5y_avg_max}
                        onChange={(e) => setFormData({...formData, roe_5y_avg_max : e.target.value})}
                    />%
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    24
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Debit % - Last Reported Year</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.roe_5y_avg_max}
                        onChange={(e) => setFormData({...formData, roe_5y_avg_max : e.target.value})}
                    />%
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.debit_lst_rpt_y_min}
                        onChange={(e) => setFormData({...formData, debit_lst_rpt_y_min : e.target.value})}
                    />%
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    25 
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Current Ratio</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.current_ratio_min}
                        onChange={(e) => setFormData({...formData, current_ratio_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.current_ratio_max}
                        onChange={(e) => setFormData({...formData, current_ratio_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    26
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price to Sales</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_to_sales_min}
                        onChange={(e) => setFormData({...formData, price_to_sales_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_to_sales_max}
                        onChange={(e) => setFormData({...formData, price_to_sales_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    27
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price to Book Value</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_to_book_value_min}
                        onChange={(e) => setFormData({...formData, price_to_book_value_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_to_book_value_max}
                        onChange={(e) => setFormData({...formData, price_to_book_value_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    28
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Price to Cash Flow</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.price_to_cash_flow_min}
                        onChange={(e) => setFormData({...formData, price_to_cash_flow_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.price_to_cash_flow_max}
                        onChange={(e) => setFormData({...formData, price_to_cash_flow_max : e.target.value})}
                    />
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    29
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Enterprice Value to Free Cash Flow</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.epr_val_free_cash_flow_min}
                        onChange={(e) => setFormData({...formData, epr_val_free_cash_flow_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.epr_val_free_cash_flow_max}
                        onChange={(e) => setFormData({...formData, epr_val_free_cash_flow_max : e.target.value})}
                    />
                </Box>
            </Box>

            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    30
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Long Term Debit to Working Capital</Box>
                </Box>
                <Box className={classes.rangeDiv}>
                    <TextField
                        type={'number'}
                        placeholder={'Min'}
                        size={'small'}
                        value = {formData.long_term_debit_work_cap_min}
                        onChange={(e) => setFormData({...formData, long_term_debit_work_cap_min : e.target.value})}
                    />
                    <Box >to</Box>
                    <TextField
                        type={'number'}
                        placeholder={'Max'}
                        size={'small'}
                        value = {formData.long_term_debit_work_cap_max}
                        onChange={(e) => setFormData({...formData, long_term_debit_work_cap_max : e.target.value})}
                    />
                </Box>
            </Box>
            <Box className={classes.listItemDiv}>
                <Box className={classes.liDiv}>
                    31
                    <StarBorderIcon />
                    <Box className={classes.underLineDiv}>Total Liabilities/Total Assets {`<`} Industry Median</Box>
                </Box>
                <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
                    <RadioGroup 
                        row defaultValue="no" 
                        value = { formData.tot_lia_tot_assn }
                    >
                        <FormControlLabel
                            value="yes"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, tot_lia_tot_assn : "yes"})}
                                />
                            }
                            label={<span>{'Yes'}</span>}
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    onChange={() => setFormData({...formData, tot_lia_tot_assn : "no"})}
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

export default MarginsForm ;