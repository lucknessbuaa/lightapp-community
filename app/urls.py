from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('app.views',
    url(r'^$', 'index'),
    url(r'callback^$', 'callback'),
    url(r'^api/news$', 'news'),
    url(r'^api/feedback$', 'feedback'),
    url(r'^api/signup$', 'signup'),
    url(r'^api/signupActivity$', 'signupActivity'),
)
