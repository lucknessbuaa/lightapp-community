from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('app.views',
    url(r'^$', 'index'),
    url(r'^api/news$', 'news'),
)
