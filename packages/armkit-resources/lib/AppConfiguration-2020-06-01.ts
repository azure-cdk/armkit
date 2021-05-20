  // generated by armkit
  import { ArmResource } from '@yetics/armkit-core';
  import { Construct } from 'constructs';

  /**
   * Microsoft.AppConfiguration/configurationStores
   *
   * @schema Microsoft.AppConfiguration.configurationStores
   */
  export class ConfigurationStores extends ArmResource {
    /**
     * Defines a "Microsoft.AppConfiguration.configurationStores" Arm Template object
     * @param scope the scope in which to define this object
     * @param name a scope-local name for the object
     * @param options configuration options
     */
    public constructor(scope: Construct, name: string, options: ConfigurationStoresOptions) {
      super(scope, name, {
        ...options,
        armResourceType: 'configurationStores',
      });
    }
  }

  /**
   * Microsoft.AppConfiguration/configurationStores/privateEndpointConnections
   *
   * @schema Microsoft.AppConfiguration.configurationStores_privateEndpointConnections
   */
  export class ConfigurationStoresPrivateEndpointConnections extends ArmResource {
    /**
     * Defines a "Microsoft.AppConfiguration.configurationStores_privateEndpointConnections" Arm Template object
     * @param scope the scope in which to define this object
     * @param name a scope-local name for the object
     * @param options configuration options
     */
    public constructor(scope: Construct, name: string, options: ConfigurationStoresPrivateEndpointConnectionsOptions) {
      super(scope, name, {
        ...options,
        armResourceType: 'configurationStores_privateEndpointConnections',
      });
    }
  }

  /**
   * Microsoft.AppConfiguration/configurationStores
   *
   * @schema Microsoft.AppConfiguration.configurationStores
   */
  export interface ConfigurationStoresOptions {
    /**
     * @schema Microsoft.AppConfiguration.configurationStores#apiVersion
     */
    readonly apiVersion?: MicrosoftAppConfigurationConfigurationStoresApiVersion;

    /**
     * An identity that can be associated with a resource.
     *
     * @schema Microsoft.AppConfiguration.configurationStores#identity
     */
    readonly identity?: ResourceIdentity;

    /**
     * The location of the resource. This cannot be changed after the resource is created.
     *
     * @schema Microsoft.AppConfiguration.configurationStores#location
     */
    readonly location: string;

    /**
     * The name of the configuration store.
     *
     * @schema Microsoft.AppConfiguration.configurationStores#name
     */
    readonly name: MicrosoftAppConfigurationConfigurationStoresNamePattern;

    /**
     * The properties of a configuration store.
     *
     * @schema Microsoft.AppConfiguration.configurationStores#properties
     */
    readonly properties: ConfigurationStoreProperties;

    /**
     * @schema Microsoft.AppConfiguration.configurationStores#resources
     */
    readonly resources?: ConfigurationStoresPrivateEndpointConnectionsChildResource[];

    /**
     * Describes a configuration store SKU.
     *
     * @schema Microsoft.AppConfiguration.configurationStores#sku
     */
    readonly sku: Sku;

    /**
     * The tags of the resource.
     *
     * @schema Microsoft.AppConfiguration.configurationStores#tags
     */
    readonly tags?: MicrosoftAppConfigurationConfigurationStoresTags;

    /**
     * @schema Microsoft.AppConfiguration.configurationStores#type
     */
    readonly type: MicrosoftAppConfigurationConfigurationStoresType;

  }

  /**
   * Microsoft.AppConfiguration/configurationStores/privateEndpointConnections
   *
   * @schema Microsoft.AppConfiguration.configurationStores_privateEndpointConnections
   */
  export interface ConfigurationStoresPrivateEndpointConnectionsOptions {
    /**
     * @schema Microsoft.AppConfiguration.configurationStores_privateEndpointConnections#apiVersion
     */
    readonly apiVersion?: MicrosoftAppConfigurationConfigurationStoresPrivateEndpointConnectionsApiVersion;

    /**
     * Private endpoint connection name
     *
     * @schema Microsoft.AppConfiguration.configurationStores_privateEndpointConnections#name
     */
    readonly name: string;

    /**
     * Properties of a private endpoint connection.
     *
     * @schema Microsoft.AppConfiguration.configurationStores_privateEndpointConnections#properties
     */
    readonly properties: PrivateEndpointConnectionProperties;

    /**
     * @schema Microsoft.AppConfiguration.configurationStores_privateEndpointConnections#type
     */
    readonly type: MicrosoftAppConfigurationConfigurationStoresPrivateEndpointConnectionsType;

  }

  export enum MicrosoftAppConfigurationConfigurationStoresApiVersion {
    "MicrosoftAppConfigurationConfigurationStoresApiVersion_2020_06_01" = '2020-06-01',
  }

  /**
   * An identity that can be associated with a resource.
   *
   * @schema #/definitions/ResourceIdentity
   */
  export interface ResourceIdentity {
    /**
     * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
     *
     * @schema #/definitions/ResourceIdentity#type
     */
    readonly type?: ResourceIdentityType;

    /**
     * The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     *
     * @schema #/definitions/ResourceIdentity#userAssignedIdentities
     */
    readonly userAssignedIdentities?: ResourceIdentityUserAssignedIdentities;

  }

  /**
   * @schema MicrosoftAppConfigurationConfigurationStoresName
   */
  export class MicrosoftAppConfigurationConfigurationStoresNamePattern {
    public static pattern(value: string): string {
      return value;
    }
  }

  /**
   * The properties of a configuration store.
   *
   * @schema #/definitions/ConfigurationStoreProperties
   */
  export interface ConfigurationStoreProperties {
    /**
     * The encryption settings for a configuration store.
     *
     * @schema #/definitions/ConfigurationStoreProperties#encryption
     */
    readonly encryption?: EncryptionProperties;

    /**
     * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
     *
     * @schema #/definitions/ConfigurationStoreProperties#publicNetworkAccess
     */
    readonly publicNetworkAccess?: ConfigurationStorePropertiesPublicNetworkAccess;

  }

  /**
   * Microsoft.AppConfiguration/configurationStores/privateEndpointConnections
   *
   * @schema #/definitions/configurationStores_privateEndpointConnections_childResource
   */
  export interface ConfigurationStoresPrivateEndpointConnectionsChildResource {
    /**
     * @schema #/definitions/configurationStores_privateEndpointConnections_childResource#apiVersion
     */
    readonly apiVersion: ConfigurationStoresPrivateEndpointConnectionsChildResourceApiVersion;

    /**
     * Private endpoint connection name
     *
     * @schema #/definitions/configurationStores_privateEndpointConnections_childResource#name
     */
    readonly name: string;

    /**
     * Properties of a private endpoint connection.
     *
     * @schema #/definitions/configurationStores_privateEndpointConnections_childResource#properties
     */
    readonly properties: PrivateEndpointConnectionProperties;

    /**
     * @schema #/definitions/configurationStores_privateEndpointConnections_childResource#type
     */
    readonly type: ConfigurationStoresPrivateEndpointConnectionsChildResourceType;

  }

  /**
   * Describes a configuration store SKU.
   *
   * @schema #/definitions/Sku
   */
  export interface Sku {
    /**
     * The SKU name of the configuration store.
     *
     * @schema #/definitions/Sku#name
     */
    readonly name: string;

  }

  /**
   * @schema MicrosoftAppConfigurationConfigurationStoresTags
   */
  export interface MicrosoftAppConfigurationConfigurationStoresTags {
  }

  export enum MicrosoftAppConfigurationConfigurationStoresType {
    "MicrosoftAppConfigurationConfigurationStoresType_MICROSOFT_APP_CONFIGURATION_CONFIGURATION_STORES" = 'Microsoft.AppConfiguration/configurationStores',
  }

  export enum MicrosoftAppConfigurationConfigurationStoresPrivateEndpointConnectionsApiVersion {
    "MicrosoftAppConfigurationConfigurationStoresPrivateEndpointConnectionsApiVersion_2020_06_01" = '2020-06-01',
  }

  /**
   * Properties of a private endpoint connection.
   *
   * @schema #/definitions/PrivateEndpointConnectionProperties
   */
  export interface PrivateEndpointConnectionProperties {
    /**
     * Private endpoint which a connection belongs to.
     *
     * @schema #/definitions/PrivateEndpointConnectionProperties#privateEndpoint
     */
    readonly privateEndpoint?: PrivateEndpoint;

    /**
     * The state of a private link service connection.
     *
     * @schema #/definitions/PrivateEndpointConnectionProperties#privateLinkServiceConnectionState
     */
    readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

  }

  export enum MicrosoftAppConfigurationConfigurationStoresPrivateEndpointConnectionsType {
    "MicrosoftAppConfigurationConfigurationStoresPrivateEndpointConnectionsType_MICROSOFT_APP_CONFIGURATION_CONFIGURATION_STORES_PRIVATE_ENDPOINT_CONNECTIONS" = 'Microsoft.AppConfiguration/configurationStores/privateEndpointConnections',
  }

  export enum ResourceIdentityType {
    NONE = 'None',
    SYSTEM_ASSIGNED = 'SystemAssigned',
    USER_ASSIGNED = 'UserAssigned',
    "ResourceIdentityType_SYSTEM_ASSIGNED_USER_ASSIGNED" = 'SystemAssigned, UserAssigned',
  }

  /**
   * @schema #/definitions/resourceIdentityUserAssignedIdentities
   */
  export interface ResourceIdentityUserAssignedIdentities {
  }

  /**
   * The encryption settings for a configuration store.
   *
   * @schema #/definitions/EncryptionProperties
   */
  export interface EncryptionProperties {
    /**
     * Settings concerning key vault encryption for a configuration store.
     *
     * @schema #/definitions/EncryptionProperties#keyVaultProperties
     */
    readonly keyVaultProperties?: KeyVaultProperties;

  }

  export enum ConfigurationStorePropertiesPublicNetworkAccess {
    ENABLED = 'Enabled',
    DISABLED = 'Disabled',
  }

  export enum ConfigurationStoresPrivateEndpointConnectionsChildResourceApiVersion {
    "ConfigurationStoresPrivateEndpointConnectionsChildResourceApiVersion_2020_06_01" = '2020-06-01',
  }

  export enum ConfigurationStoresPrivateEndpointConnectionsChildResourceType {
    PRIVATE_ENDPOINT_CONNECTIONS = 'privateEndpointConnections',
  }

  /**
   * Private endpoint which a connection belongs to.
   *
   * @schema #/definitions/PrivateEndpoint
   */
  export interface PrivateEndpoint {
    /**
     * The resource Id for private endpoint
     *
     * @schema #/definitions/PrivateEndpoint#id
     */
    readonly id?: string;

  }

  /**
   * The state of a private link service connection.
   *
   * @schema #/definitions/PrivateLinkServiceConnectionState
   */
  export interface PrivateLinkServiceConnectionState {
    /**
     * The private link service connection description.
     *
     * @schema #/definitions/PrivateLinkServiceConnectionState#description
     */
    readonly description?: string;

    /**
     * The private link service connection status.
     *
     * @schema #/definitions/PrivateLinkServiceConnectionState#status
     */
    readonly status?: PrivateLinkServiceConnectionStateStatus;

  }

  /**
   * Settings concerning key vault encryption for a configuration store.
   *
   * @schema #/definitions/KeyVaultProperties
   */
  export interface KeyVaultProperties {
    /**
     * The client id of the identity which will be used to access key vault.
     *
     * @schema #/definitions/KeyVaultProperties#identityClientId
     */
    readonly identityClientId?: string;

    /**
     * The URI of the key vault key used to encrypt data.
     *
     * @schema #/definitions/KeyVaultProperties#keyIdentifier
     */
    readonly keyIdentifier?: string;

  }

  export enum PrivateLinkServiceConnectionStateStatus {
    PENDING = 'Pending',
    APPROVED = 'Approved',
    REJECTED = 'Rejected',
    DISCONNECTED = 'Disconnected',
  }
