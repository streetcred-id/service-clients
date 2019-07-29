/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";


/**
 * @interface
 * An interface representing IFormFile.
 */
export interface IFormFile {
  /**
   * @member {string} [contentType] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly contentType?: string;
  /**
   * @member {string} [contentDisposition] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly contentDisposition?: string;
  /**
   * @member {{ [propertyName: string]: string[] }} [headers] **NOTE: This
   * property will not be serialized. It can only be populated by the server.**
   */
  readonly headers?: { [propertyName: string]: string[] };
  /**
   * @member {number} [length] **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly length?: number;
  /**
   * @member {string} [name] **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [fileName] **NOTE: This property will not be serialized.
   * It can only be populated by the server.**
   */
  readonly fileName?: string;
}

/**
 * @interface
 * An interface representing NetworkContract.
 * Represents pool network information
 *
 */
export interface NetworkContract {
  /**
   * @member {string} [networkId] Gets or sets the network identifier.
   */
  networkId?: string;
  /**
   * @member {string} [networkName] Gets or sets the name of the network.
   */
  networkName?: string;
  /**
   * @member {string} [genesisTransactions] Gets or sets the genesis
   * transactions.
   */
  genesisTransactions?: string;
  /**
   * @member {number} [poolProtocolVersion] Gets or sets the pool protocol
   * version.
   */
  poolProtocolVersion?: number;
}

/**
 * @interface
 * An interface representing AgentEndpoint.
 */
export interface AgentEndpoint {
  /**
   * @member {string} [did]
   */
  did?: string;
  /**
   * @member {string} [verkey]
   */
  verkey?: string;
  /**
   * @member {string} [uri]
   */
  uri?: string;
}

/**
 * @interface
 * An interface representing ConnectionContract.
 * Connection information
 *
 */
export interface ConnectionContract {
  /**
   * @member {string} [connectionId] Gets or sets the identifier.
   */
  connectionId?: string;
  /**
   * @member {string} [name] Gets or sets the name.
   */
  name?: string;
  /**
   * @member {string} [imageUrl] Gets or sets the image URL.
   */
  imageUrl?: string;
  /**
   * @member {string} [myDid] Gets or sets my did.
   */
  myDid?: string;
  /**
   * @member {string} [theirDid] Gets or sets their did.
   */
  theirDid?: string;
  /**
   * @member {string} [myKey] Gets or sets my key.
   */
  myKey?: string;
  /**
   * @member {string} [theirKey] Gets or sets their key.
   */
  theirKey?: string;
  /**
   * @member {State} [state] Gets or sets the state. Possible values include:
   * 'Invited', 'Negotiating', 'Connected'
   */
  state?: State;
  /**
   * @member {string} [invitation] Gets or sets the invitation.
   */
  invitation?: string;
  /**
   * @member {string} [invitationUrl] Gets or sets the invitation URL.
   */
  invitationUrl?: string;
  /**
   * @member {AgentEndpoint} [endpoint] Gets or sets the endpoint.
   */
  endpoint?: AgentEndpoint;
  /**
   * @member {Date} [createdAtUtc] Gets or sets the date created.
   */
  createdAtUtc?: Date;
}

/**
 * @interface
 * An interface representing ConnectionInvitationParameters.
 */
export interface ConnectionInvitationParameters {
  /**
   * @member {string} [email] Gets or sets the tenant identifier.
   */
  email?: string;
  /**
   * @member {string} [name] Gets or sets the connection identifier.
   */
  name?: string;
  /**
   * @member {boolean} [multiParty] Gets or sets a value indicating whether
   * [multi party].
   */
  multiParty?: boolean;
}

/**
 * @interface
 * An interface representing IdContract.
 * An object identifier
 *
 */
export interface IdContract {
  /**
   * @member {string} [id] Object identifier
   */
  id?: string;
}

/**
 * @interface
 * An interface representing CredentialContract.
 */
export interface CredentialContract {
  /**
   * @member {string} [credentialId]
   */
  credentialId?: string;
  /**
   * @member {State1} [state] Possible values include: 'Offered', 'Requested',
   * 'Issued', 'Rejected', 'Revoked'
   */
  state?: State1;
  /**
   * @member {string} [connectionId]
   */
  connectionId?: string;
  /**
   * @member {string} [definitionId]
   */
  definitionId?: string;
  /**
   * @member {string} [schemaId]
   */
  schemaId?: string;
  /**
   * @member {{ [propertyName: string]: string }} [values]
   */
  values?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing CredentialOfferParameters.
 * Send offer.
 *
 */
export interface CredentialOfferParameters {
  /**
   * @member {string} [definitionId] Gets or sets the credential definition
   * identifier.
   */
  definitionId?: string;
  /**
   * @member {string} [connectionId] Gets or sets their did.
   */
  connectionId?: string;
}

/**
 * @interface
 * An interface representing CredentialDefinitionContract.
 */
export interface CredentialDefinitionContract {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [version]
   */
  version?: string;
  /**
   * @member {string[]} [attributes]
   */
  attributes?: string[];
  /**
   * @member {boolean} [supportsRevocation]
   */
  supportsRevocation?: boolean;
  /**
   * @member {number} [maxCredentialCount]
   */
  maxCredentialCount?: number;
  /**
   * @member {string} [schemaId]
   */
  schemaId?: string;
  /**
   * @member {string} [definitionId]
   */
  definitionId?: string;
}

/**
 * @interface
 * An interface representing CredentialDefinitionParameters.
 * Represents a request object to create new credential definition for an
 * agency
 *
 */
export interface CredentialDefinitionParameters {
  /**
   * @member {string} [schemaId] Schema identifier for this definition
   */
  schemaId?: string;
  /**
   * @member {string} [name] Name of the schema.
   */
  name?: string;
  /**
   * @member {string} [version] Schema version.
   */
  version?: string;
  /**
   * @member {string[]} [attrNames] Schema attribute names.
   */
  attrNames?: string[];
  /**
   * @member {boolean} [supportRevocation] Support credential revocation
   */
  supportRevocation?: boolean;
  /**
   * @member {number} [maxCount] Maximum credential count.
   */
  maxCount?: number;
  /**
   * @member {string} [tag] Unique tag to differentiate definitions of the same
   * schema
   */
  tag?: string;
}

/**
 * @interface
 * An interface representing SchemaParameters.
 * Schema.
 *
 */
export interface SchemaParameters {
  /**
   * @member {string} [id] Gets or sets the identifier.
   */
  id?: string;
  /**
   * @member {string} [name] Gets or sets the name.
   */
  name?: string;
  /**
   * @member {string} [version] Gets or sets the version.
   */
  version?: string;
  /**
   * @member {string[]} [attrNames] Gets or sets the attribute names.
   */
  attrNames?: string[];
}

/**
 * @interface
 * An interface representing SchemaRecord.
 */
export interface SchemaRecord {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [version]
   */
  version?: string;
  /**
   * @member {string[]} [attributeNames]
   */
  attributeNames?: string[];
  /**
   * @member {string} [id]
   */
  id?: string;
}

/**
 * @interface
 * An interface representing TenantContract.
 * Tenant info.
 *
 */
export interface TenantContract {
  /**
   * @member {string} [name] Gets or sets the name.
   */
  name?: string;
  /**
   * @member {string} [imageUrl] Gets or sets the image URI.
   */
  imageUrl?: string;
  /**
   * @member {NetworkContract} [network] Gets or sets the network.
   */
  network?: NetworkContract;
  /**
   * @member {string} [tenantId] Gets or sets the tenant identifier.
   */
  tenantId?: string;
}

/**
 * @interface
 * An interface representing TenantParameters.
 * Configuration options for creating new tenant
 *
 */
export interface TenantParameters {
  /**
   * @member {string} [issuerSeed] (Optional) Issuer seed used for
   * deterministic DID generation.
   * If omitted, a random DID/Key is generated
   */
  issuerSeed?: string;
  /**
   * @member {string} name The name of the tenant.
   */
  name: string;
  /**
   * @member {string} [imageUrl] (Optional) Location of image URL used as
   * profile for this tenant
   */
  imageUrl?: string;
  /**
   * @member {string} [networkId] (Optional) Ledger network identifier. Default
   * is Streetcred Test Network
   */
  networkId?: string;
}

/**
 * @interface
 * An interface representing VerificationContract.
 * Verification Info
 *
 */
export interface VerificationContract {
  /**
   * @member {string} [connectionId] Gets or sets the connection identifier.
   */
  connectionId?: string;
  /**
   * @member {string} [verificationId] Gets or sets the verification
   * identifier.
   */
  verificationId?: string;
  /**
   * @member {State2} [state] Gets or sets the state. Possible values include:
   * 'Requested', 'Accepted', 'Rejected'
   */
  state?: State2;
  /**
   * @member {Date} [createdAtUtc] Gets or sets the created at UTC.
   */
  createdAtUtc?: Date;
  /**
   * @member {Date} [updatedAtUtc] Gets or sets the updated at UTC.
   */
  updatedAtUtc?: Date;
  /**
   * @member {boolean} [isValid] Returns true if the provided proof is valid.
   */
  isValid?: boolean;
  /**
   * @member {Date} [verifiedAtUtc] Gets or sets the verified at UTC.
   */
  verifiedAtUtc?: Date;
}

/**
 * @interface
 * An interface representing VerificationParameters.
 * Create verification
 *
 */
export interface VerificationParameters {
  /**
   * @member {string} [proofRequestId] Gets or sets the proof request
   * identifier.
   */
  proofRequestId?: string;
  /**
   * @member {string} [connectionId] Gets or sets the connection identifier.
   */
  connectionId?: string;
}

/**
 * @interface
 * An interface representing AttributeFilter.
 */
export interface AttributeFilter {
  /**
   * @member {string} [schemaId]
   */
  schemaId?: string;
  /**
   * @member {string} [schemaIssuerDid]
   */
  schemaIssuerDid?: string;
  /**
   * @member {string} [schemaName]
   */
  schemaName?: string;
  /**
   * @member {string} [schemaVersion]
   */
  schemaVersion?: string;
  /**
   * @member {string} [issuerDid]
   */
  issuerDid?: string;
  /**
   * @member {string} [credDefId]
   */
  credDefId?: string;
}

/**
 * @interface
 * An interface representing RevocationInterval.
 */
export interface RevocationInterval {
  /**
   * @member {number} [from]
   */
  from?: number;
  /**
   * @member {number} [to]
   */
  to?: number;
}

/**
 * @interface
 * An interface representing ProofAttributeInfo.
 */
export interface ProofAttributeInfo {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {AttributeFilter[]} [restrictions]
   */
  restrictions?: AttributeFilter[];
  /**
   * @member {RevocationInterval} [nonRevoked]
   */
  nonRevoked?: RevocationInterval;
}

/**
 * @interface
 * An interface representing ProofPredicateInfo.
 */
export interface ProofPredicateInfo {
  /**
   * @member {string} [pType]
   */
  pType?: string;
  /**
   * @member {string} [pValue]
   */
  pValue?: string;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {AttributeFilter[]} [restrictions]
   */
  restrictions?: AttributeFilter[];
  /**
   * @member {RevocationInterval} [nonRevoked]
   */
  nonRevoked?: RevocationInterval;
}

/**
 * @interface
 * An interface representing ProofRequest.
 */
export interface ProofRequest {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [version]
   */
  version?: string;
  /**
   * @member {string} [nonce]
   */
  nonce?: string;
  /**
   * @member {{ [propertyName: string]: ProofAttributeInfo }}
   * [requestedAttributes]
   */
  requestedAttributes?: { [propertyName: string]: ProofAttributeInfo };
  /**
   * @member {{ [propertyName: string]: ProofPredicateInfo }}
   * [requestedPredicates]
   */
  requestedPredicates?: { [propertyName: string]: ProofPredicateInfo };
  /**
   * @member {RevocationInterval} [nonRevoked]
   */
  nonRevoked?: RevocationInterval;
}

/**
 * @interface
 * An interface representing VerificationDefinitionContract.
 */
export interface VerificationDefinitionContract {
  /**
   * @member {string} [id] Gets or sets the identifier.
   */
  id?: string;
  /**
   * @member {ProofRequest} [data] Gets or sets the proof request.
   */
  data?: ProofRequest;
}

/**
 * @interface
 * An interface representing AgencyServiceClientOptions.
 * @extends ServiceClientOptions
 */
export interface AgencyServiceClientOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing AgencyServiceClientUploadImageOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientUploadImageOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {msRest.HttpRequestBody} [uploadedFiles] The uploaded files.
   */
  uploadedFiles?: msRest.HttpRequestBody;
  /**
   * @member {string} [filename] The filename.
   */
  filename?: string;
  /**
   * @member {string} [contentType] (Optional) Type of the image content.
   */
  contentType?: string;
}

/**
 * @interface
 * An interface representing AgencyServiceClientListConnectionsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientListConnectionsOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {State3} [state] Possible values include: 'Invited',
   * 'Negotiating', 'Connected'
   */
  state?: State3;
}

/**
 * @interface
 * An interface representing AgencyServiceClientCreateConnectionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientCreateConnectionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {ConnectionInvitationParameters} [connectionInvitationParameters]
   * The create invitation.
   */
  connectionInvitationParameters?: ConnectionInvitationParameters;
}

/**
 * @interface
 * An interface representing AgencyServiceClientListCredentialsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientListCredentialsOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [connectionId]
   */
  connectionId?: string;
  /**
   * @member {State4} [state] Possible values include: 'Offered', 'Requested',
   * 'Issued', 'Rejected', 'Revoked'
   */
  state?: State4;
}

/**
 * @interface
 * An interface representing AgencyServiceClientCreateCredentialOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientCreateCredentialOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {CredentialOfferParameters} [credentialOfferParameters] The
   * definition and connection to which this offer will be sent.
   */
  credentialOfferParameters?: CredentialOfferParameters;
}

/**
 * @interface
 * An interface representing AgencyServiceClientIssueCredentialOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientIssueCredentialOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {{ [propertyName: string]: string }} [values] The values.
   */
  values?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing AgencyServiceClientCreateCredentialDefinitionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientCreateCredentialDefinitionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {CredentialDefinitionParameters} [credentialDefinitionParameters]
   * Definition.
   */
  credentialDefinitionParameters?: CredentialDefinitionParameters;
}

/**
 * @interface
 * An interface representing AgencyServiceClientCreateSchemaOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientCreateSchemaOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SchemaParameters} [schemaParameters] Schema details
   */
  schemaParameters?: SchemaParameters;
}

/**
 * @interface
 * An interface representing AgencyServiceClientCreateTenantOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientCreateTenantOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {TenantParameters} [tenantParameters] Configuration options for
   * creating new tenant.
   */
  tenantParameters?: TenantParameters;
}

/**
 * @interface
 * An interface representing AgencyServiceClientListVerificationsForConnectionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientListVerificationsForConnectionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [connectionId] The connection identifier.
   */
  connectionId?: string;
}

/**
 * @interface
 * An interface representing AgencyServiceClientCreateVerificationOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientCreateVerificationOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {VerificationParameters} [verificationParameters] The create
   * verification.
   */
  verificationParameters?: VerificationParameters;
}

/**
 * @interface
 * An interface representing AgencyServiceClientCreateVerificationDefinitionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AgencyServiceClientCreateVerificationDefinitionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {ProofRequest} [proofRequest] The proof request.
   */
  proofRequest?: ProofRequest;
}

/**
 * Defines values for State.
 * Possible values include: 'Invited', 'Negotiating', 'Connected'
 * @readonly
 * @enum {string}
 */
export type State = 'Invited' | 'Negotiating' | 'Connected';

/**
 * Defines values for State1.
 * Possible values include: 'Offered', 'Requested', 'Issued', 'Rejected', 'Revoked'
 * @readonly
 * @enum {string}
 */
export type State1 = 'Offered' | 'Requested' | 'Issued' | 'Rejected' | 'Revoked';

/**
 * Defines values for State2.
 * Possible values include: 'Requested', 'Accepted', 'Rejected'
 * @readonly
 * @enum {string}
 */
export type State2 = 'Requested' | 'Accepted' | 'Rejected';

/**
 * Defines values for State3.
 * Possible values include: 'Invited', 'Negotiating', 'Connected'
 * @readonly
 * @enum {string}
 */
export type State3 = 'Invited' | 'Negotiating' | 'Connected';

/**
 * Defines values for State4.
 * Possible values include: 'Offered', 'Requested', 'Issued', 'Rejected', 'Revoked'
 * @readonly
 * @enum {string}
 */
export type State4 = 'Offered' | 'Requested' | 'Issued' | 'Rejected' | 'Revoked';

/**
 * Contains response data for the uploadImage operation.
 */
export type UploadImageResponse = {
  /**
   * The parsed response body.
   */
  body: string;
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: string;
    };
};

/**
 * Contains response data for the listNetworks operation.
 */
export type ListNetworksResponse = Array<NetworkContract> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NetworkContract[];
    };
};

/**
 * Contains response data for the listConnections operation.
 */
export type ListConnectionsResponse = Array<ConnectionContract> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConnectionContract[];
    };
};

/**
 * Contains response data for the createConnection operation.
 */
export type CreateConnectionResponse = IdContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IdContract;
    };
};

/**
 * Contains response data for the getConnection operation.
 */
export type GetConnectionResponse = ConnectionContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConnectionContract;
    };
};

/**
 * Contains response data for the listCredentials operation.
 */
export type ListCredentialsResponse = Array<CredentialContract> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CredentialContract[];
    };
};

/**
 * Contains response data for the createCredential operation.
 */
export type CreateCredentialResponse = IdContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IdContract;
    };
};

/**
 * Contains response data for the getCredential operation.
 */
export type GetCredentialResponse = CredentialContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CredentialContract;
    };
};

/**
 * Contains response data for the listCredentialDefinitions operation.
 */
export type ListCredentialDefinitionsResponse = Array<CredentialDefinitionContract> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CredentialDefinitionContract[];
    };
};

/**
 * Contains response data for the createCredentialDefinition operation.
 */
export type CreateCredentialDefinitionResponse = IdContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IdContract;
    };
};

/**
 * Contains response data for the getCredentialDefinition operation.
 */
export type GetCredentialDefinitionResponse = CredentialDefinitionContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CredentialDefinitionContract;
    };
};

/**
 * Contains response data for the listSchemas operation.
 */
export type ListSchemasResponse = Array<SchemaRecord> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SchemaRecord[];
    };
};

/**
 * Contains response data for the createSchema operation.
 */
export type CreateSchemaResponse = {
  /**
   * The parsed response body.
   */
  body: string;
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: string;
    };
};

/**
 * Contains response data for the listTenants operation.
 */
export type ListTenantsResponse = Array<TenantContract> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TenantContract[];
    };
};

/**
 * Contains response data for the createTenant operation.
 */
export type CreateTenantResponse = TenantContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TenantContract;
    };
};

/**
 * Contains response data for the getTenant operation.
 */
export type GetTenantResponse = TenantContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: TenantContract;
    };
};

/**
 * Contains response data for the listVerificationsForConnection operation.
 */
export type ListVerificationsForConnectionResponse = Array<VerificationContract> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VerificationContract[];
    };
};

/**
 * Contains response data for the createVerification operation.
 */
export type CreateVerificationResponse = IdContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IdContract;
    };
};

/**
 * Contains response data for the getVerification operation.
 */
export type GetVerificationResponse = VerificationContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VerificationContract;
    };
};

/**
 * Contains response data for the getVerificationDefinition operation.
 */
export type GetVerificationDefinitionResponse = VerificationDefinitionContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VerificationDefinitionContract;
    };
};

/**
 * Contains response data for the listVerificationDefinitions operation.
 */
export type ListVerificationDefinitionsResponse = Array<VerificationDefinitionContract> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VerificationDefinitionContract[];
    };
};

/**
 * Contains response data for the createVerificationDefinition operation.
 */
export type CreateVerificationDefinitionResponse = IdContract & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IdContract;
    };
};
