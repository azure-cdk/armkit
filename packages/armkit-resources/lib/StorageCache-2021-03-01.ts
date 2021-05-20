              // generated by armkit
              import { ArmResource } from '@yetics/armkit-core';
              import { Construct } from 'constructs';

              /**
               * Microsoft.StorageCache/caches
               *
               * @schema Microsoft.StorageCache.caches
               */
              export class Caches extends ArmResource {
                /**
                 * Defines a "Microsoft.StorageCache.caches" Arm Template object
                 * @param scope the scope in which to define this object
                 * @param name a scope-local name for the object
                 * @param options configuration options
                 */
                public constructor(scope: Construct, name: string, options: CachesOptions) {
                  super(scope, name, {
                    ...options,
                    armResourceType: 'caches',
                  });
                }
              }

              /**
               * Microsoft.StorageCache/caches/storageTargets
               *
               * @schema Microsoft.StorageCache.caches_storageTargets
               */
              export class CachesStorageTargets extends ArmResource {
                /**
                 * Defines a "Microsoft.StorageCache.caches_storageTargets" Arm Template object
                 * @param scope the scope in which to define this object
                 * @param name a scope-local name for the object
                 * @param options configuration options
                 */
                public constructor(scope: Construct, name: string, options: CachesStorageTargetsOptions) {
                  super(scope, name, {
                    ...options,
                    armResourceType: 'caches_storageTargets',
                  });
                }
              }

              /**
               * Microsoft.StorageCache/caches
               *
               * @schema Microsoft.StorageCache.caches
               */
              export interface CachesOptions {
                /**
                 * @schema Microsoft.StorageCache.caches#apiVersion
                 */
                readonly apiVersion?: MicrosoftStorageCacheCachesApiVersion;

                /**
                 * Cache identity properties.
                 *
                 * @schema Microsoft.StorageCache.caches#identity
                 */
                readonly identity?: CacheIdentity;

                /**
                 * Region name string.
                 *
                 * @schema Microsoft.StorageCache.caches#location
                 */
                readonly location?: string;

                /**
                 * Name of Cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
                 *
                 * @schema Microsoft.StorageCache.caches#name
                 */
                readonly name: MicrosoftStorageCacheCachesNamePattern;

                /**
                 * Properties of the Cache.
                 *
                 * @schema Microsoft.StorageCache.caches#properties
                 */
                readonly properties: CacheProperties;

                /**
                 * @schema Microsoft.StorageCache.caches#resources
                 */
                readonly resources?: CachesStorageTargetsChildResource[];

                /**
                 * SKU for the Cache.
                 *
                 * @schema Microsoft.StorageCache.caches#sku
                 */
                readonly sku?: CacheSku;

                /**
                 * Resource tags.
                 *
                 * @schema Microsoft.StorageCache.caches#tags
                 */
                readonly tags?: MicrosoftStorageCacheCachesTags;

                /**
                 * @schema Microsoft.StorageCache.caches#type
                 */
                readonly type: MicrosoftStorageCacheCachesType;

              }

              /**
               * Microsoft.StorageCache/caches/storageTargets
               *
               * @schema Microsoft.StorageCache.caches_storageTargets
               */
              export interface CachesStorageTargetsOptions {
                /**
                 * @schema Microsoft.StorageCache.caches_storageTargets#apiVersion
                 */
                readonly apiVersion?: MicrosoftStorageCacheCachesStorageTargetsApiVersion;

                /**
                 * Name of Storage Target.
                 *
                 * @schema Microsoft.StorageCache.caches_storageTargets#name
                 */
                readonly name: MicrosoftStorageCacheCachesStorageTargetsNamePattern;

                /**
                 * Properties of the Storage Target.
                 *
                 * @schema Microsoft.StorageCache.caches_storageTargets#properties
                 */
                readonly properties: StorageTargetProperties;

                /**
                 * @schema Microsoft.StorageCache.caches_storageTargets#type
                 */
                readonly type: MicrosoftStorageCacheCachesStorageTargetsType;

              }

              export enum MicrosoftStorageCacheCachesApiVersion {
                "MicrosoftStorageCacheCachesApiVersion_2021_03_01" = '2021-03-01',
              }

              /**
               * Cache identity properties.
               *
               * @schema #/definitions/CacheIdentity
               */
              export interface CacheIdentity {
                /**
                 * The type of identity used for the cache.
                 *
                 * @schema #/definitions/CacheIdentity#type
                 */
                readonly type?: CacheIdentityType;

              }

              /**
               * @schema MicrosoftStorageCacheCachesName
               */
              export class MicrosoftStorageCacheCachesNamePattern {
                public static pattern(value: string): string {
                  return value;
                }
              }

              /**
               * Properties of the Cache.
               *
               * @schema #/definitions/CacheProperties
               */
              export interface CacheProperties {
                /**
                 * The size of this Cache, in GB.
                 *
                 * @schema #/definitions/CacheProperties#cacheSizeGB
                 */
                readonly cacheSizeGB?: number;

                /**
                 * Cache Directory Services settings.
                 *
                 * @schema #/definitions/CacheProperties#directoryServicesSettings
                 */
                readonly directoryServicesSettings?: CacheDirectorySettings;

                /**
                 * Cache encryption settings.
                 *
                 * @schema #/definitions/CacheProperties#encryptionSettings
                 */
                readonly encryptionSettings?: CacheEncryptionSettings;

                /**
                 * Cache network settings.
                 *
                 * @schema #/definitions/CacheProperties#networkSettings
                 */
                readonly networkSettings?: CacheNetworkSettings;

                /**
                 * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
                 *
                 * @schema #/definitions/CacheProperties#provisioningState
                 */
                readonly provisioningState?: CachePropertiesProvisioningState;

                /**
                 * Cache security settings.
                 *
                 * @schema #/definitions/CacheProperties#securitySettings
                 */
                readonly securitySettings?: CacheSecuritySettings;

                /**
                 * A fully qualified URL.
                 *
                 * @schema #/definitions/CacheProperties#subnet
                 */
                readonly subnet?: string;

                /**
                 * Properties describing the software upgrade state of the Cache.
                 *
                 * @schema #/definitions/CacheProperties#upgradeStatus
                 */
                readonly upgradeStatus?: CacheUpgradeStatus;

              }

              /**
               * Microsoft.StorageCache/caches/storageTargets
               *
               * @schema #/definitions/caches_storageTargets_childResource
               */
              export interface CachesStorageTargetsChildResource {
                /**
                 * @schema #/definitions/caches_storageTargets_childResource#apiVersion
                 */
                readonly apiVersion: CachesStorageTargetsChildResourceApiVersion;

                /**
                 * Name of Storage Target.
                 *
                 * @schema #/definitions/caches_storageTargets_childResource#name
                 */
                readonly name: CachesStorageTargetsChildResourceNamePattern;

                /**
                 * Properties of the Storage Target.
                 *
                 * @schema #/definitions/caches_storageTargets_childResource#properties
                 */
                readonly properties: StorageTargetProperties;

                /**
                 * @schema #/definitions/caches_storageTargets_childResource#type
                 */
                readonly type: CachesStorageTargetsChildResourceType;

              }

              /**
               * SKU for the Cache.
               *
               * @schema #/definitions/CacheSku
               */
              export interface CacheSku {
                /**
                 * SKU name for this Cache.
                 *
                 * @schema #/definitions/CacheSku#name
                 */
                readonly name?: string;

              }

              /**
               * @schema MicrosoftStorageCacheCachesTags
               */
              export interface MicrosoftStorageCacheCachesTags {
              }

              export enum MicrosoftStorageCacheCachesType {
                "MicrosoftStorageCacheCachesType_MICROSOFT_STORAGE_CACHE_CACHES" = 'Microsoft.StorageCache/caches',
              }

              export enum MicrosoftStorageCacheCachesStorageTargetsApiVersion {
                "MicrosoftStorageCacheCachesStorageTargetsApiVersion_2021_03_01" = '2021-03-01',
              }

              /**
               * @schema MicrosoftStorageCacheCachesStorageTargetsName
               */
              export class MicrosoftStorageCacheCachesStorageTargetsNamePattern {
                public static pattern(value: string): string {
                  return value;
                }
              }

              /**
               * Properties of the Storage Target.
               *
               * @schema #/definitions/StorageTargetProperties
               */
              export interface StorageTargetProperties {
                /**
                 * Properties pertaining to the BlobNfsTarget.
                 *
                 * @schema #/definitions/StorageTargetProperties#blobNfs
                 */
                readonly blobNfs?: BlobNfsTarget;

                /**
                 * Properties pertaining to the ClfsTarget
                 *
                 * @schema #/definitions/StorageTargetProperties#clfs
                 */
                readonly clfs?: ClfsTarget;

                /**
                 * List of Cache namespace junctions to target for namespace associations.
                 *
                 * @schema #/definitions/StorageTargetProperties#junctions
                 */
                readonly junctions?: NamespaceJunction[];

                /**
                 * Properties pertaining to the Nfs3Target
                 *
                 * @schema #/definitions/StorageTargetProperties#nfs3
                 */
                readonly nfs3?: Nfs3Target;

                /**
                 * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property.
                 *
                 * @schema #/definitions/StorageTargetProperties#provisioningState
                 */
                readonly provisioningState?: StorageTargetPropertiesProvisioningState;

                /**
                 * Type of the Storage Target.
                 *
                 * @schema #/definitions/StorageTargetProperties#targetType
                 */
                readonly targetType: StorageTargetPropertiesTargetType;

                /**
                 * Properties pertaining to the UnknownTarget
                 *
                 * @schema #/definitions/StorageTargetProperties#unknown
                 */
                readonly unknown?: UnknownTarget;

              }

              export enum MicrosoftStorageCacheCachesStorageTargetsType {
                "MicrosoftStorageCacheCachesStorageTargetsType_MICROSOFT_STORAGE_CACHE_CACHES_STORAGE_TARGETS" = 'Microsoft.StorageCache/caches/storageTargets',
              }

              export enum CacheIdentityType {
                SYSTEM_ASSIGNED = 'SystemAssigned',
                NONE = 'None',
              }

              /**
               * Cache Directory Services settings.
               *
               * @schema #/definitions/CacheDirectorySettings
               */
              export interface CacheDirectorySettings {
                /**
                 * Active Directory settings used to join a cache to a domain.
                 *
                 * @schema #/definitions/CacheDirectorySettings#activeDirectory
                 */
                readonly activeDirectory?: CacheActiveDirectorySettings;

                /**
                 * Settings for Extended Groups username and group download.
                 *
                 * @schema #/definitions/CacheDirectorySettings#usernameDownload
                 */
                readonly usernameDownload?: CacheUsernameDownloadSettings;

              }

              /**
               * Cache encryption settings.
               *
               * @schema #/definitions/CacheEncryptionSettings
               */
              export interface CacheEncryptionSettings {
                /**
                 * Describes a reference to Key Vault Key.
                 *
                 * @schema #/definitions/CacheEncryptionSettings#keyEncryptionKey
                 */
                readonly keyEncryptionKey?: KeyVaultKeyReference;

              }

              /**
               * Cache network settings.
               *
               * @schema #/definitions/CacheNetworkSettings
               */
              export interface CacheNetworkSettings {
                /**
                 * DNS search domain
                 *
                 * @schema #/definitions/CacheNetworkSettings#dnsSearchDomain
                 */
                readonly dnsSearchDomain?: string;

                /**
                 * DNS servers for the cache to use.  It will be set from the network configuration if no value is provided.
                 *
                 * @schema #/definitions/CacheNetworkSettings#dnsServers
                 */
                readonly dnsServers?: string[];

                /**
                 * The IPv4 maximum transmission unit configured for the subnet.
                 *
                 * @schema #/definitions/CacheNetworkSettings#mtu
                 */
                readonly mtu?: number;

                /**
                 * NTP server IP Address or FQDN for the cache to use. The default is time.windows.com.
                 *
                 * @schema #/definitions/CacheNetworkSettings#ntpServer
                 */
                readonly ntpServer?: string;

              }

              export enum CachePropertiesProvisioningState {
                SUCCEEDED = 'Succeeded',
                FAILED = 'Failed',
                CANCELLED = 'Cancelled',
                CREATING = 'Creating',
                DELETING = 'Deleting',
                UPDATING = 'Updating',
              }

              /**
               * Cache security settings.
               *
               * @schema #/definitions/CacheSecuritySettings
               */
              export interface CacheSecuritySettings {
                /**
                 * NFS access policies defined for this cache.
                 *
                 * @schema #/definitions/CacheSecuritySettings#accessPolicies
                 */
                readonly accessPolicies?: NfsAccessPolicy[];

              }

              /**
               * Properties describing the software upgrade state of the Cache.
               *
               * @schema #/definitions/CacheUpgradeStatus
               */
              export interface CacheUpgradeStatus {
              }

              export enum CachesStorageTargetsChildResourceApiVersion {
                "CachesStorageTargetsChildResourceApiVersion_2021_03_01" = '2021-03-01',
              }

              /**
               * @schema #/definitions/cachesStorageTargetsChildResourceName
               */
              export class CachesStorageTargetsChildResourceNamePattern {
                public static pattern(value: string): string {
                  return value;
                }
              }

              export enum CachesStorageTargetsChildResourceType {
                STORAGE_TARGETS = 'storageTargets',
              }

              /**
               * Properties pertaining to the BlobNfsTarget.
               *
               * @schema #/definitions/BlobNfsTarget
               */
              export interface BlobNfsTarget {
                /**
                 * A fully qualified URL.
                 *
                 * @schema #/definitions/BlobNfsTarget#target
                 */
                readonly target?: string;

                /**
                 * Identifies the StorageCache usage model to be used for this storage target.
                 *
                 * @schema #/definitions/BlobNfsTarget#usageModel
                 */
                readonly usageModel?: string;

              }

              /**
               * Properties pertaining to the ClfsTarget
               *
               * @schema #/definitions/ClfsTarget
               */
              export interface ClfsTarget {
                /**
                 * A fully qualified URL.
                 *
                 * @schema #/definitions/ClfsTarget#target
                 */
                readonly target?: string;

              }

              /**
               * A namespace junction.
               *
               * @schema #/definitions/NamespaceJunction
               */
              export interface NamespaceJunction {
                /**
                 * Namespace path on a Cache for a Storage Target.
                 *
                 * @schema #/definitions/NamespaceJunction#namespacePath
                 */
                readonly namespacePath?: string;

                /**
                 * Name of the access policy applied to this junction.
                 *
                 * @schema #/definitions/NamespaceJunction#nfsAccessPolicy
                 */
                readonly nfsAccessPolicy?: string;

                /**
                 * NFS export where targetPath exists.
                 *
                 * @schema #/definitions/NamespaceJunction#nfsExport
                 */
                readonly nfsExport?: string;

                /**
                 * Path in Storage Target to which namespacePath points.
                 *
                 * @schema #/definitions/NamespaceJunction#targetPath
                 */
                readonly targetPath?: string;

              }

              /**
               * Properties pertaining to the Nfs3Target
               *
               * @schema #/definitions/Nfs3Target
               */
              export interface Nfs3Target {
                /**
                 * IP address or host name of an NFSv3 host (e.g., 10.0.44.44).
                 *
                 * @schema #/definitions/Nfs3Target#target
                 */
                readonly target?: Nfs3TargetTargetPattern;

                /**
                 * Identifies the StorageCache usage model to be used for this storage target.
                 *
                 * @schema #/definitions/Nfs3Target#usageModel
                 */
                readonly usageModel?: string;

              }

              export enum StorageTargetPropertiesProvisioningState {
                SUCCEEDED = 'Succeeded',
                FAILED = 'Failed',
                CANCELLED = 'Cancelled',
                CREATING = 'Creating',
                DELETING = 'Deleting',
                UPDATING = 'Updating',
              }

              export enum StorageTargetPropertiesTargetType {
                "StorageTargetPropertiesTargetType_NFS3" = 'nfs3',
                CLFS = 'clfs',
                UNKNOWN = 'unknown',
                BLOB_NFS = 'blobNfs',
              }

              /**
               * Properties pertaining to the UnknownTarget
               *
               * @schema #/definitions/UnknownTarget
               */
              export interface UnknownTarget {
                /**
                 * Properties of an unknown type of Storage Target.
                 *
                 * @schema #/definitions/UnknownTarget#attributes
                 */
                readonly attributes?: UnknownTargetAttributes;

              }

              /**
               * Active Directory settings used to join a cache to a domain.
               *
               * @schema #/definitions/CacheActiveDirectorySettings
               */
              export interface CacheActiveDirectorySettings {
                /**
                 * The NetBIOS name to assign to the HPC Cache when it joins the Active Directory domain as a server. Length must 1-15 characters from the class [-0-9a-zA-Z].
                 *
                 * @schema #/definitions/CacheActiveDirectorySettings#cacheNetBiosName
                 */
                readonly cacheNetBiosName: CacheActiveDirectorySettingsCacheNetBiosNamePattern;

                /**
                 * Active Directory admin credentials used to join the HPC Cache to a domain.
                 *
                 * @schema #/definitions/CacheActiveDirectorySettings#credentials
                 */
                readonly credentials?: CacheActiveDirectorySettingsCredentials;

                /**
                 * The fully qualified domain name of the Active Directory domain controller.
                 *
                 * @schema #/definitions/CacheActiveDirectorySettings#domainName
                 */
                readonly domainName: string;

                /**
                 * The Active Directory domain's NetBIOS name.
                 *
                 * @schema #/definitions/CacheActiveDirectorySettings#domainNetBiosName
                 */
                readonly domainNetBiosName: string;

                /**
                 * Primary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name.
                 *
                 * @schema #/definitions/CacheActiveDirectorySettings#primaryDnsIpAddress
                 */
                readonly primaryDnsIpAddress: string;

                /**
                 * Secondary DNS IP address used to resolve the Active Directory domain controller's fully qualified domain name.
                 *
                 * @schema #/definitions/CacheActiveDirectorySettings#secondaryDnsIpAddress
                 */
                readonly secondaryDnsIpAddress?: string;

              }

              /**
               * Settings for Extended Groups username and group download.
               *
               * @schema #/definitions/CacheUsernameDownloadSettings
               */
              export interface CacheUsernameDownloadSettings {
                /**
                 * Determines if the certificate should be automatically downloaded. This applies to 'caCertificateURI' only if 'requireValidCertificate' is true.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettings#autoDownloadCertificate
                 */
                readonly autoDownloadCertificate?: boolean;

                /**
                 * The URI of the CA certificate to validate the LDAP secure connection. This field must be populated when 'requireValidCertificate' is set to true.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettings#caCertificateURI
                 */
                readonly caCertificateURI?: string;

                /**
                 * When present, these are the credentials for the secure LDAP connection.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettings#credentials
                 */
                readonly credentials?: CacheUsernameDownloadSettingsCredentials;

                /**
                 * Whether or not the LDAP connection should be encrypted.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettings#encryptLdapConnection
                 */
                readonly encryptLdapConnection?: boolean;

                /**
                 * Whether or not Extended Groups is enabled.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettings#extendedGroups
                 */
                readonly extendedGroups?: boolean;

                /**
                 * The URI of the file containing group information (in /etc/group file format). This field must be populated when 'usernameSource' is set to 'File'.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettings#groupFileURI
                 */
                readonly groupFileURI?: string;

                /**
                 * The base distinguished name for the LDAP domain.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettings#ldapBaseDN
                 */
                readonly ldapBaseDN?: string;

                /**
                 * The fully qualified domain name or IP address of the LDAP server to use.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettings#ldapServer
                 */
                readonly ldapServer?: string;

                /**
                 * Determines if the certificates must be validated by a certificate authority. When true, caCertificateURI must be provided.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettings#requireValidCertificate
                 */
                readonly requireValidCertificate?: boolean;

                /**
                 * The URI of the file containing user information (in /etc/passwd file format). This field must be populated when 'usernameSource' is set to 'File'.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettings#userFileURI
                 */
                readonly userFileURI?: string;

                /**
                 * This setting determines how the cache gets username and group names for clients.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettings#usernameSource
                 */
                readonly usernameSource?: CacheUsernameDownloadSettingsUsernameSource;

              }

              /**
               * Describes a reference to Key Vault Key.
               *
               * @schema #/definitions/KeyVaultKeyReference
               */
              export interface KeyVaultKeyReference {
                /**
                 * The URL referencing a key encryption key in Key Vault.
                 *
                 * @schema #/definitions/KeyVaultKeyReference#keyUrl
                 */
                readonly keyUrl: string;

                /**
                 * Describes a resource Id to source Key Vault.
                 *
                 * @schema #/definitions/KeyVaultKeyReference#sourceVault
                 */
                readonly sourceVault: KeyVaultKeyReferenceSourceVault;

              }

              /**
               * A set of rules describing access policies applied to NFSv3 clients of the cache.
               *
               * @schema #/definitions/NfsAccessPolicy
               */
              export interface NfsAccessPolicy {
                /**
                 * The set of rules describing client accesses allowed under this policy.
                 *
                 * @schema #/definitions/NfsAccessPolicy#accessRules
                 */
                readonly accessRules: NfsAccessRule[];

                /**
                 * Name identifying this policy. Access Policy names are not case sensitive.
                 *
                 * @schema #/definitions/NfsAccessPolicy#name
                 */
                readonly name: string;

              }

              /**
               * @schema #/definitions/nfs3TargetTarget
               */
              export class Nfs3TargetTargetPattern {
                public static pattern(value: string): string {
                  return value;
                }
              }

              /**
               * @schema #/definitions/unknownTargetAttributes
               */
              export interface UnknownTargetAttributes {
              }

              /**
               * @schema #/definitions/cacheActiveDirectorySettingsCacheNetBiosName
               */
              export class CacheActiveDirectorySettingsCacheNetBiosNamePattern {
                public static pattern(value: string): string {
                  return value;
                }
              }

              /**
               * Active Directory admin credentials used to join the HPC Cache to a domain.
               *
               * @schema #/definitions/CacheActiveDirectorySettingsCredentials
               */
              export interface CacheActiveDirectorySettingsCredentials {
                /**
                 * Plain text password of the Active Directory domain administrator. This value is stored encrypted and not returned on response.
                 *
                 * @schema #/definitions/CacheActiveDirectorySettingsCredentials#password
                 */
                readonly password: string;

                /**
                 * Username of the Active Directory domain administrator. This value is stored encrypted and not returned on response.
                 *
                 * @schema #/definitions/CacheActiveDirectorySettingsCredentials#username
                 */
                readonly username: string;

              }

              /**
               * When present, these are the credentials for the secure LDAP connection.
               *
               * @schema #/definitions/CacheUsernameDownloadSettingsCredentials
               */
              export interface CacheUsernameDownloadSettingsCredentials {
                /**
                 * The Bind Distinguished Name identity to be used in the secure LDAP connection. This value is stored encrypted and not returned on response.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettingsCredentials#bindDn
                 */
                readonly bindDn?: string;

                /**
                 * The Bind password to be used in the secure LDAP connection. This value is stored encrypted and not returned on response.
                 *
                 * @schema #/definitions/CacheUsernameDownloadSettingsCredentials#bindPassword
                 */
                readonly bindPassword?: string;

              }

              export enum CacheUsernameDownloadSettingsUsernameSource {
                AD = 'AD',
                LDAP = 'LDAP',
                FILE = 'File',
                NONE = 'None',
              }

              /**
               * Describes a resource Id to source Key Vault.
               *
               * @schema #/definitions/KeyVaultKeyReferenceSourceVault
               */
              export interface KeyVaultKeyReferenceSourceVault {
                /**
                 * Resource Id.
                 *
                 * @schema #/definitions/KeyVaultKeyReferenceSourceVault#id
                 */
                readonly id?: string;

              }

              /**
               * Rule to place restrictions on portions of the cache namespace being presented to clients.
               *
               * @schema #/definitions/NfsAccessRule
               */
              export interface NfsAccessRule {
                /**
                 * Access allowed by this rule.
                 *
                 * @schema #/definitions/NfsAccessRule#access
                 */
                readonly access: NfsAccessRuleAccess;

                /**
                 * GID value that replaces 0 when rootSquash is true. This will use the value of anonymousUID if not provided.
                 *
                 * @schema #/definitions/NfsAccessRule#anonymousGID
                 */
                readonly anonymousGID?: string;

                /**
                 * UID value that replaces 0 when rootSquash is true. 65534 will be used if not provided.
                 *
                 * @schema #/definitions/NfsAccessRule#anonymousUID
                 */
                readonly anonymousUID?: string;

                /**
                 * Filter applied to the scope for this rule. The filter's format depends on its scope. 'default' scope matches all clients and has no filter value. 'network' scope takes a filter in CIDR format (for example, 10.99.1.0/24). 'host' takes an IP address or fully qualified domain name as filter. If a client does not match any filter rule and there is no default rule, access is denied.
                 *
                 * @schema #/definitions/NfsAccessRule#filter
                 */
                readonly filter?: string;

                /**
                 * Map root accesses to anonymousUID and anonymousGID.
                 *
                 * @schema #/definitions/NfsAccessRule#rootSquash
                 */
                readonly rootSquash?: boolean;

                /**
                 * Scope for this rule. The scope and filter determine which clients match the rule.
                 *
                 * @schema #/definitions/NfsAccessRule#scope
                 */
                readonly scope: NfsAccessRuleScope;

                /**
                 * For the default policy, allow access to subdirectories under the root export. If this is set to no, clients can only mount the path '/'. If set to yes, clients can mount a deeper path, like '/a/b'.
                 *
                 * @schema #/definitions/NfsAccessRule#submountAccess
                 */
                readonly submountAccess?: boolean;

                /**
                 * Allow SUID semantics.
                 *
                 * @schema #/definitions/NfsAccessRule#suid
                 */
                readonly suid?: boolean;

              }

              export enum NfsAccessRuleAccess {
                NO = 'no',
                RO = 'ro',
                RW = 'rw',
              }

              export enum NfsAccessRuleScope {
                DEFAULT = 'default',
                NETWORK = 'network',
                HOST = 'host',
              }

