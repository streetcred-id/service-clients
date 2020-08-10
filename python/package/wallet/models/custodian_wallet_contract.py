# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class CustodianWalletContract(Model):
    """Wallet information.

    :param wallet_id: The wallet identifier
    :type wallet_id: str
    :param name: The wallet name
    :type name: str
    """

    _attribute_map = {
        'wallet_id': {'key': 'walletId', 'type': 'str'},
        'name': {'key': 'name', 'type': 'str'},
    }

    def __init__(self, **kwargs):
        super(CustodianWalletContract, self).__init__(**kwargs)
        self.wallet_id = kwargs.get('wallet_id', None)
        self.name = kwargs.get('name', None)
