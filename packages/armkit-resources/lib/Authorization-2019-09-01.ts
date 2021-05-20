  // generated by armkit
  import { ArmResource } from '@yetics/armkit-core';
  import { Construct } from 'constructs';

  /**
   * Microsoft.Authorization/policyAssignments
   *
   * @schema Microsoft.Authorization.policyAssignments
   */
  export class PolicyAssignments extends ArmResource {
    /**
     * Defines a "Microsoft.Authorization.policyAssignments" Arm Template object
     * @param scope the scope in which to define this object
     * @param name a scope-local name for the object
     * @param options configuration options
     */
    public constructor(scope: Construct, name: string, options: PolicyAssignmentsOptions) {
      super(scope, name, {
        ...options,
        armResourceType: 'policyAssignments',
      });
    }
  }

  /**
   * Microsoft.Authorization/policyDefinitions
   *
   * @schema Microsoft.Authorization.policyDefinitions
   */
  export class PolicyDefinitions extends ArmResource {
    /**
     * Defines a "Microsoft.Authorization.policyDefinitions" Arm Template object
     * @param scope the scope in which to define this object
     * @param name a scope-local name for the object
     * @param options configuration options
     */
    public constructor(scope: Construct, name: string, options: PolicyDefinitionsOptions) {
      super(scope, name, {
        ...options,
        armResourceType: 'policyDefinitions',
      });
    }
  }

  /**
   * Microsoft.Authorization/policySetDefinitions
   *
   * @schema Microsoft.Authorization.policySetDefinitions
   */
  export class PolicySetDefinitions extends ArmResource {
    /**
     * Defines a "Microsoft.Authorization.policySetDefinitions" Arm Template object
     * @param scope the scope in which to define this object
     * @param name a scope-local name for the object
     * @param options configuration options
     */
    public constructor(scope: Construct, name: string, options: PolicySetDefinitionsOptions) {
      super(scope, name, {
        ...options,
        armResourceType: 'policySetDefinitions',
      });
    }
  }

  /**
   * Microsoft.Authorization/policyAssignments
   *
   * @schema Microsoft.Authorization.policyAssignments
   */
  export interface PolicyAssignmentsOptions {
    /**
     * @schema Microsoft.Authorization.policyAssignments#name
     */
    readonly name: string;

    /**
     * @schema Microsoft.Authorization.policyAssignments#type
     */
    readonly type: MicrosoftAuthorizationPolicyAssignmentsType;

    /**
     * @schema Microsoft.Authorization.policyAssignments#apiVersion
     */
    readonly apiVersion?: MicrosoftAuthorizationPolicyAssignmentsApiVersion;

    /**
     * Properties for the policy assignment.
     *
     * @schema Microsoft.Authorization.policyAssignments#properties
     */
    readonly properties: PolicyAssignmentProperties;

    /**
     * The policy sku. This property is optional, obsolete, and will be ignored.
     *
     * @schema Microsoft.Authorization.policyAssignments#sku
     */
    readonly sku?: PolicySku;

    /**
     * The location of the policy assignment. Only required when utilizing managed identity.
     *
     * @schema Microsoft.Authorization.policyAssignments#location
     */
    readonly location?: string;

    /**
     * The managed identity associated with the policy assignment.
     *
     * @schema Microsoft.Authorization.policyAssignments#identity
     */
    readonly identity?: Identity;

  }

  /**
   * Microsoft.Authorization/policyDefinitions
   *
   * @schema Microsoft.Authorization.policyDefinitions
   */
  export interface PolicyDefinitionsOptions {
    /**
     * @schema Microsoft.Authorization.policyDefinitions#name
     */
    readonly name: string;

    /**
     * @schema Microsoft.Authorization.policyDefinitions#type
     */
    readonly type: MicrosoftAuthorizationPolicyDefinitionsType;

    /**
     * @schema Microsoft.Authorization.policyDefinitions#apiVersion
     */
    readonly apiVersion?: MicrosoftAuthorizationPolicyDefinitionsApiVersion;

    /**
     * The policy definition properties.
     *
     * @schema Microsoft.Authorization.policyDefinitions#properties
     */
    readonly properties: PolicyDefinitionProperties;

  }

  /**
   * Microsoft.Authorization/policySetDefinitions
   *
   * @schema Microsoft.Authorization.policySetDefinitions
   */
  export interface PolicySetDefinitionsOptions {
    /**
     * @schema Microsoft.Authorization.policySetDefinitions#name
     */
    readonly name: string;

    /**
     * @schema Microsoft.Authorization.policySetDefinitions#type
     */
    readonly type: MicrosoftAuthorizationPolicySetDefinitionsType;

    /**
     * @schema Microsoft.Authorization.policySetDefinitions#apiVersion
     */
    readonly apiVersion?: MicrosoftAuthorizationPolicySetDefinitionsApiVersion;

    /**
     * The policy definition properties.
     *
     * @schema Microsoft.Authorization.policySetDefinitions#properties
     */
    readonly properties: PolicySetDefinitionProperties;

  }

  export enum MicrosoftAuthorizationPolicyAssignmentsType {
    "MicrosoftAuthorizationPolicyAssignmentsType_MICROSOFT_AUTHORIZATION_POLICY_ASSIGNMENTS" = 'Microsoft.Authorization/policyAssignments',
  }

  export enum MicrosoftAuthorizationPolicyAssignmentsApiVersion {
    "MicrosoftAuthorizationPolicyAssignmentsApiVersion_2019_09_01" = '2019-09-01',
  }

  /**
   * The policy assignment properties.
   *
   * @schema #/definitions/PolicyAssignmentProperties
   */
  export interface PolicyAssignmentProperties {
    /**
     * The display name of the policy assignment.
     *
     * @schema #/definitions/PolicyAssignmentProperties#displayName
     */
    readonly displayName?: string;

    /**
     * The ID of the policy definition or policy set definition being assigned.
     *
     * @schema #/definitions/PolicyAssignmentProperties#policyDefinitionId
     */
    readonly policyDefinitionId?: string;

    /**
     * The scope for the policy assignment.
     *
     * @schema #/definitions/PolicyAssignmentProperties#scope
     */
    readonly scope?: string;

    /**
     * The policy's excluded scopes.
     *
     * @schema #/definitions/PolicyAssignmentProperties#notScopes
     */
    readonly notScopes?: string[];

    /**
     * Required if a parameter is used in policy rule.
     *
     * @schema #/definitions/PolicyAssignmentProperties#parameters
     */
    readonly parameters?: string;

    /**
     * This message will be part of response in case of policy violation.
     *
     * @schema #/definitions/PolicyAssignmentProperties#description
     */
    readonly description?: string;

    /**
     * The policy assignment metadata.
     *
     * @schema #/definitions/PolicyAssignmentProperties#metadata
     */
    readonly metadata?: string;

    /**
     * The policy assignment enforcement mode. Possible values are Default and DoNotEnforce. DoNotEnforce indicates that the policy should evaluate but not take action (i.e. not deny or append).
     *
     * @schema #/definitions/PolicyAssignmentProperties#enforcementMode
     */
    readonly enforcementMode?: PolicyAssignmentPropertiesEnforcementMode;

  }

  /**
   * The policy sku. This property is optional, obsolete, and will be ignored.
   *
   * @schema #/definitions/PolicySku
   */
  export interface PolicySku {
    /**
     * The name of the policy sku. Possible values are A0 and A1.
     *
     * @schema #/definitions/PolicySku#name
     */
    readonly name: string;

    /**
     * The policy sku tier. Possible values are Free and Standard.
     *
     * @schema #/definitions/PolicySku#tier
     */
    readonly tier?: string;

  }

  /**
   * Identity for the resource.
   *
   * @schema #/definitions/Identity
   */
  export interface Identity {
    /**
     * The identity type.
     *
     * @schema #/definitions/Identity#type
     */
    readonly type?: IdentityType;

  }

  export enum MicrosoftAuthorizationPolicyDefinitionsType {
    "MicrosoftAuthorizationPolicyDefinitionsType_MICROSOFT_AUTHORIZATION_POLICY_DEFINITIONS" = 'Microsoft.Authorization/policyDefinitions',
  }

  export enum MicrosoftAuthorizationPolicyDefinitionsApiVersion {
    "MicrosoftAuthorizationPolicyDefinitionsApiVersion_2019_09_01" = '2019-09-01',
  }

  /**
   * The policy definition properties.
   *
   * @schema #/definitions/PolicyDefinitionProperties
   */
  export interface PolicyDefinitionProperties {
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     *
     * @schema #/definitions/PolicyDefinitionProperties#policyType
     */
    readonly policyType?: PolicyDefinitionPropertiesPolicyType;

    /**
     * The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data.
     *
     * @schema #/definitions/PolicyDefinitionProperties#mode
     */
    readonly mode?: string;

    /**
     * The display name of the policy definition.
     *
     * @schema #/definitions/PolicyDefinitionProperties#displayName
     */
    readonly displayName?: string;

    /**
     * The policy definition description.
     *
     * @schema #/definitions/PolicyDefinitionProperties#description
     */
    readonly description?: string;

    /**
     * The policy rule.
     *
     * @schema #/definitions/PolicyDefinitionProperties#policyRule
     */
    readonly policyRule: string;

    /**
     * The policy definition metadata.
     *
     * @schema #/definitions/PolicyDefinitionProperties#metadata
     */
    readonly metadata?: string;

    /**
     * Required if a parameter is used in policy rule.
     *
     * @schema #/definitions/PolicyDefinitionProperties#parameters
     */
    readonly parameters?: string;

  }

  export enum MicrosoftAuthorizationPolicySetDefinitionsType {
    "MicrosoftAuthorizationPolicySetDefinitionsType_MICROSOFT_AUTHORIZATION_POLICY_SET_DEFINITIONS" = 'Microsoft.Authorization/policySetDefinitions',
  }

  export enum MicrosoftAuthorizationPolicySetDefinitionsApiVersion {
    "MicrosoftAuthorizationPolicySetDefinitionsApiVersion_2019_09_01" = '2019-09-01',
  }

  /**
   * The policy set definition properties.
   *
   * @schema #/definitions/PolicySetDefinitionProperties
   */
  export interface PolicySetDefinitionProperties {
    /**
     * The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
     *
     * @schema #/definitions/PolicySetDefinitionProperties#policyType
     */
    readonly policyType?: PolicySetDefinitionPropertiesPolicyType;

    /**
     * The display name of the policy set definition.
     *
     * @schema #/definitions/PolicySetDefinitionProperties#displayName
     */
    readonly displayName?: string;

    /**
     * The policy set definition description.
     *
     * @schema #/definitions/PolicySetDefinitionProperties#description
     */
    readonly description?: string;

    /**
     * The policy set definition metadata.
     *
     * @schema #/definitions/PolicySetDefinitionProperties#metadata
     */
    readonly metadata?: string;

    /**
     * The policy set definition parameters that can be used in policy definition references.
     *
     * @schema #/definitions/PolicySetDefinitionProperties#parameters
     */
    readonly parameters?: string;

    /**
     * An array of policy definition references.
     *
     * @schema #/definitions/PolicySetDefinitionProperties#policyDefinitions
     */
    readonly policyDefinitions: PolicyDefinitionReference[];

    /**
     * An array of groups that policy definitions within this policy set definition can reside in. These groups can be used when aggregating compliance results for this policy set definition.
     *
     * @schema #/definitions/PolicySetDefinitionProperties#policyDefinitionGroups
     */
    readonly policyDefinitionGroups?: PolicyDefinitionGroup[];

  }

  export enum PolicyAssignmentPropertiesEnforcementMode {
    DEFAULT = 'Default',
    DO_NOT_ENFORCE = 'DoNotEnforce',
  }

  export enum IdentityType {
    SYSTEM_ASSIGNED = 'SystemAssigned',
    NONE = 'None',
  }

  export enum PolicyDefinitionPropertiesPolicyType {
    NOT_SPECIFIED = 'NotSpecified',
    BUILT_IN = 'BuiltIn',
    CUSTOM = 'Custom',
    STATIC = 'Static',
  }

  export enum PolicySetDefinitionPropertiesPolicyType {
    NOT_SPECIFIED = 'NotSpecified',
    BUILT_IN = 'BuiltIn',
    CUSTOM = 'Custom',
    STATIC = 'Static',
  }

  /**
   * The policy definition reference.
   *
   * @schema #/definitions/PolicyDefinitionReference
   */
  export interface PolicyDefinitionReference {
    /**
     * The ID of the policy definition or policy set definition.
     *
     * @schema #/definitions/PolicyDefinitionReference#policyDefinitionId
     */
    readonly policyDefinitionId: string;

    /**
     * Required if a parameter is used in policy rule.
     *
     * @schema #/definitions/PolicyDefinitionReference#parameters
     */
    readonly parameters?: string;

    /**
     * The ID that uniquely represents this policy definition reference within this policy set definition.
     *
     * @schema #/definitions/PolicyDefinitionReference#policyDefinitionReferenceId
     */
    readonly policyDefinitionReferenceId?: string;

    /**
     * The groups that this policy definition reference belongs to.
     *
     * @schema #/definitions/PolicyDefinitionReference#groupNames
     */
    readonly groupNames?: string[];

  }

  /**
   * A group that policy definitions within the policy set definition can reside in. These groups can be used when aggregating compliance results for this policy set definition.
   *
   * @schema #/definitions/PolicyDefinitionGroup
   */
  export interface PolicyDefinitionGroup {
    /**
     * The name of the group.
     *
     * @schema #/definitions/PolicyDefinitionGroup#name
     */
    readonly name: string;

    /**
     * The group's category.
     *
     * @schema #/definitions/PolicyDefinitionGroup#category
     */
    readonly category?: string;

    /**
     * The group's display name.
     *
     * @schema #/definitions/PolicyDefinitionGroup#displayName
     */
    readonly displayName?: string;

    /**
     * A description of the group.
     *
     * @schema #/definitions/PolicyDefinitionGroup#description
     */
    readonly description?: string;

    /**
     * A resource ID of a resource that contains additional metadata about the group.
     *
     * @schema #/definitions/PolicyDefinitionGroup#additionalMetadataId
     */
    readonly additionalMetadataId?: string;

  }

