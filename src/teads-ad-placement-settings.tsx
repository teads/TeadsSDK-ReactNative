import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-teads-sdk-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

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
   * comments todo
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
   * comments todo
   *
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
   * comments todo
   *
   */
  public enableDebug = async () => {
    try {
      this.mapValue = await this.bridgeAdPlacementSettings.enableDebug();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * comments todo
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
   * comments todo
   *
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
   * comments todo
   *
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
   * comments todo
   *
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
   * comments todo
   *
   */
  public enableLocation = async () => {
    try {
      this.mapValue = await this.bridgeAdPlacementSettings.enableLocation();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * comments todo
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
   * comments todo
   *
   */
  public hideBrowserUrl = async () => {
    try {
      this.mapValue = await this.bridgeAdPlacementSettings.hideBrowserUrl();
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * comments todo
   *
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
