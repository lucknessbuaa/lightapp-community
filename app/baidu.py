from urllib import urlencode

try:
    import json as simplejson
except ImportError:
    try:
        import simplejson
    except ImportError:
        from django.utils import simplejson

from social_auth.backends import BaseOAuth2, OAuthBackend
from social_auth.utils import dsa_urlopen


class BaiduBackend(OAuthBackend):
    name = 'baidu'
    EXTRA_DATA = [
        ('portrait', 'portrait'),
    ]

    def get_user_id(self, details, response):
        return response['userid']

    def get_user_details(self, response):
        return {'username': response.get('username', '')}


class BaiduAuth(BaseOAuth2):
    AUTHORIZATION_URL = 'https://openapi.baidu.com/oauth/2.0/authorize'
    ACCESS_TOKEN_URL = 'https://openapi.baidu.com/oauth/2.0/token'
    AUTH_BACKEND = BaiduBackend
    SETTINGS_KEY_NAME = 'BAIDU_CLIENT_KEY'
    SETTINGS_SECRET_NAME = 'BAIDU_CLIENT_SECRET'
    REDIRECT_STATE = False

    def user_data(self, access_token, *args, **kwargs):
        data = {'access_token': access_token}
        url = 'https://openapi.baidu.com/rest/2.0/passport/users/getInfo' + urlencode(data)

        try:
            return json.loads(dsa_urlopen(url).read())
        except (ValueError, KeyError, IOError):
            return None


BACKENDS = {
    'baidu': BaiduAuth
}