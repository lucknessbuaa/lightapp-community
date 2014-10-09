from social_auth.backends import BaseOAuth2

class BaiduBackend(BaseOAuth2):
    name = 'baidu'

    ID_KEY = 'uid'
    AUTHORIZATION_URL = 'https://openapi.baidu.com/oauth/2.0/authorize'
    ACCESS_TOKEN_URL = 'https://openapi.baidu.com/oauth/2.0/token'
    ACCESS_TOKEN_METHOD = 'GET'
    REDIRECT_STATE = False
    EXTRA_DATA = (
        ('uid', 'uid'),
        ('portrait', 'portrait')
    )

    def get_user_details(self, response):
        return {'username': response.get('username', '')}

    def user_data(self, access_token, *args, **kwargs):
        url = 'https://openapi.baidu.com/rest/2.0/passport/users/getInfo'
        return self.get_json(url, params={'access_token': access_token })
