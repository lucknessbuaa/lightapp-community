import uuid
import logging
import json 
from urllib import urlencode

from social_auth.backends import BaseOAuth2, OAuthBackend
import requests


logger = logging.getLogger(__name__)


class QQBackend(OAuthBackend):
    name = 'qq'
    EXTRA_DATA = [
        ('figureurl_2', 'figureurl_2'),
    ]

    def get_user_id(self, details, response):
        return 'QQ' + uuid.uuid4()

    def get_user_details(self, response):
        return {
            'username': response.get('nickname', '') + uuid.uuid4(),
            'first_name': response.get('nickname', '')
        }


class QQAuth(BaseOAuth2):
    AUTHORIZATION_URL = 'https://graph.qq.com/oauth2.0/authorize'
    ACCESS_TOKEN_URL = 'https://graph.qq.com/oauth2.0/token'
    AUTH_BACKEND = QQBackend
    SETTINGS_KEY_NAME = 'QQ_CLIENT_KEY'
    SETTINGS_SECRET_NAME = 'QQ_CLIENT_SECRET'
    REDIRECT_STATE = False

    def user_data(self, access_token, *args, **kwargs):
        url = 'https://graph.qq.com/user/get_user_info'
        try:
            data = requests.get(url, params={
                'access_token': access_token
            }).json()
            logger.debug(data)
            return data
        except (ValueError, KeyError, IOError):
            logger.exception()
            return None


BACKENDS = {
    'qq': QQAuth
}
