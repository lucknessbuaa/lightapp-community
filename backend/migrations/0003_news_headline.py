# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_news_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='headline',
            field=models.BooleanField(default=True, verbose_name='\u5934\u6761'),
            preserve_default=False,
        ),
    ]
