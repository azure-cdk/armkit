      // generated by armkit
      import { ArmResource } from '@yetics/armkit-core';
      import { Construct } from 'constructs';

      /**
       * Microsoft.ContainerRegistry/registries
       *
       * @schema Microsoft.ContainerRegistry.registries
       */
      export class Registries extends ArmResource {
        /**
         * Defines a "Microsoft.ContainerRegistry.registries" Arm Template object
         * @param scope the scope in which to define this object
         * @param name a scope-local name for the object
         * @param options configuration options
         */
        public constructor(scope: Construct, name: string, options: RegistriesOptions) {
          super(scope, name, {
            ...options,
            armResourceType: 'registries',
          });
        }
      }

      /**
       * Microsoft.ContainerRegistry/registries/replications
       *
       * @schema Microsoft.ContainerRegistry.registries_replications
       */
      export class RegistriesReplications extends ArmResource {
        /**
         * Defines a "Microsoft.ContainerRegistry.registries_replications" Arm Template object
         * @param scope the scope in which to define this object
         * @param name a scope-local name for the object
         * @param options configuration options
         */
        public constructor(scope: Construct, name: string, options: RegistriesReplicationsOptions) {
          super(scope, name, {
            ...options,
            armResourceType: 'registries_replications',
          });
        }
      }

      /**
       * Microsoft.ContainerRegistry/registries/webhooks
       *
       * @schema Microsoft.ContainerRegistry.registries_webhooks
       */
      export class RegistriesWebhooks extends ArmResource {
        /**
         * Defines a "Microsoft.ContainerRegistry.registries_webhooks" Arm Template object
         * @param scope the scope in which to define this object
         * @param name a scope-local name for the object
         * @param options configuration options
         */
        public constructor(scope: Construct, name: string, options: RegistriesWebhooksOptions) {
          super(scope, name, {
            ...options,
            armResourceType: 'registries_webhooks',
          });
        }
      }

      /**
       * Microsoft.ContainerRegistry/registries
       *
       * @schema Microsoft.ContainerRegistry.registries
       */
      export interface RegistriesOptions {
        /**
         * @schema Microsoft.ContainerRegistry.registries#apiVersion
         */
        readonly apiVersion?: MicrosoftContainerRegistryRegistriesApiVersion;

        /**
         * The location of the resource. This cannot be changed after the resource is created.
         *
         * @schema Microsoft.ContainerRegistry.registries#location
         */
        readonly location: string;

        /**
         * The name of the container registry.
         *
         * @schema Microsoft.ContainerRegistry.registries#name
         */
        readonly name: MicrosoftContainerRegistryRegistriesNamePattern;

        /**
         * The properties of a container registry.
         *
         * @schema Microsoft.ContainerRegistry.registries#properties
         */
        readonly properties: RegistryProperties;

        /**
         * @schema Microsoft.ContainerRegistry.registries#resources
         */
        readonly resources?: MicrosoftContainerRegistryRegistriesResources[];

        /**
         * The SKU of a container registry.
         *
         * @schema Microsoft.ContainerRegistry.registries#sku
         */
        readonly sku: Sku;

        /**
         * The tags of the resource.
         *
         * @schema Microsoft.ContainerRegistry.registries#tags
         */
        readonly tags?: MicrosoftContainerRegistryRegistriesTags;

        /**
         * @schema Microsoft.ContainerRegistry.registries#type
         */
        readonly type: MicrosoftContainerRegistryRegistriesType;

      }

      /**
       * Microsoft.ContainerRegistry/registries/replications
       *
       * @schema Microsoft.ContainerRegistry.registries_replications
       */
      export interface RegistriesReplicationsOptions {
        /**
         * @schema Microsoft.ContainerRegistry.registries_replications#apiVersion
         */
        readonly apiVersion?: MicrosoftContainerRegistryRegistriesReplicationsApiVersion;

        /**
         * The location of the resource. This cannot be changed after the resource is created.
         *
         * @schema Microsoft.ContainerRegistry.registries_replications#location
         */
        readonly location: string;

        /**
         * The name of the replication.
         *
         * @schema Microsoft.ContainerRegistry.registries_replications#name
         */
        readonly name: MicrosoftContainerRegistryRegistriesReplicationsNamePattern;

        /**
         * The properties of a replication.
         *
         * @schema Microsoft.ContainerRegistry.registries_replications#properties
         */
        readonly properties: ReplicationProperties;

        /**
         * The tags of the resource.
         *
         * @schema Microsoft.ContainerRegistry.registries_replications#tags
         */
        readonly tags?: MicrosoftContainerRegistryRegistriesReplicationsTags;

        /**
         * @schema Microsoft.ContainerRegistry.registries_replications#type
         */
        readonly type: MicrosoftContainerRegistryRegistriesReplicationsType;

      }

      /**
       * Microsoft.ContainerRegistry/registries/webhooks
       *
       * @schema Microsoft.ContainerRegistry.registries_webhooks
       */
      export interface RegistriesWebhooksOptions {
        /**
         * @schema Microsoft.ContainerRegistry.registries_webhooks#apiVersion
         */
        readonly apiVersion?: MicrosoftContainerRegistryRegistriesWebhooksApiVersion;

        /**
         * The location of the webhook. This cannot be changed after the resource is created.
         *
         * @schema Microsoft.ContainerRegistry.registries_webhooks#location
         */
        readonly location: string;

        /**
         * The name of the webhook.
         *
         * @schema Microsoft.ContainerRegistry.registries_webhooks#name
         */
        readonly name: MicrosoftContainerRegistryRegistriesWebhooksNamePattern;

        /**
         * The parameters for creating the properties of a webhook.
         *
         * @schema Microsoft.ContainerRegistry.registries_webhooks#properties
         */
        readonly properties: WebhookPropertiesCreateParameters;

        /**
         * The tags for the webhook.
         *
         * @schema Microsoft.ContainerRegistry.registries_webhooks#tags
         */
        readonly tags?: MicrosoftContainerRegistryRegistriesWebhooksTags;

        /**
         * @schema Microsoft.ContainerRegistry.registries_webhooks#type
         */
        readonly type: MicrosoftContainerRegistryRegistriesWebhooksType;

      }

      export enum MicrosoftContainerRegistryRegistriesApiVersion {
        "MicrosoftContainerRegistryRegistriesApiVersion_2019_05_01" = '2019-05-01',
      }

      /**
       * @schema MicrosoftContainerRegistryRegistriesName
       */
      export class MicrosoftContainerRegistryRegistriesNamePattern {
        public static pattern(value: string): string {
          return value;
        }
      }

      /**
       * The properties of a container registry.
       *
       * @schema #/definitions/RegistryProperties
       */
      export interface RegistryProperties {
        /**
         * The value that indicates whether the admin user is enabled.
         *
         * @schema #/definitions/RegistryProperties#adminUserEnabled
         */
        readonly adminUserEnabled?: boolean;

        /**
         * The network rule set for a container registry.
         *
         * @schema #/definitions/RegistryProperties#networkRuleSet
         */
        readonly networkRuleSet?: NetworkRuleSet;

        /**
         * The policies for a container registry.
         *
         * @schema #/definitions/RegistryProperties#policies
         */
        readonly policies?: Policies;

        /**
         * The properties of a storage account for a container registry. Only applicable to Classic SKU.
         *
         * @schema #/definitions/RegistryProperties#storageAccount
         */
        readonly storageAccount?: StorageAccountProperties;

      }

      /**
       * @schema MicrosoftContainerRegistryRegistriesResources
       */
      export class MicrosoftContainerRegistryRegistriesResources {
        public static fromRegistriesReplicationsChildResource(value: RegistriesReplicationsChildResource): MicrosoftContainerRegistryRegistriesResources {
          return new MicrosoftContainerRegistryRegistriesResources(value);
        }
        public static fromRegistriesWebhooksChildResource(value: RegistriesWebhooksChildResource): MicrosoftContainerRegistryRegistriesResources {
          return new MicrosoftContainerRegistryRegistriesResources(value);
        }
        private constructor(value: any) {
          Object.defineProperty(this, 'resolve', { value: () => value });
        }
      }

      /**
       * The SKU of a container registry.
       *
       * @schema #/definitions/Sku
       */
      export interface Sku {
        /**
         * The SKU name of the container registry. Required for registry creation.
         *
         * @schema #/definitions/Sku#name
         */
        readonly name: SkuName;

      }

      /**
       * @schema MicrosoftContainerRegistryRegistriesTags
       */
      export interface MicrosoftContainerRegistryRegistriesTags {
      }

      export enum MicrosoftContainerRegistryRegistriesType {
        "MicrosoftContainerRegistryRegistriesType_MICROSOFT_CONTAINER_REGISTRY_REGISTRIES" = 'Microsoft.ContainerRegistry/registries',
      }

      export enum MicrosoftContainerRegistryRegistriesReplicationsApiVersion {
        "MicrosoftContainerRegistryRegistriesReplicationsApiVersion_2019_05_01" = '2019-05-01',
      }

      /**
       * @schema MicrosoftContainerRegistryRegistriesReplicationsName
       */
      export class MicrosoftContainerRegistryRegistriesReplicationsNamePattern {
        public static pattern(value: string): string {
          return value;
        }
      }

      /**
       * The properties of a replication.
       *
       * @schema #/definitions/ReplicationProperties
       */
      export interface ReplicationProperties {
      }

      /**
       * @schema MicrosoftContainerRegistryRegistriesReplicationsTags
       */
      export interface MicrosoftContainerRegistryRegistriesReplicationsTags {
      }

      export enum MicrosoftContainerRegistryRegistriesReplicationsType {
        "MicrosoftContainerRegistryRegistriesReplicationsType_MICROSOFT_CONTAINER_REGISTRY_REGISTRIES_REPLICATIONS" = 'Microsoft.ContainerRegistry/registries/replications',
      }

      export enum MicrosoftContainerRegistryRegistriesWebhooksApiVersion {
        "MicrosoftContainerRegistryRegistriesWebhooksApiVersion_2019_05_01" = '2019-05-01',
      }

      /**
       * @schema MicrosoftContainerRegistryRegistriesWebhooksName
       */
      export class MicrosoftContainerRegistryRegistriesWebhooksNamePattern {
        public static pattern(value: string): string {
          return value;
        }
      }

      /**
       * The parameters for creating the properties of a webhook.
       *
       * @schema #/definitions/WebhookPropertiesCreateParameters
       */
      export interface WebhookPropertiesCreateParameters {
        /**
         * The list of actions that trigger the webhook to post notifications.
         *
         * @schema #/definitions/WebhookPropertiesCreateParameters#actions
         */
        readonly actions: WebhookPropertiesCreateParametersActions[];

        /**
         * Custom headers that will be added to the webhook notifications.
         *
         * @schema #/definitions/WebhookPropertiesCreateParameters#customHeaders
         */
        readonly customHeaders?: WebhookPropertiesCreateParametersCustomHeaders;

        /**
         * The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
         *
         * @schema #/definitions/WebhookPropertiesCreateParameters#scope
         */
        readonly scope?: string;

        /**
         * The service URI for the webhook to post notifications.
         *
         * @schema #/definitions/WebhookPropertiesCreateParameters#serviceUri
         */
        readonly serviceUri: string;

        /**
         * The status of the webhook at the time the operation was called.
         *
         * @schema #/definitions/WebhookPropertiesCreateParameters#status
         */
        readonly status?: WebhookPropertiesCreateParametersStatus;

      }

      /**
       * @schema MicrosoftContainerRegistryRegistriesWebhooksTags
       */
      export interface MicrosoftContainerRegistryRegistriesWebhooksTags {
      }

      export enum MicrosoftContainerRegistryRegistriesWebhooksType {
        "MicrosoftContainerRegistryRegistriesWebhooksType_MICROSOFT_CONTAINER_REGISTRY_REGISTRIES_WEBHOOKS" = 'Microsoft.ContainerRegistry/registries/webhooks',
      }

      /**
       * The network rule set for a container registry.
       *
       * @schema #/definitions/NetworkRuleSet
       */
      export interface NetworkRuleSet {
        /**
         * The default action of allow or deny when no other rules match.
         *
         * @schema #/definitions/NetworkRuleSet#defaultAction
         */
        readonly defaultAction: NetworkRuleSetDefaultAction;

        /**
         * The IP ACL rules.
         *
         * @schema #/definitions/NetworkRuleSet#ipRules
         */
        readonly ipRules?: IpRule[];

        /**
         * The virtual network rules.
         *
         * @schema #/definitions/NetworkRuleSet#virtualNetworkRules
         */
        readonly virtualNetworkRules?: VirtualNetworkRule[];

      }

      /**
       * The policies for a container registry.
       *
       * @schema #/definitions/Policies
       */
      export interface Policies {
        /**
         * The quarantine policy for a container registry.
         *
         * @schema #/definitions/Policies#quarantinePolicy
         */
        readonly quarantinePolicy?: QuarantinePolicy;

        /**
         * The retention policy for a container registry.
         *
         * @schema #/definitions/Policies#retentionPolicy
         */
        readonly retentionPolicy?: RetentionPolicy;

        /**
         * The content trust policy for a container registry.
         *
         * @schema #/definitions/Policies#trustPolicy
         */
        readonly trustPolicy?: TrustPolicy;

      }

      /**
       * The properties of a storage account for a container registry. Only applicable to Classic SKU.
       *
       * @schema #/definitions/StorageAccountProperties
       */
      export interface StorageAccountProperties {
        /**
         * The resource ID of the storage account.
         *
         * @schema #/definitions/StorageAccountProperties#id
         */
        readonly id: string;

      }

      /**
       * Microsoft.ContainerRegistry/registries/replications
       *
       * @schema #/definitions/registries_replications_childResource
       */
      export interface RegistriesReplicationsChildResource {
        /**
         * @schema #/definitions/registries_replications_childResource#apiVersion
         */
        readonly apiVersion: RegistriesReplicationsChildResourceApiVersion;

        /**
         * The location of the resource. This cannot be changed after the resource is created.
         *
         * @schema #/definitions/registries_replications_childResource#location
         */
        readonly location: string;

        /**
         * The name of the replication.
         *
         * @schema #/definitions/registries_replications_childResource#name
         */
        readonly name: RegistriesReplicationsChildResourceNamePattern;

        /**
         * The properties of a replication.
         *
         * @schema #/definitions/registries_replications_childResource#properties
         */
        readonly properties: ReplicationProperties;

        /**
         * The tags of the resource.
         *
         * @schema #/definitions/registries_replications_childResource#tags
         */
        readonly tags?: RegistriesReplicationsChildResourceTags;

        /**
         * @schema #/definitions/registries_replications_childResource#type
         */
        readonly type: RegistriesReplicationsChildResourceType;

      }

      /**
       * Microsoft.ContainerRegistry/registries/webhooks
       *
       * @schema #/definitions/registries_webhooks_childResource
       */
      export interface RegistriesWebhooksChildResource {
        /**
         * @schema #/definitions/registries_webhooks_childResource#apiVersion
         */
        readonly apiVersion: RegistriesWebhooksChildResourceApiVersion;

        /**
         * The location of the webhook. This cannot be changed after the resource is created.
         *
         * @schema #/definitions/registries_webhooks_childResource#location
         */
        readonly location: string;

        /**
         * The name of the webhook.
         *
         * @schema #/definitions/registries_webhooks_childResource#name
         */
        readonly name: RegistriesWebhooksChildResourceNamePattern;

        /**
         * The parameters for creating the properties of a webhook.
         *
         * @schema #/definitions/registries_webhooks_childResource#properties
         */
        readonly properties: WebhookPropertiesCreateParameters;

        /**
         * The tags for the webhook.
         *
         * @schema #/definitions/registries_webhooks_childResource#tags
         */
        readonly tags?: RegistriesWebhooksChildResourceTags;

        /**
         * @schema #/definitions/registries_webhooks_childResource#type
         */
        readonly type: RegistriesWebhooksChildResourceType;

      }

      export enum SkuName {
        CLASSIC = 'Classic',
        BASIC = 'Basic',
        STANDARD = 'Standard',
        PREMIUM = 'Premium',
      }

      export enum WebhookPropertiesCreateParametersActions {
        PUSH = 'push',
        DELETE = 'delete',
        QUARANTINE = 'quarantine',
        CHART_PUSH = 'chart_push',
        CHART_DELETE = 'chart_delete',
      }

      /**
       * @schema #/definitions/webhookPropertiesCreateParametersCustomHeaders
       */
      export interface WebhookPropertiesCreateParametersCustomHeaders {
      }

      export enum WebhookPropertiesCreateParametersStatus {
        ENABLED = 'enabled',
        DISABLED = 'disabled',
      }

      export enum NetworkRuleSetDefaultAction {
        ALLOW = 'Allow',
        DENY = 'Deny',
      }

      /**
       * IP rule with specific IP or IP range in CIDR format.
       *
       * @schema #/definitions/IPRule
       */
      export interface IpRule {
        /**
         * The action of IP ACL rule.
         *
         * @schema #/definitions/IPRule#action
         */
        readonly action?: IpRuleAction;

        /**
         * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
         *
         * @schema #/definitions/IPRule#value
         */
        readonly value: string;

      }

      /**
       * Virtual network rule.
       *
       * @schema #/definitions/VirtualNetworkRule
       */
      export interface VirtualNetworkRule {
        /**
         * The action of virtual network rule.
         *
         * @schema #/definitions/VirtualNetworkRule#action
         */
        readonly action?: VirtualNetworkRuleAction;

        /**
         * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
         *
         * @schema #/definitions/VirtualNetworkRule#id
         */
        readonly id: string;

      }

      /**
       * The quarantine policy for a container registry.
       *
       * @schema #/definitions/QuarantinePolicy
       */
      export interface QuarantinePolicy {
        /**
         * The value that indicates whether the policy is enabled or not.
         *
         * @schema #/definitions/QuarantinePolicy#status
         */
        readonly status?: QuarantinePolicyStatus;

      }

      /**
       * The retention policy for a container registry.
       *
       * @schema #/definitions/RetentionPolicy
       */
      export interface RetentionPolicy {
        /**
         * The number of days to retain an untagged manifest after which it gets purged.
         *
         * @schema #/definitions/RetentionPolicy#days
         */
        readonly days?: number;

        /**
         * The value that indicates whether the policy is enabled or not.
         *
         * @schema #/definitions/RetentionPolicy#status
         */
        readonly status?: RetentionPolicyStatus;

      }

      /**
       * The content trust policy for a container registry.
       *
       * @schema #/definitions/TrustPolicy
       */
      export interface TrustPolicy {
        /**
         * The value that indicates whether the policy is enabled or not.
         *
         * @schema #/definitions/TrustPolicy#status
         */
        readonly status?: TrustPolicyStatus;

        /**
         * The type of trust policy.
         *
         * @schema #/definitions/TrustPolicy#type
         */
        readonly type?: TrustPolicyType;

      }

      export enum RegistriesReplicationsChildResourceApiVersion {
        "RegistriesReplicationsChildResourceApiVersion_2019_05_01" = '2019-05-01',
      }

      /**
       * @schema #/definitions/registriesReplicationsChildResourceName
       */
      export class RegistriesReplicationsChildResourceNamePattern {
        public static pattern(value: string): string {
          return value;
        }
      }

      /**
       * @schema #/definitions/registriesReplicationsChildResourceTags
       */
      export interface RegistriesReplicationsChildResourceTags {
      }

      export enum RegistriesReplicationsChildResourceType {
        REPLICATIONS = 'replications',
      }

      export enum RegistriesWebhooksChildResourceApiVersion {
        "RegistriesWebhooksChildResourceApiVersion_2019_05_01" = '2019-05-01',
      }

      /**
       * @schema #/definitions/registriesWebhooksChildResourceName
       */
      export class RegistriesWebhooksChildResourceNamePattern {
        public static pattern(value: string): string {
          return value;
        }
      }

      /**
       * @schema #/definitions/registriesWebhooksChildResourceTags
       */
      export interface RegistriesWebhooksChildResourceTags {
      }

      export enum RegistriesWebhooksChildResourceType {
        WEBHOOKS = 'webhooks',
      }

      export enum IpRuleAction {
        ALLOW = 'Allow',
      }

      export enum VirtualNetworkRuleAction {
        ALLOW = 'Allow',
      }

      export enum QuarantinePolicyStatus {
        ENABLED = 'enabled',
        DISABLED = 'disabled',
      }

      export enum RetentionPolicyStatus {
        ENABLED = 'enabled',
        DISABLED = 'disabled',
      }

      export enum TrustPolicyStatus {
        ENABLED = 'enabled',
        DISABLED = 'disabled',
      }

      export enum TrustPolicyType {
        NOTARY = 'Notary',
      }

