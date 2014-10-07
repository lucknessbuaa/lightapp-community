# coding: utf-8
import uuid

from django.db import models
from django.db import transaction
from django.contrib.auth.models import User

# Create your models here.

class AccountManager(models.Manager):

    @transaction.atomic
    def ensureAccount(self, info):
        result = self.filter(baidu_uid=info['uid'])
        if result.count() > 0:
            return result[0];
        
        user = User(username=info['uname'])
        user.save()
        account = Account(user=user, baidu_uid=info['uid'], baidu_name=info['uname'], baidu_portrait=info['portrait'])
        account.save()
        return account;


class Account(models.Model):
    user = models.ForeignKey(User)
    baidu_uid = models.CharField(max_length=255, unique=True)
    baidu_portrait = models.CharField(verbose_name=u'头像', max_length=255)
    baidu_name = models.CharField(verbose_name=u'名字', max_length=255)

    objects = AccountManager()

    @property
    def avatar(self, small=False):
        if small:
            return 'http://tb.himg.baidu.com/sys/portraitn/item/%s' % self.baidu_portrait
        else:
            return 'http://tb.himg.baidu.com/sys/portrait/item/%s' % self.baidu_portrait


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
    headline = models.BooleanField(verbose_name=u'头条', default=None)

    def __unicode__(self):
        return self.title


class Participants(models.Model):
    account = models.ForeignKey(Account)
    news = models.ForeignKey(News)


class Feedback(models.Model):
    message = models.CharField(verbose_name=u'信息', max_length=255)
    account = models.ForeignKey(Account)


