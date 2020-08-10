# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class VerificationPolicyCredentialParameters(Model):
    """VerificationPolicyCredentialParameters.

    :param policy_name:
    :type policy_name: str
    :param credential_id:
    :type credential_id: str
    :param hidden:
    :type hidden: bool
    """

    _attribute_map = {
        'policy_name': {'key': 'policyName', 'type': 'str'},
        'credential_id': {'key': 'credentialId', 'type': 'str'},
        'hidden': {'key': 'hidden', 'type': 'bool'},
    }

    def __init__(self, *, policy_name: str=None, credential_id: str=None, hidden: bool=None, **kwargs) -> None:
        super(VerificationPolicyCredentialParameters, self).__init__(**kwargs)
        self.policy_name = policy_name
        self.credential_id = credential_id
        self.hidden = hidden
