# Generated by Django 3.2 on 2022-12-20 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0012_auto_20221219_1255'),
    ]

    operations = [
        migrations.AddField(
            model_name='userrequestslist',
            name='date',
            field=models.DateTimeField(default='1992-09-09'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userrequestslist',
            name='validate_data',
            field=models.JSONField(default=dict),
        ),
    ]