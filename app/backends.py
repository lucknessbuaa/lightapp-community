import logging
import requests

from backend.models import Account
from django.contrib.auth.models import User

logger = logging.getLogger(__name__)

class BaiduBackend(object):

    def authenticate(self, token=None):
        r = requests.get('https://openapi.baidu.com/rest/2.0/passport/users/getLoggedInUser', params={
            'access_token': token
        })

        if r.status_code != 200:
            logger.warn('not authenticated')
            return None

        info = r.json()
        logger.warn(info)
        account = Account.objects.ensureAccount(info)
        logger.debug(account.user)
        logger.debug(account.user.is_authenticated())

        return account.user

    def get_user(self, user_id):
        return User.objects.get(pk=user_id)

