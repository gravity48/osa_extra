# Generated by Django 3.2 on 2022-12-19 12:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('index', '0011_alter_projectsettings_log_file'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='projectsettings',
            table=None,
        ),
        migrations.CreateModel(
            name='UserRequestsList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('request', models.CharField(max_length=1000)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]