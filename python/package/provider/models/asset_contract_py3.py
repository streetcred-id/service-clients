# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class AssetContract(Model):
    """Asset contract.

    :param public_uri: Public URI
    :type public_uri: str
    """

    _attribute_map = {
        'public_uri': {'key': 'publicUri', 'type': 'str'},
    }

    def __init__(self, *, public_uri: str=None, **kwargs) -> None:
        super(AssetContract, self).__init__(**kwargs)
        self.public_uri = public_uri
