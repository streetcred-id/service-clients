# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class ProofAttributeContract(Model):
    """ProofAttributeContract.

    Variables are only populated by the server, and will be ignored when
    sending a request.

    :param name:
    :type name: str
    :param value:
    :type value: str
    :param attributes:
    :type attributes: dict[str, str]
    :ivar revealed:
    :vartype revealed: bool
    :param self_attested:
    :type self_attested: bool
    :param conditional:
    :type conditional: bool
    """

    _validation = {
        'revealed': {'readonly': True},
    }

    _attribute_map = {
        'name': {'key': 'name', 'type': 'str'},
        'value': {'key': 'value', 'type': 'str'},
        'attributes': {'key': 'attributes', 'type': '{str}'},
        'revealed': {'key': 'revealed', 'type': 'bool'},
        'self_attested': {'key': 'selfAttested', 'type': 'bool'},
        'conditional': {'key': 'conditional', 'type': 'bool'},
    }

    def __init__(self, *, name: str=None, value: str=None, attributes=None, self_attested: bool=None, conditional: bool=None, **kwargs) -> None:
        super(ProofAttributeContract, self).__init__(**kwargs)
        self.name = name
        self.value = value
        self.attributes = attributes
        self.revealed = None
        self.self_attested = self_attested
        self.conditional = conditional
