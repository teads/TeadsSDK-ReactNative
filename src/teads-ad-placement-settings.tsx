import { NativeModules, Platform } from 'react-native';
import {
  disableTeadsAudioSessionManagement,
  userConsent,
  setUsPrivacy,
  disableBatteryMonitoring,
  addExtras,
  enableLocation,
  useLightEndScreen,
  hideBrowserUrl,
  toolBarBackgroundColor,
} from 'react-native-teads-sdk-module';

const LINKING_ERROR =
  `The package 'react-native-teads-sdk-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

//add enum as in the flutter adapter
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
   * fffffffffff ceash
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

  public disableTeadsAudioSessionManagement = async () => {
    try {
      this.mapValue = await disableTeadsAudioSessionManagement();
    } catch (e) {
      console.error(e);
    }
  };

  public enableDebug = async () => {
    try {
      this.mapValue = await this.bridgeAdPlacementSettings.enableDebug();
      console.log('enableDebug mapValue', this.mapValue);
    } catch (e) {
      console.error(e);
    }
  };

  public userConsent = async (
    subjectToGDPR: String,
    consent: String,
    tcfVersion: number = 2,
    cmpSdkId: number = 0
  ) => {
    try {
      this.mapValue = await userConsent(
        subjectToGDPR,
        consent,
        tcfVersion,
        cmpSdkId
      );
    } catch (e) {
      console.error(e);
    }
  };

  public setUsPrivacy = async (consent: String) => {
    try {
      this.mapValue = await setUsPrivacy(consent);
    } catch (e) {
      console.error(e);
    }
  };

  public disableBatteryMonitoring = async () => {
    try {
      this.mapValue = await disableBatteryMonitoring();
    } catch (e) {
      console.error(e);
    }
  };

  public addExtras = async (key: String, value: String) => {
    try {
      this.mapValue = await addExtras(key, value);
    } catch (e) {
      console.error(e);
    }
  };

  public enableLocation = async () => {
    try {
      this.mapValue = await enableLocation();
    } catch (e) {
      console.error(e);
    }
  };

  public useLightEndScreen = async () => {
    try {
      this.mapValue = await useLightEndScreen();
    } catch (e) {
      console.error(e);
    }
  };

  public hideBrowserUrl = async () => {
    try {
      this.mapValue = await hideBrowserUrl();
    } catch (e) {
      console.error(e);
    }
  };

  public toolBarBackgroundColor = async (color: number) => {
    try {
      this.mapValue = await toolBarBackgroundColor(color);
    } catch (e) {
      console.error(e);
    }
  };
}
