# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20141007_2156'),
    ]

    operations = [
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('message', models.CharField(max_length=255, null=True, verbose_name='\u4fe1\u606f')),
                ('name', models.CharField(max_length=255, null=True, verbose_name='\u59d3\u540d')),
                ('account', models.ForeignKey(to='backend.Account', null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='participants',
            name='message',
            field=models.CharField(max_length=255, null=True, verbose_name='\u4fe1\u606f'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='participants',
            name='name',
            field=models.CharField(max_length=255, null=True, verbose_name='\u59d3\u540d'),
            preserve_default=True,
        ),
    ]
