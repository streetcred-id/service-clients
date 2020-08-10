# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class VerificationPolicyParameters(Model):
    """VerificationPolicyParameters.

    All required parameters must be populated in order to send to Azure.

    :param name: Required.
    :type name: str
    :param version: Required.
    :type version: str
    :param attributes:
    :type attributes:
     list[~credentials.models.VerificationPolicyAttributeContract]
    :param predicates:
    :type predicates:
     list[~credentials.models.VerificationPolicyPredicateContract]
    :param revocation_requirement:
    :type revocation_requirement:
     ~credentials.models.VerificationPolicyRevocationRequirement
    """

    _validation = {
        'name': {'required': True},
        'version': {'required': True},
    }

    _attribute_map = {
        'name': {'key': 'name', 'type': 'str'},
        'version': {'key': 'version', 'type': 'str'},
        'attributes': {'key': 'attributes', 'type': '[VerificationPolicyAttributeContract]'},
        'predicates': {'key': 'predicates', 'type': '[VerificationPolicyPredicateContract]'},
        'revocation_requirement': {'key': 'revocationRequirement', 'type': 'VerificationPolicyRevocationRequirement'},
    }

    def __init__(self, **kwargs):
        super(VerificationPolicyParameters, self).__init__(**kwargs)
        self.name = kwargs.get('name', None)
        self.version = kwargs.get('version', None)
        self.attributes = kwargs.get('attributes', None)
        self.predicates = kwargs.get('predicates', None)
        self.revocation_requirement = kwargs.get('revocation_requirement', None)
