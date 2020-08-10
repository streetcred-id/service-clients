# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class VerificationPolicyAttributeContract(Model):
    """VerificationPolicyAttributeContract.

    All required parameters must be populated in order to send to Azure.

    :param policy_name: Required.
    :type policy_name: str
    :param attribute_names: Required.
    :type attribute_names: list[str]
    :param restrictions:
    :type restrictions:
     list[~credentials.models.VerificationPolicyRestriction]
    """

    _validation = {
        'policy_name': {'required': True},
        'attribute_names': {'required': True},
    }

    _attribute_map = {
        'policy_name': {'key': 'policyName', 'type': 'str'},
        'attribute_names': {'key': 'attributeNames', 'type': '[str]'},
        'restrictions': {'key': 'restrictions', 'type': '[VerificationPolicyRestriction]'},
    }

    def __init__(self, **kwargs):
        super(VerificationPolicyAttributeContract, self).__init__(**kwargs)
        self.policy_name = kwargs.get('policy_name', None)
        self.attribute_names = kwargs.get('attribute_names', None)
        self.restrictions = kwargs.get('restrictions', None)
