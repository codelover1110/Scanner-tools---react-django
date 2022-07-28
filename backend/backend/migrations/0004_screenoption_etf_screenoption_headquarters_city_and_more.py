# Generated by Django 4.0.6 on 2022-07-28 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_screenoption_adr_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='screenoption',
            name='etf',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='headquarters_city',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='incorporation_date_max',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='incorporation_date_min',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='ipo_date_max',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='ipo_date_min',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='screenoption',
            name='options',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
    ]
