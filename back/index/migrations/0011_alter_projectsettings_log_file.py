# Generated by Django 3.2 on 2022-11-28 12:13

import django.core.files.storage
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0010_documentstatus'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectsettings',
            name='log_file',
            field=models.FileField(blank=True, null=True, storage=django.core.files.storage.FileSystemStorage(location='/home/gravity/Work/PycharmProjects/get_phone_vue/back/logfiles'), upload_to=''),
        ),
    ]