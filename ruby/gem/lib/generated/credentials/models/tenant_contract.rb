# encoding: utf-8
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.

module Credentials
  module Models
    #
    # Tenant info
    #
    class TenantContract
      # @return [String] The tenant name
      attr_accessor :name

      # @return [String] The image URL
      attr_accessor :image_url

      # @return [NetworkContract]
      attr_accessor :network

      # @return [String] The tenant identifier
      attr_accessor :tenant_id

      # @return [TenantExtendedInformationContract]
      attr_accessor :extended_information


      #
      # Mapper for TenantContract class as Ruby Hash.
      # This will be used for serialization/deserialization.
      #
      def self.mapper()
        {
          client_side_validation: true,
          required: false,
          serialized_name: 'TenantContract',
          type: {
            name: 'Composite',
            class_name: 'TenantContract',
            model_properties: {
              name: {
                client_side_validation: true,
                required: false,
                read_only: true,
                serialized_name: 'name',
                type: {
                  name: 'String'
                }
              },
              image_url: {
                client_side_validation: true,
                required: false,
                serialized_name: 'imageUrl',
                type: {
                  name: 'String'
                }
              },
              network: {
                client_side_validation: true,
                required: false,
                serialized_name: 'network',
                type: {
                  name: 'Composite',
                  class_name: 'NetworkContract'
                }
              },
              tenant_id: {
                client_side_validation: true,
                required: false,
                read_only: true,
                serialized_name: 'tenantId',
                type: {
                  name: 'String'
                }
              },
              extended_information: {
                client_side_validation: true,
                required: false,
                serialized_name: 'extendedInformation',
                type: {
                  name: 'Composite',
                  class_name: 'TenantExtendedInformationContract'
                }
              }
            }
          }
        }
      end
    end
  end
end
