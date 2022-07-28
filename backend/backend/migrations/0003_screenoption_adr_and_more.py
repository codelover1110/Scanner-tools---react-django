# Generated by Django 4.0.6 on 2022-07-28 01:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_tickers_screenoption_indicators'),
    ]

    operations = [
        migrations.AddField(
            model_name='screenoption',
            name='adr',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_acce_lst_3_q',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_avg_lst_q_2_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_avg_lst_q_2_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_avg_lst_q_3_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_avg_lst_q_3_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_avg_lst_q_4_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_avg_lst_q_4_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_avg_lst_q_5_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_avg_lst_q_5_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_avg_lst_q_6_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_avg_lst_q_6_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_lst_rpt_q_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='after_tax_mrgn_lst_rpt_q_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='avg_true_range_30_d_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='cf_v_eps_diff_lst_rpt_q_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='cf_v_eps_diff_lst_rpt_q_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='cf_v_eps_diff_lst_rpt_y_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='cf_v_eps_diff_lst_rpt_y_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='current_ratio_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='current_ratio_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='davidend_yield_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='davidend_yield_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='debit_lst_rpt_y_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='debit_lst_rpt_y_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='epr_val_free_cash_flow_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='epr_val_free_cash_flow_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='etf_closed_end_fund',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='exchange',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='long_term_debit_work_cap_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='long_term_debit_work_cap_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='opr_sys_ids_median_is_bigger',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='p_e_avg_5y_is_bigger',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='p_e_current_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='p_e_current_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='p_e_est_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='p_e_est_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='p_e_percent_rnk_in_grp_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='p_e_percent_rnk_in_grp_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='p_e_percent_rnk_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='p_e_percent_rnk_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='p_e_vs_sp_500_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='p_e_vs_sp_500_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='peg_divid_adj_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='peg_divid_adj_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='peg_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='peg_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='pre_tax_mrgn_lst_rpty_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='pre_tax_mrgn_lst_rpty_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='price_to_book_value_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='price_to_book_value_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='price_to_cash_flow_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='price_to_cash_flow_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='price_to_sales_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='price_to_sales_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='profile_mrgn_ids_median_is_bigger',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='roe_5y_avg_max',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='roe_5y_avg_min',
            field=models.CharField(blank=True, default='', max_length=10),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='tot_lia_tot_assn',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
    ]
