from backend.models.screenlist import Screenlist
from backend.models.screenlist import Screenoption
from backend.models.models import Indicators
from backend.models.models import Trend
from backend.models.models import TrendWide
from backend.models.models import PowerPlay
from rest_framework import serializers


class ScreenlistSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Screenlist
        fields = ['created', 'title']

class ScreenoptionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Screenoption
        fields = ['screen_id', 'eps_rating_min', 'eps_rating_max', 'rs_rating_min', 'rs_rating_max', 'smr_rating', 'ad_rating', 'comp_rating_min', 'comp_rating_max', 'ind_group_rs_rating',
            'erns_lst_rpt_date_min','erns_lst_rpt_date_max','erns_dued_min','erns_dued_max','eps_chg_lst_rpt_q_min','eps_chg_lst_rpt_q_max','eps_chg_q_1_min','eps_chg_q_1_max','erns_acce_lst_q_3','erns_stability_min','erns_stability_max','eps_chg_q_2_min','eps_chg_q_2_max','eps_chg_q_3_min','eps_chg_q_3_max','eps_chg_lst_rpt_q_eps_chg_lst_q_3_is_bigger','avg_eps_chg_lst_q_2_min','avg_eps_chg_lst_q_2_max','avg_eps_chg_lst_q_3_min','avg_eps_chg_lst_q_3_max','avg_eps_chg_lst_q_4_min','avg_eps_chg_lst_q_4_max','avg_eps_chg_lst_q_5_min','avg_eps_chg_lst_q_5_max','avg_eps_chg_lst_q_6_min','avg_eps_chg_lst_q_6_max','eps_trailing_q_4_min','eps_trailing_q_4_max','eps_trailing_q_4_is_bigger','eps_trailing_q_4_lst_y_is_bigger','eps_chg_lst_rpty_vs_1y_ago_min','eps_chg_lst_rpty_vs_1y_ago_max','eps_chg_lst_rpty_vs_2y_ago_min','eps_chg_lst_rpty_vs_2y_ago_max','eps_chg_lst_y_min','eps_chg_lst_y_max','eps_grow_rate_lst_3y_min','eps_grow_rate_lst_3y_max','eps_grow_rate_lst_5y_min','eps_grow_rate_lst_5y_max','eps_grow_rate_lst_3y_5y_is_bigger','eps_grow_rate_lst_5y_percent_rnk_min','eps_grow_rate_lst_5y_percent_rnk_max','eps_grow_rate_projected_sus_growth_min','eps_grow_rate_projected_sus_growth_max','eps_lst_rpty_min','eps_lst_rpty_max','eps_1y_ago_min','eps_1y_ago_max','eps_2y_ago_min','eps_2y_ago_max','eps_3y_ago_min','eps_3y_ago_max','eps_4y_ago_min','eps_4y_ago_max','eps_5y_ago_min','eps_5y_ago_max','eps_6y_ago_min','eps_6y_ago_max','eps_lst_rpty_4y_is_bigger','eps_est_erns_surp_min','eps_est_erns_surp_max','eps_est_chg_next_q_min','eps_est_chg_next_q_max','eps_est_chg_cur_y_min','eps_est_chg_cur_y_max','eps_est_chg_1y_forward_vs_min','eps_est_chg_1y_forward_vs_max','sales_chg_lst_rpt_q_min','sales_chg_lst_rpt_q_max','avg_sales_chg_lst_2_q_min','avg_sales_chg_lst_2_q_max','avg_sales_chg_lst_3_q_min','avg_sales_chg_lst_3_q_max','avg_sales_chg_lst_4_q_min','avg_sales_chg_lst_4_q_max','avg_sales_chg_lst_5_q_min','avg_sales_chg_lst_5_q_max','avg_sales_chg_lst_6_q_min','avg_sales_chg_lst_6_q_max','sales_acc_lst_2_q','sales_acc_lst_3_q','sales_chg_lst_rpt_y_min','sales_chg_lst_rpt_y_max','sales_growth_rate_lst_3_y_min','sales_growth_rate_lst_3_y_max','sales_growth_rate_lst_5_y_min','sales_growth_rate_lst_5_y_max','tot_ann_sales_lst_rpt_y_min','tot_ann_sales_lst_rpt_y_max','company_ids_g_r_min','company_ids_g_r_max','industry_g_n','broad_sectors','shares_outstanding_min','shares_outstanding_max','shares_in_float_min','shares_in_float_max','market_capitialization_min','market_capitialization_max','enterprise_value_min','enterprise_value_max','sponsorship_rating','funds_min','funds_max','funds_increase_min','funds_increase_max','number_of_fund_min','number_of_fund_max','management_min','management_max','institutional_ownership','price_min','price_max','price_vs_52_week_high_min','price_vs_52_week_high_max','price_chg_cur_d_min','price_chg_cur_d_max','price_chg_min','price_chg_max','price_chg_cur_w_min','price_chg_cur_w_max','price_chg_lst_m_min','price_chg_lst_m_max','price_chg_lst_3_m_min','price_chg_lst_3_m_max','price_chg_lst_6_m_min','price_chg_lst_6_m_max','price_chg_lst_12_m_min','price_chg_lst_12_m_max','price_chg_y_to_d_min','price_chg_y_to_d_max','price_chg_sp_500_lst26w_min','price_chg_sp_500_lst26w_max','weekly_closing_range_min','weekly_closing_range_max','daily_closing_range_min','daily_closing_range_max','price_vs_10_d_min','price_vs_10_d_max','price_vs_21_d_min','price_vs_21_d_max','price_vs_50_d_min','price_vs_50_d_max','price_vs_150_d_min','price_vs_150_d_max','price_vs_200_d_min','price_vs_200_d_max','d_10_d_21_d_50','d_50_d_150_d_200','vol_50_d_avg_min','vol_50_d_avg_max','vol_Chg_50_d_avg_min','vol_Chg_50_d_avg_max','w_vol_chg_10_w_avg_min','w_vol_chg_10_w_avg_max','cur_d_vol_grt_pre_5_d','cur_d_vol_grt_pre_10_d','cur_d_vol_grt_pre_20_d','vol_int_min','vol_int_max','up_down_vol_rat_min','up_down_vol_rat_max','vol_50_d_avg_dol_1000s_min','vol_50_d_avg_dol_1000s_max','rs_line_new_high','rs_line_new_low','rs_rating_3_m_min','rs_rating_3_m_max','rs_rating_6_m_min','rs_rating_6_m_max','timeliness_rating','alpha_min','alpha_max','beta_min','beta_max','avg_true_range_30_d_min','avg_true_range_30_d_max','davidend_yield_min','davidend_yield_max','after_tax_mrgn_acce_lst_3_q','pre_tax_mrgn_lst_rpty_min','pre_tax_mrgn_lst_rpty_max','after_tax_mrgn_lst_rpt_q_min','after_tax_mrgn_lst_rpt_q_max','after_tax_mrgn_avg_lst_q_2_min','after_tax_mrgn_avg_lst_q_2_max','after_tax_mrgn_avg_lst_q_3_min','after_tax_mrgn_avg_lst_q_3_max','after_tax_mrgn_avg_lst_q_4_min','after_tax_mrgn_avg_lst_q_4_max','after_tax_mrgn_avg_lst_q_5_min','after_tax_mrgn_avg_lst_q_5_max','after_tax_mrgn_avg_lst_q_6_min','after_tax_mrgn_avg_lst_q_6_max','opr_sys_ids_median_is_bigger','profile_mrgn_ids_median_is_bigger','p_e_current_min','p_e_current_max','p_e_est_min','p_e_est_max','p_e_vs_sp_500_min','p_e_vs_sp_500_max','p_e_percent_rnk_min','p_e_percent_rnk_max','p_e_percent_rnk_in_grp_min','p_e_percent_rnk_in_grp_max','p_e_avg_5y_is_bigger','peg_min','peg_max','peg_divid_adj_min','peg_divid_adj_max','cf_v_eps_diff_lst_rpt_q_min','cf_v_eps_diff_lst_rpt_q_max','cf_v_eps_diff_lst_rpt_y_min','cf_v_eps_diff_lst_rpt_y_max','roe_5y_avg_min','roe_5y_avg_max','debit_lst_rpt_y_min','debit_lst_rpt_y_max','current_ratio_min','current_ratio_max','price_to_sales_min','price_to_sales_max','price_to_book_value_min','price_to_book_value_max','price_to_cash_flow_min','price_to_cash_flow_max','epr_val_free_cash_flow_min','epr_val_free_cash_flow_max','long_term_debit_work_cap_min','long_term_debit_work_cap_max','tot_lia_tot_assn','exchange','adr','etf_closed_end_fund','etf','options','ipo_date_min','ipo_date_max','incorporation_date_min','incorporation_date_max','headquarters_city','new_ceo_in_lst_12_m','ibd_article_lst_2_y','ibd_50','ibd_new_america','ibd_85','ibd_big_cap_20'
        ]

class ScreenresultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Indicators
        fields = ['ticker_symbol', 'date_populated', 'rs', 'bband_gap', 'will_r', 'er', 'grade', 'events', 'c', 'v']

class TrendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trend
        fields = ['ticker_symbol', 'date_populated', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth']

class TrendWideSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrendWide
        fields = ['ticker_symbol', 'date_populated', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']

class PowerPlaySerializer(serializers.ModelSerializer):
    class Meta:
        model = PowerPlay
        fields = ['ticker_symbol', 'date_populated', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth']
