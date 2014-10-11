from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('app.views',
    url(r'^$', 'index'),
    url(r'^logout$', 'logout'),
    url(r'^api/news$', 'news'),
    url(r'^api/info$', 'info'),
    url(r'^api/feedback$', 'feedback'),
    url(r'^api/signup$', 'signup'),
    url(r'^api/signupActivity$', 'signupActivity'),
)
