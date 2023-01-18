import { NativeModules } from 'react-native';
import { LINKING_ERROR } from './constants';

export default class TeadsAdPlacementSettings {
  public mapValue: Map<String, any>;

  private bridgeAdPlacementSettings = NativeModules.RNAdPlacementSettings
    ? NativeModules.RNAdPlacementSettings
    : new Proxy(
        {},
        {
          get() {
            throw new Error(LINKING_ERROR);
          },
        }
      );

  constructor() {
    this.mapValue = new Map<String, any>();
  }

  /**
   * #### Teads Crash Monitoring is a tool we use to monitor crashes that may occur ONLY IN OUR SDK.
   * This tool is really helpful for us and it aims to improve our product continuously.
   * Prevent TeadsSDK to automatically handle/monitor crashes
   *
   * - Note: TeadsSDK does not disturb any third party crash handler/reporter such as Crashlytics
   *
   */
  public disableCrashMonitoring = async () => {
    try {
      this.mapValue =
        await this.bridgeAdPlacementSettings.disableCrashMonitoring();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * #### By default, the Teads SDK handles the audio session by setting its category to ambient.
   * This means that all the audio played by other apps will be simply mixed with the ad sound.
   *
   * - Note: If you chose to handle the audio session by yourself you need to call `disableTeadsAudioSessionManagement` and implement  ``TeadsPlaybackDelegate``
   */
  public disableTeadsAudioSessionManagement = async () => {
    try {
      this.mapValue =
        await this.bridgeAdPlacementSettings.disableTeadsAudioSessionManagement();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * #### Enable all TeadsSDK Log for debugging purpose
   *
   * - warning: Remember to remove this setting when you are going in production
   */
  public enableDebug = async () => {
    try {
      this.mapValue = await this.bridgeAdPlacementSettings.enableDebug();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * #### In order to follow the IAB specifications for GDPR, please fill the following parameters with attention.
   * - Parameters:
   *    - subjectToGDPR: `"1"` if the traffic or the publisher is in the EEA (European Economic Area), `"0"` if it is not, `"null"` if it's unknown.
   *    - consent: Which vendors and purposes did the user give consent for.
   *    - tcfVersion: Transparency and Consent Framework version.
   *    - cmpSdkID: Consent Manager Platform unique identifier.
   *
   * -  Note: If you use a [CMP](https://iabeurope.eu/tcf-for-cmps/), you can skip this step: CMP will store those parameters into `UserDefaults`, TeadSDK will automatically retrieve these values. [GDPR Transparency and Consent Framework ](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md) IAB documentation.
   *
   */
  public userConsent = async (
    subjectToGDPR: String,
    consent: String,
    tcfVersion: number = 2,
    cmpSdkId: number = 0
  ) => {
    try {
      this.mapValue = await this.bridgeAdPlacementSettings.userConsent(
        subjectToGDPR,
        consent,
        tcfVersion,
        cmpSdkId
      );
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * #### In order to follow the IAB specifications for CCPA, please fill the following parameters with attention.
   *  - Parameters:
   *    - consent: The CCPA consent string.
   *
   *  - Note: If you use a Content Management Platform, you can skip this step: CMP will store those parameters into `UserDefaults`, TeadSDK will automatically retrieve consent value. [CCPA](https://github.com/InteractiveAdvertisingBureau/USPrivacy/blob/master/CCPA/US%20Privacy%20String.md) IAB documentation.
   */
  public setUsPrivacy = async (consent: String) => {
    try {
      this.mapValue = await this.bridgeAdPlacementSettings.setUsPrivacy(
        consent
      );
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * #### Prevent to automatically set UIDevice.current.isBatteryMonitoringEnabled
   */
  public disableBatteryMonitoring = async () => {
    try {
      this.mapValue =
        await this.bridgeAdPlacementSettings.disableBatteryMonitoring();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * #### Add extra informations to settings.
   *  - parameters:
   *      - value: Extra value.
   *      - key: Extra key.
   *
   *  - Note: for Adapater scope mainly
   */
  public addExtras = async (key: String, value: String) => {
    try {
      this.mapValue = await this.bridgeAdPlacementSettings.addExtras(
        key,
        value
      );
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * When the SDK will be instantiate, it will retrieve the user precise or approximate location if the host
   * application has the permissions. Disabling the location will reduce the quantity of ads received.
   */
  public enableLocation = async () => {
    try {
      this.mapValue = await this.bridgeAdPlacementSettings.enableLocation();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * #### When the ad playback is finished, we display an endscreen with light color. (Dark color by default).
   *
   */
  public useLightEndScreen = async () => {
    try {
      this.mapValue = await this.bridgeAdPlacementSettings.useLightEndScreen();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * #### Hide the website url in the internal browser only. The url is visible by default.
   */
  public hideBrowserUrl = async () => {
    try {
      this.mapValue = await this.bridgeAdPlacementSettings.hideBrowserUrl();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * #### Set the toolbar background color on the browser.
   * - parameters:
   *      - color the color as a int
   */
  public toolBarBackgroundColor = async (color: number) => {
    try {
      this.mapValue =
        await this.bridgeAdPlacementSettings.toolBarBackgroundColor(color);
    } catch (e) {
      console.error(e);
    }
  };
}
