# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='date',
            field=models.DateTimeField(default=datetime.date(2014, 10, 5), verbose_name='\u521b\u5efa\u65f6\u95f4', auto_now=True),
            preserve_default=False,
        ),
    ]
