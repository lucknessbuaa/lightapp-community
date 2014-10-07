# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('backend', '0003_news_headline'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('baidu_uid', models.CharField(unique=True, max_length=255)),
                ('baidu_portrait', models.CharField(max_length=255, verbose_name='\u5934\u50cf')),
                ('baidu_name', models.CharField(max_length=255, verbose_name='\u540d\u5b57')),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RemoveField(
            model_name='feedback',
            name='user',
        ),
        migrations.RemoveField(
            model_name='participants',
            name='user',
        ),
        migrations.AddField(
            model_name='feedback',
            name='account',
            field=models.ForeignKey(default=None, to='backend.Account'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='participants',
            name='account',
            field=models.ForeignKey(default=None, to='backend.Account'),
            preserve_default=False,
        ),
    ]
