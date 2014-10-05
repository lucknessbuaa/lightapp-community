# coding: utf-8

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

ACTIVITY_CHOICES = (
    ('ad', u'广告'),
    ('activity', u'活动'),
    ('announcement', u'公告')
)

class News(models.Model):
    type = models.CharField(verbose_name=u'类型', choices=ACTIVITY_CHOICES, max_length=20)
    cover = models.URLField(verbose_name=u'封面')
    content = models.TextField(verbose_name=u'内容')
    title = models.CharField(verbose_name=u'标题', max_length=255)
    date = models.DateTimeField(verbose_name=u'创建时间', auto_now=True, editable=False)
    headline = models.BooleanField(verbose_name=u'头条')

    def __unicode__(self):
        return self.title


class Participants(models.Model):
    user = models.ForeignKey(User)
    news = models.ForeignKey(News)


class Feedback(models.Model):
    message = models.CharField(verbose_name=u'信息', max_length=255)
    user = models.ForeignKey(User)


