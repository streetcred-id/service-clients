# encoding: utf-8
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.

module Provider
  module Models
    #
    # Tenant keys
    #
    class TenantKeysContract
      # @return [String] JWT Access Token that authorizes API calls for the
      # organization
      attr_accessor :access_token

      # @return [String] Identifies and authenticates your subscription
      attr_accessor :subscription_key


      #
      # Mapper for TenantKeysContract class as Ruby Hash.
      # This will be used for serialization/deserialization.
      #
      def self.mapper()
        {
          client_side_validation: true,
          required: false,
          serialized_name: 'TenantKeysContract',
          type: {
            name: 'Composite',
            class_name: 'TenantKeysContract',
            model_properties: {
              access_token: {
                client_side_validation: true,
                required: false,
                serialized_name: 'accessToken',
                type: {
                  name: 'String'
                }
              },
              subscription_key: {
                client_side_validation: true,
                required: false,
                serialized_name: 'subscriptionKey',
                type: {
                  name: 'String'
                }
              }
            }
          }
        }
      end
    end
  end
end
