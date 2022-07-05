import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-teads-sdk-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

//model
const TeadsSdkModule = NativeModules.TeadsSdkModule
  ? NativeModules.TeadsSdkModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return TeadsSdkModule.multiply(a, b);
}

const RNAdPlacementSettings = NativeModules.RNAdPlacementSettings
  ? NativeModules.RNAdPlacementSettings
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function disableCrashMonitoring(): Promise<void> {
  return RNAdPlacementSettings.disableCrashMonitoring();
}

export function disableBatteryMonitoring(): Promise<void> {
  return RNAdPlacementSettings.disableBatteryMonitoring();
}

export function disableTeadsAudioSessionManagement(): Promise<void> {
  return RNAdPlacementSettings.disableTeadsAudioSessionManagement();
}

export function enableDebug(): Promise<void> {
  return RNAdPlacementSettings.enableDebug();
}

export function setUsPrivacy(consent: String): Promise<void> {
  return RNAdPlacementSettings.setUsPrivacy(consent);
}

export function addExtras(key: String, value: String): Promise<void> {
  return RNAdPlacementSettings.addExtras(key, value);
}

export function enableLocation(): Promise<void> {
  return RNAdPlacementSettings.enableLocation();
}

export function RNuseLightEndScreen(): Promise<void> {
  return RNAdPlacementSettings.useLightEndScreen();
}

export function hideBrowserUrl(): Promise<void> {
  return RNAdPlacementSettings.hideBrowserUrl();
}

export function toolBarBackgroundColor(color: number): Promise<void> {
  return RNAdPlacementSettings.toolBarBackgroundColor(color);
}

export function userConsent(
  subjectToGDPR: String,
  consent: String,
  tcfVersion: number,
  cmpSdkId: number
): Promise<void> {
  return RNAdPlacementSettings.userConsent(
    subjectToGDPR,
    consent,
    tcfVersion,
    cmpSdkId
  );
}

const RNAdRequestSettings = NativeModules.RNAdRequestSettings
  ? NativeModules.RNAdRequestSettings
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function enableValidationMode(): Promise<void> {
  return RNAdRequestSettings.enableValidationMode();
}

export function pageUrl(urlString: String): Promise<void> {
  return RNAdRequestSettings.pageUrl(urlString);
}

export function addExtraSetting(key: String, value: String): Promise<void> {
  return RNAdRequestSettings.addExtraSetting(key, value);
}
//RNTeads

const RNTeads = NativeModules.RNTeads
  ? NativeModules.RNTeads
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function createInReadPlacement(
  pid: number,
  settingsMap: Map<String, any>
): Promise<void> {
  return RNTeads.createInReadPlacement(pid, Object.fromEntries(settingsMap));
}

//RNAd

const RNAd = NativeModules.RNAd
  ? NativeModules.RNAd
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function delegate(): Promise<void> {
  return RNAd.delegate();
}

export function playback(): Promise<void> {
  return RNAd.playback();
}

//RNTeadsInReadAdView

const RNTeadsInReadAdView = NativeModules.RNTeadsInReadAdView
  ? NativeModules.RNTeadsInReadAdView
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function bind(requestIdentifier: String): Promise<void> {
  return RNTeadsInReadAdView.bind(requestIdentifier);
}
