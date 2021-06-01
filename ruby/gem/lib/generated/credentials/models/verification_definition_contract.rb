# encoding: utf-8
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.

module Credentials
  module Models
    #
    # Model object.
    #
    #
    class VerificationDefinitionContract
      # @return [String] The verification identifier
      attr_accessor :id

      # @return [ProofRequest]
      attr_accessor :proof_request


      #
      # Mapper for VerificationDefinitionContract class as Ruby Hash.
      # This will be used for serialization/deserialization.
      #
      def self.mapper()
        {
          client_side_validation: true,
          required: false,
          serialized_name: 'VerificationDefinitionContract',
          type: {
            name: 'Composite',
            class_name: 'VerificationDefinitionContract',
            model_properties: {
              id: {
                client_side_validation: true,
                required: false,
                serialized_name: 'id',
                type: {
                  name: 'String'
                }
              },
              proof_request: {
                client_side_validation: true,
                required: false,
                serialized_name: 'proofRequest',
                type: {
                  name: 'Composite',
                  class_name: 'ProofRequest'
                }
              }
            }
          }
        }
      end
    end
  end
end
