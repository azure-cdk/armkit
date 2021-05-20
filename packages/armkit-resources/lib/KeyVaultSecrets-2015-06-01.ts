        // generated by armkit
        import { ArmResource } from '@yetics/armkit-core';
        import { Construct } from 'constructs';

        /**
         * Microsoft.KeyVault/vaults/secrets
         *
         * @schema Microsoft.KeyVault.vaults_secrets
         */
        export class VaultsSecrets extends ArmResource {
          /**
           * Defines a "Microsoft.KeyVault.vaults_secrets" Arm Template object
           * @param scope the scope in which to define this object
           * @param name a scope-local name for the object
           * @param options configuration options
           */
          public constructor(scope: Construct, name: string, options: VaultsSecretsOptions) {
            super(scope, name, {
              ...options,
              armResourceType: 'vaults_secrets',
            });
          }
        }

        /**
         * Microsoft.KeyVault/vaults/secrets
         *
         * @schema Microsoft.KeyVault.vaults_secrets
         */
        export interface VaultsSecretsOptions {
          /**
           * @schema Microsoft.KeyVault.vaults_secrets#type
           */
          readonly type: string;

          /**
           * @schema Microsoft.KeyVault.vaults_secrets#apiVersion
           */
          readonly apiVersion?: string;

          /**
           * @schema Microsoft.KeyVault.vaults_secrets#properties
           */
          readonly properties: MicrosoftKeyVaultVaultsSecretsProperties;

        }

        /**
         * @schema MicrosoftKeyVaultVaultsSecretsProperties
         */
        export interface MicrosoftKeyVaultVaultsSecretsProperties {
          /**
           * Secret value
           *
           * @schema MicrosoftKeyVaultVaultsSecretsProperties#value
           */
          readonly value: string;

        }

