# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


# class AlembicVersion(models.Model):
#     version_num = models.CharField(primary_key=True, max_length=32)
#
#     class Meta:
#         managed = False
#         db_table = 'alembic_version'


# class Bars(models.Model):
#     date = models.DateField(primary_key=True)
#     ticker_symbol = models.ForeignKey('Tickers', models.DO_NOTHING, db_column='ticker_symbol')
#     o = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
#     h = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
#     l = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
#     c = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
#     v = models.DecimalField(max_digits=20, decimal_places=6, blank=True, null=True)
#     adj_o = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
#     adj_h = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
#     adj_l = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
#     adj_c = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
#     adj_v = models.DecimalField(max_digits=20, decimal_places=6, blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'bars'
#         unique_together = (('date', 'ticker_symbol'),)
#
#
# class CashFlowStatements(models.Model):
#     symbol = models.CharField(primary_key=True, max_length=40)
#     date = models.DateField(blank=True, null=True)
#     reportedcurrency = models.CharField(db_column='reportedCurrency', max_length=40, blank=True, null=True)  # Field name made lowercase.
#     fillingdate = models.DateField(db_column='fillingDate', blank=True, null=True)  # Field name made lowercase.
#     period = models.BigIntegerField(blank=True, null=True)
#     netincome = models.DecimalField(db_column='netIncome', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     changeinworkingcapital = models.DecimalField(db_column='changeInWorkingCapital', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     othernoncashitems = models.DecimalField(db_column='otherNonCashItems', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     netcashusedforinvestingactivites = models.DecimalField(db_column='netCashUsedForInvestingActivites', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     dividendspaid = models.DecimalField(db_column='dividendsPaid', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     netcashusedprovidedbyfinancingactivities = models.DecimalField(db_column='netCashUsedProvidedByFinancingActivities', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     netchangeincash = models.DecimalField(db_column='netChangeInCash', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     cashatendofperiod = models.DecimalField(db_column='cashAtEndOfPeriod', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     cashatbeginningofperiod = models.DecimalField(db_column='cashAtBeginningOfPeriod', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     operatingcashflow = models.DecimalField(db_column='operatingCashFlow', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     capitalexpenditure = models.DecimalField(db_column='capitalExpenditure', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     freecashflow = models.DecimalField(db_column='freeCashFlow', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#
#     class Meta:
#         managed = False
#         db_table = 'cash_flow_statements'
#
#
# class IncomeStatements(models.Model):
#     symbol = models.CharField(primary_key=True, max_length=40)
#     date = models.DateField(blank=True, null=True)
#     reportedcurrency = models.CharField(db_column='reportedCurrency', max_length=40, blank=True, null=True)  # Field name made lowercase.
#     fillingdate = models.DateField(db_column='fillingDate', blank=True, null=True)  # Field name made lowercase.
#     period = models.BigIntegerField(blank=True, null=True)
#     revenue = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
#     costofrevenue = models.DecimalField(db_column='costOfRevenue', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     grossprofit = models.DecimalField(db_column='grossProfit', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     researchanddevelopmentexpenses = models.DecimalField(db_column='researchAndDevelopmentExpenses', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     sellingandmarketingexpenses = models.DecimalField(db_column='sellingAndMarketingExpenses', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     sellinggeneralandadministrativeexpenses = models.DecimalField(db_column='sellingGeneralAndAdministrativeExpenses', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     otherexpenses = models.DecimalField(db_column='otherExpenses', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     operatingexpenses = models.DecimalField(db_column='operatingExpenses', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     interestexpense = models.DecimalField(db_column='interestExpense', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     depreciationandamortization = models.DecimalField(db_column='depreciationAndAmortization', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     ebit = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
#     ebitda = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
#     operatingincome = models.DecimalField(db_column='operatingIncome', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     totalotherincomeexpensesnet = models.DecimalField(db_column='totalOtherIncomeExpensesNet', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     incomebeforetax = models.DecimalField(db_column='incomeBeforeTax', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     incometaxexpense = models.DecimalField(db_column='incomeTaxExpense', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     netincome = models.DecimalField(db_column='netIncome', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#
#     class Meta:
#         managed = False
#         db_table = 'income_statements'
#
#
class Indicators(models.Model):
    ticker_symbol = models.OneToOneField('Tickers', models.DO_NOTHING, db_column='ticker_symbol', primary_key=True)
    date_populated = models.DateField(blank=True, null=True)
    rs = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
    bband_gap = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
    will_r = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
    er = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
    grade = models.CharField(max_length=255, blank=True, null=True)
    events = models.CharField(max_length=255, blank=True, null=True)
    c = models.DecimalField(max_digits=15, decimal_places=6, blank=True, null=True)
    v = models.DecimalField(max_digits=20, decimal_places=6, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'indicators'
#
#
# class PowerPlay(models.Model):
#     ticker_symbol = models.OneToOneField('Tickers', models.DO_NOTHING, db_column='ticker_symbol', primary_key=True)
#     date_populated = models.DateField(blank=True, null=True)
#     first = models.IntegerField()
#     second = models.IntegerField()
#     third = models.IntegerField()
#     fourth = models.IntegerField()
#     fifth = models.IntegerField()
#     sixth = models.IntegerField()
#     seventh = models.IntegerField()
#     eighth = models.IntegerField()
#
#     class Meta:
#         managed = False
#         db_table = 'power_play'
#
#
# class Quotes(models.Model):
#     symbol = models.CharField(primary_key=True, max_length=40)
#     name = models.CharField(max_length=255, blank=True, null=True)
#     changespercentage = models.DecimalField(db_column='changesPercentage', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     change = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
#     daylow = models.DecimalField(db_column='dayLow', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     dayhigh = models.DecimalField(db_column='dayHigh', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     yearhigh = models.DecimalField(db_column='yearHigh', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     yearlow = models.DecimalField(db_column='yearLow', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     marketcap = models.DecimalField(db_column='marketCap', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     priceavg50 = models.DecimalField(db_column='priceAvg50', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     priceavg200 = models.DecimalField(db_column='priceAvg200', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     volume = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
#     avgvolume = models.DecimalField(db_column='avgVolume', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     exchange = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
#     open = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
#     previousclose = models.DecimalField(db_column='previousClose', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     eps = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
#     pe = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
#     earningsannouncement = models.DecimalField(db_column='earningsAnnouncement', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     sharesoutstanding = models.DecimalField(db_column='sharesOutstanding', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     timestamp = models.DateTimeField(blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'quotes'
#
#
# class Searches(models.Model):
#     symbol = models.CharField(primary_key=True, max_length=40)
#     name = models.CharField(max_length=255, blank=True, null=True)
#     currency = models.CharField(max_length=255, blank=True, null=True)
#     stockexchange = models.CharField(db_column='stockExchange', max_length=255, blank=True, null=True)  # Field name made lowercase.
#     exchangeshortname = models.CharField(db_column='exchangeShortName', max_length=255, blank=True, null=True)  # Field name made lowercase.
#     sector = models.CharField(max_length=255, blank=True, null=True)
#     industry = models.CharField(max_length=255, blank=True, null=True)
#     country = models.CharField(max_length=255, blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'searches'
#
#
# class ShareOwnerships(models.Model):
#     symbol = models.CharField(primary_key=True, max_length=40)
#     institutions = models.DecimalField(max_digits=25, decimal_places=6, blank=True, null=True)
#     individualinsiders = models.DecimalField(db_column='individualInsiders', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     generalpublic = models.DecimalField(db_column='generalPublic', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     privatecompanies = models.DecimalField(db_column='privateCompanies', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     publiccompanies = models.DecimalField(db_column='publicCompanies', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     stateorgovernment = models.DecimalField(db_column='stateOrGovernment', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     employeesharescheme = models.DecimalField(db_column='employeeShareScheme', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     firmsvcpe = models.DecimalField(db_column='firmsVCPE', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     hedgefunds = models.DecimalField(db_column='hedgeFunds', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     sovereignwealthfunds = models.DecimalField(db_column='sovereignWealthFunds', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#     companycontrolledfoundation = models.DecimalField(db_column='companyControlledFoundation', max_digits=25, decimal_places=6, blank=True, null=True)  # Field name made lowercase.
#
#     class Meta:
#         managed = False
#         db_table = 'share_ownerships'
#
#
class Tickers(models.Model):
    symbol = models.CharField(primary_key=True, max_length=40)
    exchange = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tickers'
        unique_together = (('symbol', 'exchange'),)
#
#
# class Trend(models.Model):
#     ticker_symbol = models.OneToOneField(Tickers, models.DO_NOTHING, db_column='ticker_symbol', primary_key=True)
#     date_populated = models.DateField(blank=True, null=True)
#     first = models.IntegerField()
#     second = models.IntegerField()
#     third = models.IntegerField()
#     fourth = models.IntegerField()
#     fifth = models.IntegerField()
#     sixth = models.IntegerField()
#     seventh = models.IntegerField()
#     eighth = models.IntegerField()
#
#     class Meta:
#         managed = False
#         db_table = 'trend'
#
#
# class TrendWide(models.Model):
#     ticker_symbol = models.OneToOneField(Tickers, models.DO_NOTHING, db_column='ticker_symbol', primary_key=True)
#     date_populated = models.DateField(blank=True, null=True)
#     first = models.IntegerField()
#     second = models.IntegerField()
#     third = models.IntegerField()
#     fourth = models.IntegerField()
#     fifth = models.IntegerField()
#     sixth = models.IntegerField()
#     seventh = models.IntegerField()
#
#     class Meta:
#         managed = False
#         db_table = 'trend_wide'
