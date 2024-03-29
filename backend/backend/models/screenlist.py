from django.db import models

class Screenoption(models.Model):
    screen_id = models.IntegerField( default=1 )
    eps_rating_min = models.CharField( max_length=10,blank=True, default='')
    eps_rating_max = models.CharField( max_length=10,blank=True, default='')
    rs_rating_min = models.CharField( max_length=10,blank=True, default='')
    rs_rating_max = models.CharField( max_length=10,blank=True, default='')
    comp_rating_min = models.CharField( max_length=10,blank=True, default='')
    comp_rating_max = models.CharField( max_length=10,blank=True, default='')
    smr_rating = models.CharField( max_length=100,blank=True, default='')
    ad_rating = models.CharField( max_length=50,blank=True, default='')
    ind_group_rs_rating = models.CharField( max_length=50,blank=True, default='')

    erns_lst_rpt_date_min = models.CharField( max_length=50,blank=True, default='')
    erns_lst_rpt_date_max = models.CharField( max_length=50,blank=True, default='')
    erns_dued_min = models.CharField( max_length=50,blank=True, default='')
    erns_dued_max = models.CharField( max_length=50,blank=True, default='')
    eps_chg_lst_rpt_q_min = models.CharField( max_length=10,blank=True, default='')
    eps_chg_lst_rpt_q_max = models.CharField( max_length=10,blank=True, default='')
    eps_chg_q_1_min = models.CharField( max_length=10,blank=True, default='')
    eps_chg_q_1_max = models.CharField( max_length=10,blank=True, default='')
    erns_acce_lst_q_3 = models.CharField( max_length=50,blank=True, default='')
    erns_stability_min = models.CharField( max_length=10,blank=True, default='')
    erns_stability_max = models.CharField( max_length=10,blank=True, default='')
    eps_chg_q_2_min = models.CharField( max_length=10,blank=True, default='')
    eps_chg_q_2_max = models.CharField( max_length=10,blank=True, default='')
    eps_chg_q_3_min = models.CharField( max_length=10,blank=True, default='')
    eps_chg_q_3_max = models.CharField( max_length=10,blank=True, default='')
    eps_chg_lst_rpt_q_eps_chg_lst_q_3_is_bigger = models.CharField( max_length=50,blank=True, default='')
    avg_eps_chg_lst_q_2_min = models.CharField( max_length=10,blank=True, default='')
    avg_eps_chg_lst_q_2_max = models.CharField( max_length=10,blank=True, default='')
    avg_eps_chg_lst_q_3_min = models.CharField( max_length=10,blank=True, default='')
    avg_eps_chg_lst_q_3_max = models.CharField( max_length=10,blank=True, default='')
    avg_eps_chg_lst_q_4_min = models.CharField( max_length=10,blank=True, default='')
    avg_eps_chg_lst_q_4_max = models.CharField( max_length=10,blank=True, default='')
    avg_eps_chg_lst_q_5_min = models.CharField( max_length=10,blank=True, default='')
    avg_eps_chg_lst_q_5_max = models.CharField( max_length=10,blank=True, default='')
    avg_eps_chg_lst_q_6_min = models.CharField( max_length=10,blank=True, default='')
    avg_eps_chg_lst_q_6_max = models.CharField( max_length=10,blank=True, default='')
    eps_trailing_q_4_min = models.CharField( max_length=10,blank=True, default='')
    eps_trailing_q_4_max = models.CharField( max_length=10,blank=True, default='')
    eps_trailing_q_4_is_bigger = models.CharField( max_length=50,blank=True, default='')
    eps_trailing_q_4_lst_y_is_bigger = models.CharField( max_length=50,blank=True, default='')
    eps_chg_lst_rpty_vs_1y_ago_min = models.CharField( max_length=10,blank=True, default='')
    eps_chg_lst_rpty_vs_1y_ago_max = models.CharField( max_length=10,blank=True, default='')
    eps_chg_lst_rpty_vs_2y_ago_min = models.CharField( max_length=10,blank=True, default='')
    eps_chg_lst_rpty_vs_2y_ago_max = models.CharField( max_length=10,blank=True, default='')
    eps_chg_lst_y_min = models.CharField( max_length=10,blank=True, default='')
    eps_chg_lst_y_max = models.CharField( max_length=10,blank=True, default='')
    eps_grow_rate_lst_3y_min = models.CharField( max_length=10,blank=True, default='')
    eps_grow_rate_lst_3y_max = models.CharField( max_length=10,blank=True, default='')
    eps_grow_rate_lst_5y_min = models.CharField( max_length=10,blank=True, default='')
    eps_grow_rate_lst_5y_max = models.CharField( max_length=10,blank=True, default='')
    eps_grow_rate_lst_3y_5y_is_bigger = models.CharField( max_length=50,blank=True, default='')
    eps_grow_rate_lst_5y_percent_rnk_min = models.CharField( max_length=10,blank=True, default='')
    eps_grow_rate_lst_5y_percent_rnk_max = models.CharField( max_length=10,blank=True, default='')
    eps_grow_rate_projected_sus_growth_min = models.CharField( max_length=10,blank=True, default='')
    eps_grow_rate_projected_sus_growth_max = models.CharField( max_length=10,blank=True, default='')
    eps_lst_rpty_min = models.CharField( max_length=10,blank=True, default='')
    eps_lst_rpty_max = models.CharField( max_length=10,blank=True, default='')
    eps_1y_ago_min = models.CharField( max_length=10,blank=True, default='')
    eps_1y_ago_max = models.CharField( max_length=10,blank=True, default='')
    eps_2y_ago_min = models.CharField( max_length=10,blank=True, default='')
    eps_2y_ago_max = models.CharField( max_length=10,blank=True, default='')
    eps_3y_ago_min = models.CharField( max_length=10,blank=True, default='')
    eps_3y_ago_max = models.CharField( max_length=10,blank=True, default='')
    eps_4y_ago_min = models.CharField( max_length=10,blank=True, default='')
    eps_4y_ago_max = models.CharField( max_length=10,blank=True, default='')
    eps_5y_ago_min = models.CharField( max_length=10,blank=True, default='')
    eps_5y_ago_max = models.CharField( max_length=10,blank=True, default='')
    eps_6y_ago_min = models.CharField( max_length=10,blank=True, default='')
    eps_6y_ago_max = models.CharField( max_length=10,blank=True, default='')
    eps_lst_rpty_4y_is_bigger = models.CharField( max_length=50,blank=True, default='')
    eps_est_erns_surp_min = models.CharField( max_length=10,blank=True, default='')
    eps_est_erns_surp_max = models.CharField( max_length=10,blank=True, default='')
    eps_est_chg_next_q_min = models.CharField( max_length=10,blank=True, default='')
    eps_est_chg_next_q_max = models.CharField( max_length=10,blank=True, default='')
    eps_est_chg_cur_y_min = models.CharField( max_length=10,blank=True, default='')
    eps_est_chg_cur_y_max = models.CharField( max_length=10,blank=True, default='')
    eps_est_chg_1y_forward_vs_min = models.CharField( max_length=10,blank=True, default='')
    eps_est_chg_1y_forward_vs_max = models.CharField( max_length=10,blank=True, default='')
    sales_chg_lst_rpt_q_min = models.CharField( max_length=10,blank=True, default='')
    sales_chg_lst_rpt_q_max = models.CharField( max_length=10,blank=True, default='')
    avg_sales_chg_lst_2_q_min = models.CharField( max_length=10,blank=True, default='')
    avg_sales_chg_lst_2_q_max = models.CharField( max_length=10,blank=True, default='')
    avg_sales_chg_lst_3_q_min = models.CharField( max_length=10,blank=True, default='')
    avg_sales_chg_lst_3_q_max = models.CharField( max_length=10,blank=True, default='')
    avg_sales_chg_lst_4_q_min = models.CharField( max_length=10,blank=True, default='')
    avg_sales_chg_lst_4_q_max = models.CharField( max_length=10,blank=True, default='')
    avg_sales_chg_lst_5_q_min = models.CharField( max_length=10,blank=True, default='')
    avg_sales_chg_lst_5_q_max = models.CharField( max_length=10,blank=True, default='')
    avg_sales_chg_lst_6_q_min = models.CharField( max_length=10,blank=True, default='')
    avg_sales_chg_lst_6_q_max = models.CharField( max_length=10,blank=True, default='')
    sales_acc_lst_2_q = models.CharField( max_length=50,blank=True, default='')
    sales_acc_lst_3_q = models.CharField( max_length=50,blank=True, default='')
    sales_chg_lst_rpt_y_min = models.CharField( max_length=10,blank=True, default='')
    sales_chg_lst_rpt_y_max = models.CharField( max_length=10,blank=True, default='')
    sales_growth_rate_lst_3_y_min = models.CharField( max_length=10,blank=True, default='')
    sales_growth_rate_lst_3_y_max = models.CharField( max_length=10,blank=True, default='')
    sales_growth_rate_lst_5_y_min = models.CharField( max_length=10,blank=True, default='')
    sales_growth_rate_lst_5_y_max = models.CharField( max_length=10,blank=True, default='')
    tot_ann_sales_lst_rpt_y_min = models.CharField( max_length=10,blank=True, default='')
    tot_ann_sales_lst_rpt_y_max = models.CharField( max_length=10,blank=True, default='')
    company_ids_g_r_min = models.CharField( max_length=10,blank=True, default='')
    company_ids_g_r_max = models.CharField( max_length=10,blank=True, default='')
    industry_g_n = models.CharField( max_length=50,blank=True, default='')
    broad_sectors = models.CharField( max_length=50,blank=True, default='')
    shares_outstanding_min = models.CharField( max_length=10,blank=True, default='')
    shares_outstanding_max = models.CharField( max_length=10,blank=True, default='')
    shares_in_float_min = models.CharField( max_length=10,blank=True, default='')
    shares_in_float_max = models.CharField( max_length=10,blank=True, default='')
    market_capitialization_min = models.CharField( max_length=10,blank=True, default='')
    market_capitialization_max = models.CharField( max_length=10,blank=True, default='')
    enterprise_value_min = models.CharField( max_length=10,blank=True, default='')
    enterprise_value_max = models.CharField( max_length=10,blank=True, default='')
    sponsorship_rating = models.CharField( max_length=50,blank=True, default='')
    funds_min = models.CharField( max_length=10,blank=True, default='')
    funds_max = models.CharField( max_length=10,blank=True, default='')
    funds_increase_min = models.CharField( max_length=10,blank=True, default='')
    funds_increase_max = models.CharField( max_length=10,blank=True, default='')
    number_of_fund_min = models.CharField( max_length=10,blank=True, default='')
    number_of_fund_max = models.CharField( max_length=10,blank=True, default='')
    management_min = models.CharField( max_length=10,blank=True, default='')
    management_max = models.CharField( max_length=10,blank=True, default='')
    institutional_ownership = models.CharField( max_length=50,blank=True, default='')
    price_min = models.CharField( max_length=10,blank=True, default='')
    price_max = models.CharField( max_length=10,blank=True, default='')
    price_vs_52_week_high_min = models.CharField( max_length=10,blank=True, default='')
    price_vs_52_week_high_max = models.CharField( max_length=10,blank=True, default='')
    price_chg_cur_d_min = models.CharField( max_length=10,blank=True, default='')
    price_chg_cur_d_max = models.CharField( max_length=10,blank=True, default='')
    price_chg_min = models.CharField( max_length=10,blank=True, default='')
    price_chg_max = models.CharField( max_length=10,blank=True, default='')
    price_chg_cur_w_min = models.CharField( max_length=10,blank=True, default='')
    price_chg_cur_w_max = models.CharField( max_length=10,blank=True, default='')
    price_chg_lst_m_min = models.CharField( max_length=10,blank=True, default='')
    price_chg_lst_m_max = models.CharField( max_length=10,blank=True, default='')
    price_chg_lst_3_m_min = models.CharField( max_length=10,blank=True, default='')
    price_chg_lst_3_m_max = models.CharField( max_length=10,blank=True, default='')
    price_chg_lst_6_m_min = models.CharField( max_length=10,blank=True, default='')
    price_chg_lst_6_m_max = models.CharField( max_length=10,blank=True, default='')
    price_chg_lst_12_m_min = models.CharField( max_length=10,blank=True, default='')
    price_chg_lst_12_m_max = models.CharField( max_length=10,blank=True, default='')
    price_chg_y_to_d_min = models.CharField( max_length=10,blank=True, default='')
    price_chg_y_to_d_max = models.CharField( max_length=10,blank=True, default='')
    price_chg_sp_500_lst26w_min = models.CharField( max_length=10,blank=True, default='')
    price_chg_sp_500_lst26w_max = models.CharField( max_length=10,blank=True, default='')
    weekly_closing_range_min = models.CharField( max_length=10,blank=True, default='')
    weekly_closing_range_max = models.CharField( max_length=10,blank=True, default='')
    daily_closing_range_min = models.CharField( max_length=10,blank=True, default='')
    daily_closing_range_max = models.CharField( max_length=10,blank=True, default='')
    price_vs_10_d_min = models.CharField( max_length=10,blank=True, default='')
    price_vs_10_d_max = models.CharField( max_length=10,blank=True, default='')
    price_vs_21_d_min = models.CharField( max_length=10,blank=True, default='')
    price_vs_21_d_max = models.CharField( max_length=10,blank=True, default='')
    price_vs_50_d_min = models.CharField( max_length=10,blank=True, default='')
    price_vs_50_d_max = models.CharField( max_length=10,blank=True, default='')
    price_vs_150_d_min = models.CharField( max_length=10,blank=True, default='')
    price_vs_150_d_max = models.CharField( max_length=10,blank=True, default='')
    price_vs_200_d_min = models.CharField( max_length=10,blank=True, default='')
    price_vs_200_d_max = models.CharField( max_length=10,blank=True, default='')
    d_10_d_21_d_50 = models.CharField( max_length=50,blank=True, default='')
    d_50_d_150_d_200 = models.CharField( max_length=50,blank=True, default='')
    vol_50_d_avg_min = models.CharField( max_length=10,blank=True, default='')
    vol_50_d_avg_max = models.CharField( max_length=10,blank=True, default='')
    vol_Chg_50_d_avg_min = models.CharField( max_length=10,blank=True, default='')
    vol_Chg_50_d_avg_max = models.CharField( max_length=10,blank=True, default='')
    w_vol_chg_10_w_avg_min = models.CharField( max_length=10,blank=True, default='')
    w_vol_chg_10_w_avg_max = models.CharField( max_length=10,blank=True, default='')
    cur_d_vol_grt_pre_5_d = models.CharField( max_length=50,blank=True, default='')
    cur_d_vol_grt_pre_10_d = models.CharField( max_length=50,blank=True, default='')
    cur_d_vol_grt_pre_20_d = models.CharField( max_length=50,blank=True, default='')
    vol_int_min = models.CharField( max_length=10,blank=True, default='')
    vol_int_max = models.CharField( max_length=10,blank=True, default='')
    up_down_vol_rat_min = models.CharField( max_length=10,blank=True, default='')
    up_down_vol_rat_max = models.CharField( max_length=10,blank=True, default='')
    vol_50_d_avg_dol_1000s_min = models.CharField( max_length=10,blank=True, default='')
    vol_50_d_avg_dol_1000s_max = models.CharField( max_length=10,blank=True, default='')
    rs_line_new_high = models.CharField( max_length=50,blank=True, default='')
    rs_line_new_low = models.CharField( max_length=50,blank=True, default='')
    rs_rating_3_m_min = models.CharField( max_length=10,blank=True, default='')
    rs_rating_3_m_max = models.CharField( max_length=10,blank=True, default='')
    rs_rating_6_m_min = models.CharField( max_length=10,blank=True, default='')
    rs_rating_6_m_max = models.CharField( max_length=10,blank=True, default='')
    timeliness_rating = models.CharField( max_length=50,blank=True, default='')
    alpha_min = models.CharField( max_length=10,blank=True, default='')
    alpha_max = models.CharField( max_length=10,blank=True, default='')
    beta_min = models.CharField( max_length=10,blank=True, default='')
    beta_max = models.CharField( max_length=10,blank=True, default='')

    avg_true_range_30_d_min = models.CharField( max_length=10,blank=True, default='')
    avg_true_range_30_d_max = models.CharField( max_length=10,blank=True, default='')
    davidend_yield_min = models.CharField( max_length=10,blank=True, default='')
    davidend_yield_max = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_acce_lst_3_q = models.CharField( max_length=50,blank=True, default='')
    pre_tax_mrgn_lst_rpty_min = models.CharField( max_length=10,blank=True, default='')
    pre_tax_mrgn_lst_rpty_max = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_lst_rpt_q_min = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_lst_rpt_q_max = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_avg_lst_q_2_min = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_avg_lst_q_2_max = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_avg_lst_q_3_min = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_avg_lst_q_3_max = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_avg_lst_q_4_min = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_avg_lst_q_4_max = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_avg_lst_q_5_min = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_avg_lst_q_5_max = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_avg_lst_q_6_min = models.CharField( max_length=10,blank=True, default='')
    after_tax_mrgn_avg_lst_q_6_max = models.CharField( max_length=10,blank=True, default='')
    opr_sys_ids_median_is_bigger = models.CharField( max_length=50,blank=True, default='')
    profile_mrgn_ids_median_is_bigger = models.CharField( max_length=50,blank=True, default='')
    p_e_current_min = models.CharField( max_length=10,blank=True, default='')
    p_e_current_max = models.CharField( max_length=10,blank=True, default='')
    p_e_est_min = models.CharField( max_length=10,blank=True, default='')
    p_e_est_max = models.CharField( max_length=10,blank=True, default='')
    p_e_vs_sp_500_min = models.CharField( max_length=10,blank=True, default='')
    p_e_vs_sp_500_max = models.CharField( max_length=10,blank=True, default='')
    p_e_percent_rnk_min = models.CharField( max_length=10,blank=True, default='')
    p_e_percent_rnk_max = models.CharField( max_length=10,blank=True, default='')
    p_e_percent_rnk_in_grp_min = models.CharField( max_length=10,blank=True, default='')
    p_e_percent_rnk_in_grp_max = models.CharField( max_length=10,blank=True, default='')
    p_e_avg_5y_is_bigger = models.CharField( max_length=50,blank=True, default='')
    peg_min = models.CharField( max_length=10,blank=True, default='')
    peg_max = models.CharField( max_length=10,blank=True, default='')
    peg_divid_adj_min = models.CharField( max_length=10,blank=True, default='')
    peg_divid_adj_max = models.CharField( max_length=10,blank=True, default='')
    cf_v_eps_diff_lst_rpt_q_min = models.CharField( max_length=10,blank=True, default='')
    cf_v_eps_diff_lst_rpt_q_max = models.CharField( max_length=10,blank=True, default='')
    cf_v_eps_diff_lst_rpt_y_min = models.CharField( max_length=10,blank=True, default='')
    cf_v_eps_diff_lst_rpt_y_max = models.CharField( max_length=10,blank=True, default='')
    roe_5y_avg_min = models.CharField( max_length=10,blank=True, default='')
    roe_5y_avg_max = models.CharField( max_length=10,blank=True, default='')
    debit_lst_rpt_y_min = models.CharField( max_length=10,blank=True, default='')
    debit_lst_rpt_y_max = models.CharField( max_length=10,blank=True, default='')
    current_ratio_min = models.CharField( max_length=10,blank=True, default='')
    current_ratio_max = models.CharField( max_length=10,blank=True, default='')
    price_to_sales_min = models.CharField( max_length=10,blank=True, default='')
    price_to_sales_max = models.CharField( max_length=10,blank=True, default='')
    price_to_book_value_min = models.CharField( max_length=10,blank=True, default='')
    price_to_book_value_max = models.CharField( max_length=10,blank=True, default='')
    price_to_cash_flow_min = models.CharField( max_length=10,blank=True, default='')
    price_to_cash_flow_max = models.CharField( max_length=10,blank=True, default='')
    epr_val_free_cash_flow_min = models.CharField( max_length=10,blank=True, default='')
    epr_val_free_cash_flow_max = models.CharField( max_length=10,blank=True, default='')
    long_term_debit_work_cap_min = models.CharField( max_length=10,blank=True, default='')
    long_term_debit_work_cap_max = models.CharField( max_length=10,blank=True, default='')
    tot_lia_tot_assn = models.CharField( max_length=50,blank=True, default='')
    exchange = models.CharField( max_length=50,blank=True, default='')
    adr = models.CharField( max_length=50,blank=True, default='')
    etf_closed_end_fund = models.CharField( max_length=50,blank=True, default='')

    etf = models.CharField( max_length=50,blank=True, default='')
    options = models.CharField( max_length=50,blank=True, default='')
    ipo_date_min = models.CharField( max_length=50,blank=True, default='')
    ipo_date_max = models.CharField( max_length=50,blank=True, default='')
    incorporation_date_min = models.CharField( max_length=50,blank=True, default='')
    incorporation_date_max = models.CharField( max_length=50,blank=True, default='')
    headquarters_city = models.CharField( max_length=50,blank=True, default='')

    new_ceo_in_lst_12_m = models.CharField( max_length=50,blank=True, default='')
    ibd_article_lst_2_y = models.CharField( max_length=50,blank=True, default='')
    ibd_50 = models.CharField( max_length=50,blank=True, default='')
    ibd_new_america = models.CharField( max_length=50,blank=True, default='')
    ibd_85 = models.CharField( max_length=50,blank=True, default='')
    ibd_big_cap_20 = models.CharField( max_length=50,blank=True, default='')

class Screenlist(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=50, blank=True, default='')

    class Meta:
        ordering = ['created']