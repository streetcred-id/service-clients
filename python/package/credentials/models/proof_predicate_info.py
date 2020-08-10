# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class ProofPredicateInfo(Model):
    """ProofPredicateInfo.

    :param predicate_type:
    :type predicate_type: str
    :param predicate_value:
    :type predicate_value: int
    :param name:
    :type name: str
    :param names:
    :type names: list[str]
    :param restrictions:
    :type restrictions: list[~credentials.models.AttributeFilter]
    :param non_revoked:
    :type non_revoked: ~credentials.models.RevocationInterval
    """

    _attribute_map = {
        'predicate_type': {'key': 'predicateType', 'type': 'str'},
        'predicate_value': {'key': 'predicateValue', 'type': 'int'},
        'name': {'key': 'name', 'type': 'str'},
        'names': {'key': 'names', 'type': '[str]'},
        'restrictions': {'key': 'restrictions', 'type': '[AttributeFilter]'},
        'non_revoked': {'key': 'nonRevoked', 'type': 'RevocationInterval'},
    }

    def __init__(self, **kwargs):
        super(ProofPredicateInfo, self).__init__(**kwargs)
        self.predicate_type = kwargs.get('predicate_type', None)
        self.predicate_value = kwargs.get('predicate_value', None)
        self.name = kwargs.get('name', None)
        self.names = kwargs.get('names', None)
        self.restrictions = kwargs.get('restrictions', None)
        self.non_revoked = kwargs.get('non_revoked', None)
