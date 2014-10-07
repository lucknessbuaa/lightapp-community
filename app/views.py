# coding: utf-8
import logging
from urllib import urlencode

from django.conf import settings
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from django.forms.models import model_to_dict
from django_render_json import json as r_json
from django_render_json import render_json

import truncate
import requests
from django_auth_json import login_required
from backend.models import News, Feedback, Account


logger = logging.getLogger(__name__)

def index(request):
    logger.debug('wtf')
    return render(request, 'app/index.html')


@login_required({'ret_code': 1001})
@r_json
def avatar(request):
    logger.debug(request.user)
    account = Account.objects.get(user=request.user)
    return {
        'ret_code': 0,
        'avatar': account.avatar
    }


def auth(request):
    return redirect('https://openapi.baidu.com/oauth/2.0/authorize?' + urlencode({
        'client_id': settings.BD_CLIENT_ID,
        'response_type': 'code',
        'redirect_uri': settings.BD_REDIRECT_URI
    }))


def callback(request):
    code = request.GET.get('code')
    logger.debug('code!!!: %s' % code)

    r = requests.get('https://openapi.baidu.com/oauth/2.0/token', params={
        'grant_type': 'authorization_code',
        'code': code,
        'client_id': settings.BD_CLIENT_ID,
        'client_secret': settings.BD_CLIENT_SECRET,
        'redirect_uri': settings.BD_REDIRECT_URI
    })
    logger.debug(r.json())
    access_token = r.json()['access_token']

    user = authenticate(token=access_token)
    if user is not None:
        login(request, user)
    else:
        logger.warn("fail to login!!!!!!!!!!!!!")

    return redirect('/app#login')


@r_json
def news(request):

    def map_news(item):
        dict = model_to_dict(item)
        dict['date'] = item.date.strftime('%Y-%m-%d')
        dict['desc'] = truncate(item.content, 20)
        dict['tags'] = [u'公告']
        return dict

    return {
        'ret_code': 0,
        'news': map(map_news, News.objects.all().order_by('-headline'))
    }


@csrf_exempt
@r_json
def feedback(request):
    # TODO implement it!
    return {
        'ret_code': 0
    }


@csrf_exempt
@r_json
def signup(request):
    # TODO implement it!
    return {
        'ret_code': 0
    }


@csrf_exempt
@r_json
def signupActivity(request):
    # TODO implement it!
    return {
        'ret_code': 0
    }
