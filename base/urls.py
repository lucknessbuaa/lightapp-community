from django.conf.urls import patterns, include, url
from django.shortcuts import render, redirect
from django.contrib import admin
from django.contrib.sitemaps import FlatPageSitemap
from django.contrib.sitemaps.views import sitemap

sitemaps = {
    'flatpages': FlatPageSitemap
}

def index(request):
    return render(request, 'index.html')

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'base.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', index),
    url(r'^oauth/', include('social_auth.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^app/', include('app.urls')),

    url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps},
                name='django.contrib.sitemaps.views.sitemap'),
)
