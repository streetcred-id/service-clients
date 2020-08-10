# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class CredentialContract(Model):
    """CredentialContract.

    :param credential_id:
    :type credential_id: str
    :param state: Possible values include: 'Offered', 'Requested', 'Issued',
     'Rejected', 'Revoked'
    :type state: str or ~wallet.models.enum
    :param connection_id:
    :type connection_id: str
    :param definition_id:
    :type definition_id: str
    :param schema_id:
    :type schema_id: str
    :param offer_data:
    :type offer_data: str
    :param offer_url:
    :type offer_url: str
    :param issued_at_utc:
    :type issued_at_utc: datetime
    :param accepted_at_utc:
    :type accepted_at_utc: datetime
    :param values:
    :type values: dict[str, str]
    """

    _attribute_map = {
        'credential_id': {'key': 'credentialId', 'type': 'str'},
        'state': {'key': 'state', 'type': 'str'},
        'connection_id': {'key': 'connectionId', 'type': 'str'},
        'definition_id': {'key': 'definitionId', 'type': 'str'},
        'schema_id': {'key': 'schemaId', 'type': 'str'},
        'offer_data': {'key': 'offerData', 'type': 'str'},
        'offer_url': {'key': 'offerUrl', 'type': 'str'},
        'issued_at_utc': {'key': 'issuedAtUtc', 'type': 'iso-8601'},
        'accepted_at_utc': {'key': 'acceptedAtUtc', 'type': 'iso-8601'},
        'values': {'key': 'values', 'type': '{str}'},
    }

    def __init__(self, *, credential_id: str=None, state=None, connection_id: str=None, definition_id: str=None, schema_id: str=None, offer_data: str=None, offer_url: str=None, issued_at_utc=None, accepted_at_utc=None, values=None, **kwargs) -> None:
        super(CredentialContract, self).__init__(**kwargs)
        self.credential_id = credential_id
        self.state = state
        self.connection_id = connection_id
        self.definition_id = definition_id
        self.schema_id = schema_id
        self.offer_data = offer_data
        self.offer_url = offer_url
        self.issued_at_utc = issued_at_utc
        self.accepted_at_utc = accepted_at_utc
        self.values = values
