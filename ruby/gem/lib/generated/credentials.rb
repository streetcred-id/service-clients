# encoding: utf-8
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.

require 'uri'
require 'cgi'
require 'date'
require 'json'
require 'base64'
require 'erb'
require 'securerandom'
require 'time'
require 'timeliness'
require 'faraday'
require 'faraday-cookie_jar'
require 'concurrent'
require 'ms_rest'
require 'generated/credentials/module_definition'

module Credentials
  autoload :CredentialsClient,                                  'generated/credentials/credentials_client.rb'

  module Models
    autoload :AttributeFilter,                                    'generated/credentials/models/attribute_filter.rb'
    autoload :RevocationInterval,                                 'generated/credentials/models/revocation_interval.rb'
    autoload :NetworkTxnAgreementContract,                        'generated/credentials/models/network_txn_agreement_contract.rb'
    autoload :ProofAttributeInfo,                                 'generated/credentials/models/proof_attribute_info.rb'
    autoload :ConnectionContract,                                 'generated/credentials/models/connection_contract.rb'
    autoload :ProofPredicateInfo,                                 'generated/credentials/models/proof_predicate_info.rb'
    autoload :CredentialContract,                                 'generated/credentials/models/credential_contract.rb'
    autoload :ProofRequest,                                       'generated/credentials/models/proof_request.rb'
    autoload :VerificationPolicyRestrictionAttribute,             'generated/credentials/models/verification_policy_restriction_attribute.rb'
    autoload :VerificationDefinitionContract,                     'generated/credentials/models/verification_definition_contract.rb'
    autoload :VerificationPolicyAttributeContract,                'generated/credentials/models/verification_policy_attribute_contract.rb'
    autoload :BasicMessageParameters,                             'generated/credentials/models/basic_message_parameters.rb'
    autoload :VerificationPolicyRevocationRequirement,            'generated/credentials/models/verification_policy_revocation_requirement.rb'
    autoload :BasicMessageRecord,                                 'generated/credentials/models/basic_message_record.rb'
    autoload :VerificationPolicyParameters,                       'generated/credentials/models/verification_policy_parameters.rb'
    autoload :BasicMessageContract,                               'generated/credentials/models/basic_message_contract.rb'
    autoload :CredentialDefinitionFromSchemaParameters,           'generated/credentials/models/credential_definition_from_schema_parameters.rb'
    autoload :TenantExtendedInformationContract,                  'generated/credentials/models/tenant_extended_information_contract.rb'
    autoload :SchemaParameters,                                   'generated/credentials/models/schema_parameters.rb'
    autoload :TenantContract,                                     'generated/credentials/models/tenant_contract.rb'
    autoload :AttributeValue,                                     'generated/credentials/models/attribute_value.rb'
    autoload :TenantParameters,                                   'generated/credentials/models/tenant_parameters.rb'
    autoload :AgentEndpoint,                                      'generated/credentials/models/agent_endpoint.rb'
    autoload :IssuerStatusContract,                               'generated/credentials/models/issuer_status_contract.rb'
    autoload :CredentialOfferParameters,                          'generated/credentials/models/credential_offer_parameters.rb'
    autoload :ProofAttributeContract,                             'generated/credentials/models/proof_attribute_contract.rb'
    autoload :VerificationPolicyPredicateContract,                'generated/credentials/models/verification_policy_predicate_contract.rb'
    autoload :ProposedAttribute,                                  'generated/credentials/models/proposed_attribute.rb'
    autoload :CredentialDefinitionContract,                       'generated/credentials/models/credential_definition_contract.rb'
    autoload :ProposedPredicate,                                  'generated/credentials/models/proposed_predicate.rb'
    autoload :SchemaRecord,                                       'generated/credentials/models/schema_record.rb'
    autoload :ProofProposal,                                      'generated/credentials/models/proof_proposal.rb'
    autoload :ConnectionInvitationParameters,                     'generated/credentials/models/connection_invitation_parameters.rb'
    autoload :VerificationContract,                               'generated/credentials/models/verification_contract.rb'
    autoload :VerificationPolicyContract,                         'generated/credentials/models/verification_policy_contract.rb'
    autoload :VerificationParameters,                             'generated/credentials/models/verification_parameters.rb'
    autoload :NetworkContract,                                    'generated/credentials/models/network_contract.rb'
    autoload :VerificationResult,                                 'generated/credentials/models/verification_result.rb'
    autoload :CredentialDefinitionParameters,                     'generated/credentials/models/credential_definition_parameters.rb'
    autoload :WebhookContract,                                    'generated/credentials/models/webhook_contract.rb'
    autoload :VerificationPolicyRestriction,                      'generated/credentials/models/verification_policy_restriction.rb'
    autoload :WebhookParameters,                                  'generated/credentials/models/webhook_parameters.rb'
  end
end
