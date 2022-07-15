import {
  disableCrashMonitoring,
  disableTeadsAudioSessionManagement,
  enableDebug,
  userConsent,
  setUsPrivacy,
  disableBatteryMonitoring,
  addExtras,
  enableLocation,
  useLightEndScreen,
  hideBrowserUrl,
  toolBarBackgroundColor,
} from 'react-native-teads-sdk-module';

//add enum as in the flutter adapter
export default class TeadsAdPlacementSettings {
  mapValue: Map<String, any>;

  constructor() {
    this.mapValue = new Map<String, any>();
  }

  public RNdisableCrashMonitoring = async () => {
    try {
      this.mapValue = await disableCrashMonitoring();
    } catch (e) {
      console.error(e);
    }
  };

  public RNdisableTeadsAudioSessionManagement = async () => {
    try {
      this.mapValue = await disableTeadsAudioSessionManagement();
    } catch (e) {
      console.error(e);
    }
  };

  public RNenableDebug = async () => {
    try {
      this.mapValue = await enableDebug();
    } catch (e) {
      console.error(e);
    }
  };

  public RNuserConsent = async (
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

  public RNsetUsPrivacy = async (consent: String) => {
    try {
      this.mapValue = await setUsPrivacy(consent);
    } catch (e) {
      console.error(e);
    }
  };

  public RNdisableBatteryMonitoring = async () => {
    try {
      this.mapValue = await disableBatteryMonitoring();
    } catch (e) {
      console.error(e);
    }
  };

  public RNaddExtras = async (key: String, value: String) => {
    try {
      this.mapValue = await addExtras(key, value);
    } catch (e) {
      console.error(e);
    }
  };

  public RNenableLocation = async () => {
    try {
      this.mapValue = await enableLocation();
    } catch (e) {
      console.error(e);
    }
  };

  public RNuseLightEndScreen = async () => {
    try {
      this.mapValue = await useLightEndScreen();
    } catch (e) {
      console.error(e);
    }
  };

  public RNhideBrowserUrl = async () => {
    try {
      this.mapValue = await hideBrowserUrl();
    } catch (e) {
      console.error(e);
    }
  };

  public RNtoolBarBackgroundColor = async (color: number) => {
    try {
      this.mapValue = await toolBarBackgroundColor(color);
    } catch (e) {
      console.error(e);
    }
  };
}
