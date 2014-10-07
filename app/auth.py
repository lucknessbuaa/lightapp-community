import logging

from backend.models import Account


logger = logging.getLogger(__name__)

class MyBackend(object):
    def authenticate(self, username=None):
        logger.debug('username: %s' % username)
        accounts = Account.objects.filter(user__username=username)
        return accounts[0].user if accounts.count() > 0 else None

