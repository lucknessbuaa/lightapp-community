# coding: utf-8
import logging
from urllib import urlencode

from django.conf import settings
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout as _logout
from django.forms.models import model_to_dict
from django_render_json import json as r_json
from django_render_json import render_json

import truncate
import requests
from django_auth_json import login_required
from backend.models import News, Feedback, Participants, Resume
from social_auth.db.django_models import UserSocialAuth


logger = logging.getLogger(__name__)


def avatar(user):
    try:
        social = UserSocialAuth.objects.get(user=user)
        if social.provider == 'baidu':
            return 'http://tb.himg.baidu.com/sys/portrait/item/{portrait}' % social.extra_data
        elif social.provider == 'weibo':
            return social.extra_data['profile_image_url']
        elif social.provider == 'qq':
            return social.extra_data['figureurl_2']
        else:
            return None
    except: 
        logger.exception('user not found from social auth')
        return None

def fullname(user):
    if user.first_name or user.last_name:
        if user.first_name and user.last_name:
            return user.first_name + ' ' + user.last_name
        else:
            return user.first_name if user.first_name else user.last_name
    else:
        return user.username


def index(request):
    return render(request, 'app/index.html')


@login_required({'ret_code': 1001})
@r_json
def info(request):
    logger.debug('userid %d' % request.user.pk)

    return {
        'ret_code': 0,
        'avatar': avatar(request.user),
        'username': fullname(request.user)
    }


def logout(request):
    _logout(request)
    return redirect('/app')


@r_json
def news(request):
    def map_news(item):
        dict = model_to_dict(item)
        dict['date'] = item.date.strftime('%Y-%m-%d')
        dict['desc'] = truncate(item.content, 20)
        dict['tags'] = item.tags 
        return dict

    return {
        'ret_code': 0,
        'news': map(map_news, News.objects.all().order_by('-headline'))
    }


@csrf_exempt
@r_json
def feedback(request):
    message = request.POST.get('message', None)
    if not message: 
        return {
            'ret_code': 1001
        }

    Feedback(user=request.user, message=message).save()

    return {
        'ret_code': 0
    }


@csrf_exempt
@login_required({'ret_code': 1001})
@r_json
def signup(request):
    name = request.POST.get('name', None)
    message = request.POST.get('message', None)
    if not name or not message:
        return {
            'ret_code': 2001
        }

    Resume(user=request.user, name=name, message=message).save()

    return {
        'ret_code': 0
    }


@csrf_exempt
@login_required({'ret_code': 1001})
@r_json
def signupActivity(request):
    newsId = request.POST.get('id', None)
    name = request.POST.get('name', None)
    message = request.POST.get('message', None)
    if not name or not message or not newsId:
        return {
            'ret_code': 2001
        }

    news = News.objects.get(pk=newsId)
    Participants(user=request.user, news=news, name=name, message=message).save()

    return {
        'ret_code': 0
    }
