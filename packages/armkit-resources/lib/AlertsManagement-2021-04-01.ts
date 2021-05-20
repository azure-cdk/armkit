// generated by armkit
import { ArmResource } from '@yetics/armkit-core';
import { Construct } from 'constructs';

/**
 * microsoft.alertsManagement/smartDetectorAlertRules
 *
 * @schema microsoft.alertsManagement.smartDetectorAlertRules
 */
export class SmartDetectorAlertRules extends ArmResource {
  /**
   * Defines a "microsoft.alertsManagement.smartDetectorAlertRules" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: SmartDetectorAlertRulesOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'smartDetectorAlertRules',
    });
  }
}

/**
 * microsoft.alertsManagement/smartDetectorAlertRules
 *
 * @schema microsoft.alertsManagement.smartDetectorAlertRules
 */
export interface SmartDetectorAlertRulesOptions {
  /**
   * @schema microsoft.alertsManagement.smartDetectorAlertRules#apiVersion
   */
  readonly apiVersion?: MicrosoftAlertsManagementSmartDetectorAlertRulesApiVersion;

  /**
   * The resource location.
   *
   * @schema microsoft.alertsManagement.smartDetectorAlertRules#location
   */
  readonly location?: string;

  /**
   * The name of the alert rule.
   *
   * @schema microsoft.alertsManagement.smartDetectorAlertRules#name
   */
  readonly name: string;

  /**
   * The alert rule properties.
   *
   * @schema microsoft.alertsManagement.smartDetectorAlertRules#properties
   */
  readonly properties: AlertRuleProperties;

  /**
   * The resource tags.
   *
   * @schema microsoft.alertsManagement.smartDetectorAlertRules#tags
   */
  readonly tags?: MicrosoftAlertsManagementSmartDetectorAlertRulesTags;

  /**
   * @schema microsoft.alertsManagement.smartDetectorAlertRules#type
   */
  readonly type: MicrosoftAlertsManagementSmartDetectorAlertRulesType;

}

export enum MicrosoftAlertsManagementSmartDetectorAlertRulesApiVersion {
  "MicrosoftAlertsManagementSmartDetectorAlertRulesApiVersion_2021_04_01" = '2021-04-01',
}

/**
 * The alert rule properties.
 *
 * @schema #/definitions/AlertRuleProperties
 */
export interface AlertRuleProperties {
  /**
   * The Action Groups information, used by the alert rule.
   *
   * @schema #/definitions/AlertRuleProperties#actionGroups
   */
  readonly actionGroups: ActionGroupsInformation;

  /**
   * The alert rule description.
   *
   * @schema #/definitions/AlertRuleProperties#description
   */
  readonly description?: string;

  /**
   * The detector information. By default this is not populated, unless it's specified in expandDetector
   *
   * @schema #/definitions/AlertRuleProperties#detector
   */
  readonly detector: Detector;

  /**
   * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 1 minute, depending on the detector.
   *
   * @schema #/definitions/AlertRuleProperties#frequency
   */
  readonly frequency: string;

  /**
   * The alert rule resources scope.
   *
   * @schema #/definitions/AlertRuleProperties#scope
   */
  readonly scope: string[];

  /**
   * The alert rule severity.
   *
   * @schema #/definitions/AlertRuleProperties#severity
   */
  readonly severity: AlertRulePropertiesSeverity;

  /**
   * The alert rule state.
   *
   * @schema #/definitions/AlertRuleProperties#state
   */
  readonly state: AlertRulePropertiesState;

  /**
   * Optional throttling information for the alert rule.
   *
   * @schema #/definitions/AlertRuleProperties#throttling
   */
  readonly throttling?: ThrottlingInformation;

}

/**
 * @schema MicrosoftAlertsManagementSmartDetectorAlertRulesTags
 */
export interface MicrosoftAlertsManagementSmartDetectorAlertRulesTags {
}

export enum MicrosoftAlertsManagementSmartDetectorAlertRulesType {
  "MicrosoftAlertsManagementSmartDetectorAlertRulesType_MICROSOFT_ALERTS_MANAGEMENT_SMART_DETECTOR_ALERT_RULES" = 'microsoft.alertsManagement/smartDetectorAlertRules',
}

/**
 * The Action Groups information, used by the alert rule.
 *
 * @schema #/definitions/ActionGroupsInformation
 */
export interface ActionGroupsInformation {
  /**
   * An optional custom email subject to use in email notifications.
   *
   * @schema #/definitions/ActionGroupsInformation#customEmailSubject
   */
  readonly customEmailSubject?: string;

  /**
   * An optional custom web-hook payload to use in web-hook notifications.
   *
   * @schema #/definitions/ActionGroupsInformation#customWebhookPayload
   */
  readonly customWebhookPayload?: string;

  /**
   * The Action Group resource IDs.
   *
   * @schema #/definitions/ActionGroupsInformation#groupIds
   */
  readonly groupIds: string[];

}

/**
 * The detector information. By default this is not populated, unless it's specified in expandDetector
 *
 * @schema #/definitions/Detector
 */
export interface Detector {
  /**
   * The detector id.
   *
   * @schema #/definitions/Detector#id
   */
  readonly id: string;

  /**
   * The detector's parameters.'
   *
   * @schema #/definitions/Detector#parameters
   */
  readonly parameters?: DetectorParameters;

}

export enum AlertRulePropertiesSeverity {
  "AlertRulePropertiesSeverity_SEV0" = 'Sev0',
  "AlertRulePropertiesSeverity_SEV1" = 'Sev1',
  "AlertRulePropertiesSeverity_SEV2" = 'Sev2',
  "AlertRulePropertiesSeverity_SEV3" = 'Sev3',
  "AlertRulePropertiesSeverity_SEV4" = 'Sev4',
}

export enum AlertRulePropertiesState {
  ENABLED = 'Enabled',
  DISABLED = 'Disabled',
}

/**
 * Optional throttling information for the alert rule.
 *
 * @schema #/definitions/ThrottlingInformation
 */
export interface ThrottlingInformation {
  /**
   * The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes
   *
   * @schema #/definitions/ThrottlingInformation#duration
   */
  readonly duration?: string;

}

/**
 * @schema #/definitions/detectorParameters
 */
export interface DetectorParameters {
}

