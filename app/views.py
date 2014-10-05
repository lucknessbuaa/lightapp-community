# coding: utf-8

from django.shortcuts import render
from django.forms.models import model_to_dict
from django_render_json import json as r_json

import truncate
from backend.models import News


def index(request):
    return render(request, 'app/index.html')


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

