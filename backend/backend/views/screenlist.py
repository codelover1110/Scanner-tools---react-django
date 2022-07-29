from turtle import title
from rest_framework import status
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework import permissions

from backend.models.screenlist import Screenlist
from backend.models.screenlist import Screenoption
from backend.models.models import Indicators
from backend.models.models import Trend
from backend.models.models import TrendWide
from backend.models.models import PowerPlay
from backend.serializers.screenlist import ScreenlistSerializer
from backend.serializers.screenlist import ScreenoptionSerializer
from backend.serializers.screenlist import ScreenresultSerializer
from backend.serializers.screenlist import TrendSerializer
from backend.serializers.screenlist import TrendWideSerializer
from backend.serializers.screenlist import PowerPlaySerializer

class ScreenlistViewSet(viewsets.ModelViewSet):
    queryset = Screenlist.objects.all()
        
    # permission_classes = [permissions.IsAuthenticated]

    @api_view(['GET', 'POST'])
    def screen_list(request):
        if request.method == 'GET':
            screenlist = Screenlist.objects.all()
            serializer = ScreenlistSerializer(screenlist, many=True)
            
            # test = Screenlist.objects.get(created = "2022-07-23T01:33:34.858506Z")
            # test.delete()

            return Response(serializer.data)

        elif request.method == 'POST':
            serializer = ScreenlistSerializer(data=request.data)
            if serializer.is_valid():
                
                Screenlist.objects.filter(title = request.data['data']).delete()
                    
                screenlist = Screenlist( title = request.data['data'] )
                screenlist.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            
class ScreenoptionViewSet(viewsets.ModelViewSet):
    queryset = Screenoption.objects.all()
        
    # permission_classes = [permissions.IsAuthenticated]

    @api_view(['GET', 'POST'])
    def screen_option(request):
        if request.method == 'GET':
            index = request.GET.get('screen_id', None)
            print(index)
            screenoption = Screenoption.objects.filter(screen_id = index)
            serializer = ScreenoptionSerializer(screenoption, many=True)
            # Screenoption.objects.all().delete()

            return Response(serializer.data)

        elif request.method == 'POST':
            serializer = ScreenoptionSerializer(data=request.data)
            if serializer.is_valid():

                Screenoption.objects.filter(screen_id = request.data['formData']['screen_id']).delete()
                # print(request.data['formData']['smr_rating'])
                screenlist = Screenoption(
                    screen_id = request.data['formData']['screen_id'],
                    eps_rating_min = request.data['formData']['eps_rating_min'],
                    eps_rating_max = request.data['formData']['eps_rating_max'],
                    rs_rating_min = request.data['formData']['rs_rating_min'],
                    rs_rating_max = request.data['formData']['rs_rating_max'],
                    comp_rating_min = request.data['formData']['comp_rating_min'],
                    comp_rating_max = request.data['formData']['comp_rating_max'],
                    smr_rating = request.data['formData']['smr_rating'],
                    ad_rating = request.data['formData']['ad_rating'],
                    ind_group_rs_rating = request.data['formData']['ind_group_rs_rating'],

                    erns_lst_rpt_date_min = request.data['formData']['erns_lst_rpt_date_min'],
                    erns_lst_rpt_date_max = request.data['formData']['erns_lst_rpt_date_max'],
                    erns_dued_min = request.data['formData']['erns_dued_min'],
                    erns_dued_max = request.data['formData']['erns_dued_max'],
                    eps_chg_lst_rpt_q_min = request.data['formData']['eps_chg_lst_rpt_q_min'],
                    eps_chg_lst_rpt_q_max = request.data['formData']['eps_chg_lst_rpt_q_max'],
                    eps_chg_q_1_min = request.data['formData']['eps_chg_q_1_min'],
                    eps_chg_q_1_max = request.data['formData']['eps_chg_q_1_max'],
                    erns_acce_lst_q_3 = request.data['formData']['erns_acce_lst_q_3'],
                    erns_stability_min = request.data['formData']['erns_stability_min'],
                    erns_stability_max = request.data['formData']['erns_stability_max'],
                    eps_chg_q_2_min = request.data['formData']['eps_chg_q_2_min'],
                    eps_chg_q_2_max = request.data['formData']['eps_chg_q_2_max'],
                    eps_chg_q_3_min = request.data['formData']['eps_chg_q_3_min'],
                    eps_chg_q_3_max = request.data['formData']['eps_chg_q_3_max'],
                    eps_chg_lst_rpt_q_eps_chg_lst_q_3_is_bigger = request.data['formData']['eps_chg_lst_rpt_q_eps_chg_lst_q_3_is_bigger'],
                    avg_eps_chg_lst_q_2_min = request.data['formData']['avg_eps_chg_lst_q_2_min'],
                    avg_eps_chg_lst_q_2_max = request.data['formData']['avg_eps_chg_lst_q_2_max'],
                    avg_eps_chg_lst_q_3_min = request.data['formData']['avg_eps_chg_lst_q_3_min'],
                    avg_eps_chg_lst_q_3_max = request.data['formData']['avg_eps_chg_lst_q_3_max'],
                    avg_eps_chg_lst_q_4_min = request.data['formData']['avg_eps_chg_lst_q_4_min'],
                    avg_eps_chg_lst_q_4_max = request.data['formData']['avg_eps_chg_lst_q_4_max'],
                    avg_eps_chg_lst_q_5_min = request.data['formData']['avg_eps_chg_lst_q_5_min'],
                    avg_eps_chg_lst_q_5_max = request.data['formData']['avg_eps_chg_lst_q_5_max'],
                    avg_eps_chg_lst_q_6_min = request.data['formData']['avg_eps_chg_lst_q_6_min'],
                    avg_eps_chg_lst_q_6_max = request.data['formData']['avg_eps_chg_lst_q_6_max'],
                    eps_trailing_q_4_min = request.data['formData']['eps_trailing_q_4_min'],
                    eps_trailing_q_4_max = request.data['formData']['eps_trailing_q_4_max'],
                    eps_trailing_q_4_is_bigger = request.data['formData']['eps_trailing_q_4_is_bigger'],
                    eps_trailing_q_4_lst_y_is_bigger = request.data['formData']['eps_trailing_q_4_lst_y_is_bigger'],
                    eps_chg_lst_rpty_vs_1y_ago_min = request.data['formData']['eps_chg_lst_rpty_vs_1y_ago_min'],
                    eps_chg_lst_rpty_vs_1y_ago_max = request.data['formData']['eps_chg_lst_rpty_vs_1y_ago_max'],
                    eps_chg_lst_rpty_vs_2y_ago_min = request.data['formData']['eps_chg_lst_rpty_vs_2y_ago_min'],
                    eps_chg_lst_rpty_vs_2y_ago_max = request.data['formData']['eps_chg_lst_rpty_vs_2y_ago_max'],
                    eps_chg_lst_y_min = request.data['formData']['eps_chg_lst_y_min'],
                    eps_chg_lst_y_max = request.data['formData']['eps_chg_lst_y_max'],
                    eps_grow_rate_lst_3y_min = request.data['formData']['eps_grow_rate_lst_3y_min'],
                    eps_grow_rate_lst_3y_max = request.data['formData']['eps_grow_rate_lst_3y_max'],
                    eps_grow_rate_lst_5y_min = request.data['formData']['eps_grow_rate_lst_5y_min'],
                    eps_grow_rate_lst_5y_max = request.data['formData']['eps_grow_rate_lst_5y_max'],
                    eps_grow_rate_lst_3y_5y_is_bigger = request.data['formData']['eps_grow_rate_lst_3y_5y_is_bigger'],
                    eps_grow_rate_lst_5y_percent_rnk_min = request.data['formData']['eps_grow_rate_lst_5y_percent_rnk_min'],
                    eps_grow_rate_lst_5y_percent_rnk_max = request.data['formData']['eps_grow_rate_lst_5y_percent_rnk_max'],
                    eps_grow_rate_projected_sus_growth_min = request.data['formData']['eps_grow_rate_projected_sus_growth_min'],
                    eps_grow_rate_projected_sus_growth_max = request.data['formData']['eps_grow_rate_projected_sus_growth_max'],
                    eps_lst_rpty_min = request.data['formData']['eps_lst_rpty_min'],
                    eps_lst_rpty_max = request.data['formData']['eps_lst_rpty_max'],
                    eps_1y_ago_min = request.data['formData']['eps_1y_ago_min'],
                    eps_1y_ago_max = request.data['formData']['eps_1y_ago_max'],
                    eps_2y_ago_min = request.data['formData']['eps_2y_ago_min'],
                    eps_2y_ago_max = request.data['formData']['eps_2y_ago_max'],
                    eps_3y_ago_min = request.data['formData']['eps_3y_ago_min'],
                    eps_3y_ago_max = request.data['formData']['eps_3y_ago_max'],
                    eps_4y_ago_min = request.data['formData']['eps_4y_ago_min'],
                    eps_4y_ago_max = request.data['formData']['eps_4y_ago_max'],
                    eps_5y_ago_min = request.data['formData']['eps_5y_ago_min'],
                    eps_5y_ago_max = request.data['formData']['eps_5y_ago_max'],
                    eps_6y_ago_min = request.data['formData']['eps_6y_ago_min'],
                    eps_6y_ago_max = request.data['formData']['eps_6y_ago_max'],
                    eps_lst_rpty_4y_is_bigger = request.data['formData']['eps_lst_rpty_4y_is_bigger'],
                    eps_est_erns_surp_min = request.data['formData']['eps_est_erns_surp_min'],
                    eps_est_erns_surp_max = request.data['formData']['eps_est_erns_surp_max'],
                    eps_est_chg_next_q_min = request.data['formData']['eps_est_chg_next_q_min'],
                    eps_est_chg_next_q_max = request.data['formData']['eps_est_chg_next_q_max'],
                    eps_est_chg_cur_y_min = request.data['formData']['eps_est_chg_cur_y_min'],
                    eps_est_chg_cur_y_max = request.data['formData']['eps_est_chg_cur_y_max'],
                    eps_est_chg_1y_forward_vs_min = request.data['formData']['eps_est_chg_1y_forward_vs_min'],
                    eps_est_chg_1y_forward_vs_max = request.data['formData']['eps_est_chg_1y_forward_vs_max'],
                    sales_chg_lst_rpt_q_min = request.data['formData']['sales_chg_lst_rpt_q_min'],
                    sales_chg_lst_rpt_q_max = request.data['formData']['sales_chg_lst_rpt_q_max'],
                    avg_sales_chg_lst_2_q_min = request.data['formData']['avg_sales_chg_lst_2_q_min'],
                    avg_sales_chg_lst_2_q_max = request.data['formData']['avg_sales_chg_lst_2_q_max'],
                    avg_sales_chg_lst_3_q_min = request.data['formData']['avg_sales_chg_lst_3_q_min'],
                    avg_sales_chg_lst_3_q_max = request.data['formData']['avg_sales_chg_lst_3_q_max'],
                    avg_sales_chg_lst_4_q_min = request.data['formData']['avg_sales_chg_lst_4_q_min'],
                    avg_sales_chg_lst_4_q_max = request.data['formData']['avg_sales_chg_lst_4_q_max'],
                    avg_sales_chg_lst_5_q_min = request.data['formData']['avg_sales_chg_lst_5_q_min'],
                    avg_sales_chg_lst_5_q_max = request.data['formData']['avg_sales_chg_lst_5_q_max'],
                    avg_sales_chg_lst_6_q_min = request.data['formData']['avg_sales_chg_lst_6_q_min'],
                    avg_sales_chg_lst_6_q_max = request.data['formData']['avg_sales_chg_lst_6_q_max'],
                    sales_acc_lst_2_q = request.data['formData']['sales_acc_lst_2_q'],
                    sales_acc_lst_3_q = request.data['formData']['sales_acc_lst_3_q'],
                    sales_chg_lst_rpt_y_min = request.data['formData']['sales_chg_lst_rpt_y_min'],
                    sales_chg_lst_rpt_y_max = request.data['formData']['sales_chg_lst_rpt_y_max'],
                    sales_growth_rate_lst_3_y_min = request.data['formData']['sales_growth_rate_lst_3_y_min'],
                    sales_growth_rate_lst_3_y_max = request.data['formData']['sales_growth_rate_lst_3_y_max'],
                    sales_growth_rate_lst_5_y_min = request.data['formData']['sales_growth_rate_lst_5_y_min'],
                    sales_growth_rate_lst_5_y_max = request.data['formData']['sales_growth_rate_lst_5_y_max'],
                    tot_ann_sales_lst_rpt_y_min = request.data['formData']['tot_ann_sales_lst_rpt_y_min'],
                    tot_ann_sales_lst_rpt_y_max = request.data['formData']['tot_ann_sales_lst_rpt_y_max'],
                    company_ids_g_r_min = request.data['formData']['company_ids_g_r_min'],
                    company_ids_g_r_max = request.data['formData']['company_ids_g_r_max'],
                    industry_g_n = request.data['formData']['industry_g_n'],
                    broad_sectors = request.data['formData']['broad_sectors'],
                    shares_outstanding_min = request.data['formData']['shares_outstanding_min'],
                    shares_outstanding_max = request.data['formData']['shares_outstanding_max'],
                    shares_in_float_min = request.data['formData']['shares_in_float_min'],
                    shares_in_float_max = request.data['formData']['shares_in_float_max'],
                    market_capitialization_min = request.data['formData']['market_capitialization_min'],
                    market_capitialization_max = request.data['formData']['market_capitialization_max'],
                    enterprise_value_min = request.data['formData']['enterprise_value_min'],
                    enterprise_value_max = request.data['formData']['enterprise_value_max'],
                    # sponsorship_rating = request.data['formData']['sponsorship_rating'],
                    funds_min = request.data['formData']['funds_min'],
                    funds_max = request.data['formData']['funds_max'],
                    funds_increase_min = request.data['formData']['funds_increase_min'],
                    funds_increase_max = request.data['formData']['funds_increase_max'],
                    number_of_fund_min = request.data['formData']['number_of_fund_min'],
                    number_of_fund_max = request.data['formData']['number_of_fund_max'],
                    management_min = request.data['formData']['management_min'],
                    management_max = request.data['formData']['management_max'],
                    institutional_ownership = request.data['formData']['institutional_ownership'],
                    price_min = request.data['formData']['price_min'],
                    price_max = request.data['formData']['price_max'],
                    price_vs_52_week_high_min = request.data['formData']['price_vs_52_week_high_min'],
                    price_vs_52_week_high_max = request.data['formData']['price_vs_52_week_high_max'],
                    price_chg_cur_d_min = request.data['formData']['price_chg_cur_d_min'],
                    price_chg_cur_d_max = request.data['formData']['price_chg_cur_d_max'],
                    price_chg_min = request.data['formData']['price_chg_min'],
                    price_chg_max = request.data['formData']['price_chg_max'],
                    price_chg_cur_w_min = request.data['formData']['price_chg_cur_w_min'],
                    price_chg_cur_w_max = request.data['formData']['price_chg_cur_w_max'],
                    price_chg_lst_m_min = request.data['formData']['price_chg_lst_m_min'],
                    price_chg_lst_m_max = request.data['formData']['price_chg_lst_m_max'],
                    price_chg_lst_3_m_min = request.data['formData']['price_chg_lst_3_m_min'],
                    price_chg_lst_3_m_max = request.data['formData']['price_chg_lst_3_m_max'],
                    price_chg_lst_6_m_min = request.data['formData']['price_chg_lst_6_m_min'],
                    price_chg_lst_6_m_max = request.data['formData']['price_chg_lst_6_m_max'],
                    price_chg_lst_12_m_min = request.data['formData']['price_chg_lst_12_m_min'],
                    price_chg_lst_12_m_max = request.data['formData']['price_chg_lst_12_m_max'],
                    price_chg_y_to_d_min = request.data['formData']['price_chg_y_to_d_min'],
                    price_chg_y_to_d_max = request.data['formData']['price_chg_y_to_d_max'],
                    price_chg_sp_500_lst26w_min = request.data['formData']['price_chg_sp_500_lst26w_min'],
                    price_chg_sp_500_lst26w_max = request.data['formData']['price_chg_sp_500_lst26w_max'],
                    weekly_closing_range_min = request.data['formData']['weekly_closing_range_min'],
                    weekly_closing_range_max = request.data['formData']['weekly_closing_range_max'],
                    daily_closing_range_min = request.data['formData']['daily_closing_range_min'],
                    daily_closing_range_max = request.data['formData']['daily_closing_range_max'],
                    price_vs_10_d_min = request.data['formData']['price_vs_10_d_min'],
                    price_vs_10_d_max = request.data['formData']['price_vs_10_d_max'],
                    price_vs_21_d_min = request.data['formData']['price_vs_21_d_min'],
                    price_vs_21_d_max = request.data['formData']['price_vs_21_d_max'],
                    price_vs_50_d_min = request.data['formData']['price_vs_50_d_min'],
                    price_vs_50_d_max = request.data['formData']['price_vs_50_d_max'],
                    price_vs_150_d_min = request.data['formData']['price_vs_150_d_min'],
                    price_vs_150_d_max = request.data['formData']['price_vs_150_d_max'],
                    price_vs_200_d_min = request.data['formData']['price_vs_200_d_min'],
                    price_vs_200_d_max = request.data['formData']['price_vs_200_d_max'],
                    d_10_d_21_d_50 = request.data['formData']['d_10_d_21_d_50'],
                    d_50_d_150_d_200 = request.data['formData']['d_50_d_150_d_200'],
                    vol_50_d_avg_min = request.data['formData']['vol_50_d_avg_min'],
                    vol_50_d_avg_max = request.data['formData']['vol_50_d_avg_max'],
                    vol_Chg_50_d_avg_min = request.data['formData']['vol_Chg_50_d_avg_min'],
                    vol_Chg_50_d_avg_max = request.data['formData']['vol_Chg_50_d_avg_max'],
                    w_vol_chg_10_w_avg_min = request.data['formData']['w_vol_chg_10_w_avg_min'],
                    w_vol_chg_10_w_avg_max = request.data['formData']['w_vol_chg_10_w_avg_max'],
                    cur_d_vol_grt_pre_5_d = request.data['formData']['cur_d_vol_grt_pre_5_d'],
                    cur_d_vol_grt_pre_10_d = request.data['formData']['cur_d_vol_grt_pre_10_d'],
                    cur_d_vol_grt_pre_20_d = request.data['formData']['cur_d_vol_grt_pre_20_d'],
                    vol_int_min = request.data['formData']['vol_int_min'],
                    vol_int_max = request.data['formData']['vol_int_max'],
                    up_down_vol_rat_min = request.data['formData']['up_down_vol_rat_min'],
                    up_down_vol_rat_max = request.data['formData']['up_down_vol_rat_max'],
                    vol_50_d_avg_dol_1000s_min = request.data['formData']['vol_50_d_avg_dol_1000s_min'],
                    vol_50_d_avg_dol_1000s_max = request.data['formData']['vol_50_d_avg_dol_1000s_max'],
                    rs_line_new_high = request.data['formData']['rs_line_new_high'],
                    rs_line_new_low = request.data['formData']['rs_line_new_low'],
                    rs_rating_3_m_min = request.data['formData']['rs_rating_3_m_min'],
                    rs_rating_3_m_max = request.data['formData']['rs_rating_3_m_max'],
                    rs_rating_6_m_min = request.data['formData']['rs_rating_6_m_min'],
                    rs_rating_6_m_max = request.data['formData']['rs_rating_6_m_max'],
                    alpha_min = request.data['formData']['alpha_min'],
                    alpha_max = request.data['formData']['alpha_max'],
                    beta_min = request.data['formData']['beta_min'],
                    beta_max = request.data['formData']['beta_max'],
                    avg_true_range_30_d_min = request.data['formData']['avg_true_range_30_d_min'],
                    avg_true_range_30_d_max = request.data['formData']['avg_true_range_30_d_max'],
                    davidend_yield_min = request.data['formData']['davidend_yield_min'],
                    davidend_yield_max = request.data['formData']['davidend_yield_max'],
                    after_tax_mrgn_acce_lst_3_q = request.data['formData']['after_tax_mrgn_acce_lst_3_q'],
                    pre_tax_mrgn_lst_rpty_min = request.data['formData']['pre_tax_mrgn_lst_rpty_min'],
                    pre_tax_mrgn_lst_rpty_max = request.data['formData']['pre_tax_mrgn_lst_rpty_max'],
                    after_tax_mrgn_lst_rpt_q_min = request.data['formData']['after_tax_mrgn_lst_rpt_q_min'],
                    after_tax_mrgn_lst_rpt_q_max = request.data['formData']['after_tax_mrgn_lst_rpt_q_max'],
                    after_tax_mrgn_avg_lst_q_2_min = request.data['formData']['after_tax_mrgn_avg_lst_q_2_min'],
                    after_tax_mrgn_avg_lst_q_2_max = request.data['formData']['after_tax_mrgn_avg_lst_q_2_max'],
                    after_tax_mrgn_avg_lst_q_3_min = request.data['formData']['after_tax_mrgn_avg_lst_q_3_min'],
                    after_tax_mrgn_avg_lst_q_3_max = request.data['formData']['after_tax_mrgn_avg_lst_q_3_max'],
                    after_tax_mrgn_avg_lst_q_4_min = request.data['formData']['after_tax_mrgn_avg_lst_q_4_min'],
                    after_tax_mrgn_avg_lst_q_4_max = request.data['formData']['after_tax_mrgn_avg_lst_q_4_max'],
                    after_tax_mrgn_avg_lst_q_5_min = request.data['formData']['after_tax_mrgn_avg_lst_q_5_min'],
                    after_tax_mrgn_avg_lst_q_5_max = request.data['formData']['after_tax_mrgn_avg_lst_q_5_max'],
                    after_tax_mrgn_avg_lst_q_6_min = request.data['formData']['after_tax_mrgn_avg_lst_q_6_min'],
                    after_tax_mrgn_avg_lst_q_6_max = request.data['formData']['after_tax_mrgn_avg_lst_q_6_max'],
                    opr_sys_ids_median_is_bigger = request.data['formData']['opr_sys_ids_median_is_bigger'],
                    profile_mrgn_ids_median_is_bigger = request.data['formData']['profile_mrgn_ids_median_is_bigger'],
                    p_e_current_min = request.data['formData']['p_e_current_min'],
                    p_e_current_max = request.data['formData']['p_e_current_max'],
                    p_e_est_min = request.data['formData']['p_e_est_min'],
                    p_e_est_max = request.data['formData']['p_e_est_max'],
                    p_e_vs_sp_500_min = request.data['formData']['p_e_vs_sp_500_min'],
                    p_e_vs_sp_500_max = request.data['formData']['p_e_vs_sp_500_max'],
                    p_e_percent_rnk_min = request.data['formData']['p_e_percent_rnk_min'],
                    p_e_percent_rnk_max = request.data['formData']['p_e_percent_rnk_max'],
                    p_e_percent_rnk_in_grp_min = request.data['formData']['p_e_percent_rnk_in_grp_min'],
                    p_e_percent_rnk_in_grp_max = request.data['formData']['p_e_percent_rnk_in_grp_max'],
                    p_e_avg_5y_is_bigger = request.data['formData']['p_e_avg_5y_is_bigger'],
                    peg_min = request.data['formData']['peg_min'],
                    peg_max = request.data['formData']['peg_max'],
                    peg_divid_adj_min = request.data['formData']['peg_divid_adj_min'],
                    peg_divid_adj_max = request.data['formData']['peg_divid_adj_max'],
                    cf_v_eps_diff_lst_rpt_q_min = request.data['formData']['cf_v_eps_diff_lst_rpt_q_min'],
                    cf_v_eps_diff_lst_rpt_q_max = request.data['formData']['cf_v_eps_diff_lst_rpt_q_max'],
                    cf_v_eps_diff_lst_rpt_y_min = request.data['formData']['cf_v_eps_diff_lst_rpt_y_min'],
                    cf_v_eps_diff_lst_rpt_y_max = request.data['formData']['cf_v_eps_diff_lst_rpt_y_max'],
                    roe_5y_avg_min = request.data['formData']['roe_5y_avg_min'],
                    roe_5y_avg_max = request.data['formData']['roe_5y_avg_max'],
                    debit_lst_rpt_y_min = request.data['formData']['debit_lst_rpt_y_min'],
                    debit_lst_rpt_y_max = request.data['formData']['debit_lst_rpt_y_max'],
                    current_ratio_min = request.data['formData']['current_ratio_min'],
                    current_ratio_max = request.data['formData']['current_ratio_max'],
                    price_to_sales_min = request.data['formData']['price_to_sales_min'],
                    price_to_sales_max = request.data['formData']['price_to_sales_max'],
                    price_to_book_value_min = request.data['formData']['price_to_book_value_min'],
                    price_to_book_value_max = request.data['formData']['price_to_book_value_max'],
                    price_to_cash_flow_min = request.data['formData']['price_to_cash_flow_min'],
                    price_to_cash_flow_max = request.data['formData']['price_to_cash_flow_max'],
                    epr_val_free_cash_flow_min = request.data['formData']['epr_val_free_cash_flow_min'],
                    epr_val_free_cash_flow_max = request.data['formData']['epr_val_free_cash_flow_max'],
                    long_term_debit_work_cap_min = request.data['formData']['long_term_debit_work_cap_min'],
                    long_term_debit_work_cap_max = request.data['formData']['long_term_debit_work_cap_max'],
                    tot_lia_tot_assn = request.data['formData']['tot_lia_tot_assn'],

                    exchange = request.data['formData']['exchange'],

                    adr = request.data['formData']['adr'],
                    etf_closed_end_fund = request.data['formData']['etf_closed_end_fund'],
                    etf = request.data['formData']['etf'],
                    options = request.data['formData']['options'],
                    ipo_date_min = request.data['formData']['ipo_date_min'],
                    ipo_date_max = request.data['formData']['ipo_date_max'],
                    incorporation_date_min = request.data['formData']['incorporation_date_min'],
                    incorporation_date_max = request.data['formData']['incorporation_date_max'],
                    headquarters_city = request.data['formData']['headquarters_city'],
                    new_ceo_in_lst_12_m = request.data['formData']['new_ceo_in_lst_12_m'],
                    ibd_article_lst_2_y = request.data['formData']['ibd_article_lst_2_y'],
                    ibd_50 = request.data['formData']['ibd_50'],
                    ibd_new_america = request.data['formData']['ibd_new_america'],
                    ibd_85 = request.data['formData']['ibd_85'],
                    ibd_big_cap_20 = request.data['formData']['ibd_big_cap_20']
                    
                )
                screenlist.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ScreenresultViewSet(viewsets.ModelViewSet):                                                                                                                                                                                                                                                                                                                                                           
    queryset = Indicators.objects.all()

    @api_view(['GET', 'POST'])
    def screen_result(request):
        if request.method == 'GET':

            indicators = Indicators.objects.all()
            serializer = ScreenresultSerializer(indicators, many=True)

            return Response(serializer.data)
        elif request.method == 'POST':
            serializer = ScreenresultSerializer(data=request.data)
            if serializer.is_valid():
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            
class TrendViewSet(viewsets.ModelViewSet):                                                                                                                                                                                                                                                                                                                                                           
    queryset = Trend.objects.all()

    @api_view(['GET', 'POST'])
    def trend(request):
        if request.method == 'GET':

            trend = Trend.objects.all()
            serializer = TrendSerializer(trend, many=True)

            return Response(serializer.data)
        elif request.method == 'POST':
            serializer = TrendSerializer(data=request.data)
            if serializer.is_valid():
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TrendWideViewSet(viewsets.ModelViewSet):                                                                                                                                                                                                                                                                                                                                                           
    queryset = TrendWide.objects.all()

    @api_view(['GET', 'POST'])
    
    def trend_wide(request):
        if request.method == 'GET':

            trend_wide = TrendWide.objects.all()
            serializer = TrendWideSerializer(trend_wide, many=True)

            return Response(serializer.data)
        elif request.method == 'POST':
            serializer = TrendWideSerializer(data=request.data)
            if serializer.is_valid():
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
class PowerPlayViewSet(viewsets.ModelViewSet):                                                                                                                                                                                                                                                                                                                                                           
    queryset = PowerPlay.objects.all()

    @api_view(['GET', 'POST'])
    
    def power_play(request):
        if request.method == 'GET':

            power_play = PowerPlay.objects.all()
            serializer = PowerPlaySerializer(power_play, many=True)

            return Response(serializer.data)
        elif request.method == 'POST':
            serializer = PowerPlaySerializer(data=request.data)
            if serializer.is_valid():
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)