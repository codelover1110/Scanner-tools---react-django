# Generated by Django 4.0 on 2022-07-22 21:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_alter_screenoption_erns_dued_max_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='screenoption',
            name='rs_line_new_high',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='screenoption',
            name='rs_line_new_low',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
    ]