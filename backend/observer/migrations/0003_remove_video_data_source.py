# Generated by Django 4.0.5 on 2023-08-19 02:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('observer', '0002_video_data_source'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='video',
            name='data_source',
        ),
    ]
