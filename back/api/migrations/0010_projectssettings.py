# Generated by Django 3.2 on 2022-12-12 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_settingsmodel_db_ip'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectsSettings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('proj_type', models.CharField(max_length=100)),
                ('options', models.JSONField(default={})),
            ],
        ),
    ]