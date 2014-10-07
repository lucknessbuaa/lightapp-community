# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_auto_20141007_1233'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='account',
            field=models.ForeignKey(to='backend.Account', null=True),
        ),
        migrations.AlterField(
            model_name='news',
            name='headline',
            field=models.BooleanField(default=None, verbose_name='\u5934\u6761'),
        ),
    ]
