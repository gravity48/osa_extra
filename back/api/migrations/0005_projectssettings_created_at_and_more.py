# Generated by Django 4.2.1 on 2023-05-19 10:07

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0004_projectssettings_alter_docextensionmodel_extension_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="projectssettings",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True, null=True, verbose_name="proj created at"
            ),
        ),
        migrations.AlterField(
            model_name="projectssettings",
            name="is_start",
            field=models.BooleanField(default=False, verbose_name="proj is started"),
        ),
        migrations.AlterField(
            model_name="projectssettings",
            name="options",
            field=models.JSONField(default=dict, verbose_name="proj options"),
        ),
        migrations.AlterField(
            model_name="projectssettings",
            name="proj_type",
            field=models.CharField(
                choices=[("SR", "Search proj"), ("RF", "Refresh proj")],
                default="SR",
                max_length=100,
                verbose_name="proj type",
            ),
        ),
    ]