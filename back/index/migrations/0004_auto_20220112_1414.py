# Generated by Django 3.1.6 on 2022-01-12 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0003_projectsettings_time_processing'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectsettings',
            name='thread_count',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='projectsettings',
            name='time_processing',
            field=models.IntegerField(default=60),
        ),
    ]