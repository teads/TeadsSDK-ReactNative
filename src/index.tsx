import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-teads-sdk-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

//model from react native doc
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

export async function multiply(a: number, b: number): Promise<number> {
  return await TeadsSdkModule.multiply(a, b);
}

//RNAdPlacementSettings
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

export async function disableCrashMonitoring(): Promise<Map<String, any>> {
  return await RNAdPlacementSettings.disableCrashMonitoring();
  //return a Map thanks to WrittableMap from Kotlin
}

export async function disableBatteryMonitoring(): Promise<Map<String, any>> {
  return await RNAdPlacementSettings.disableBatteryMonitoring();
}

export async function disableTeadsAudioSessionManagement(): Promise<
  Map<String, any>
> {
  return await RNAdPlacementSettings.disableTeadsAudioSessionManagement();
}

export async function enableDebug(): Promise<Map<String, any>> {
  return await RNAdPlacementSettings.enableDebug();
}

export async function setUsPrivacy(consent: String): Promise<Map<String, any>> {
  return await RNAdPlacementSettings.setUsPrivacy(consent);
}

export async function addExtras(
  key: String,
  value: String
): Promise<Map<String, any>> {
  return await RNAdPlacementSettings.addExtras(key, value);
}

export async function enableLocation(): Promise<Map<String, any>> {
  return await RNAdPlacementSettings.enableLocation();
}

export async function useLightEndScreen(): Promise<Map<String, any>> {
  return await RNAdPlacementSettings.useLightEndScreen();
}

export async function hideBrowserUrl(): Promise<Map<String, any>> {
  return await RNAdPlacementSettings.hideBrowserUrl();
}

export async function toolBarBackgroundColor(
  color: number
): Promise<Map<String, any>> {
  return await RNAdPlacementSettings.toolBarBackgroundColor(color);
}

export async function userConsent(
  subjectToGDPR: String,
  consent: String,
  tcfVersion: number,
  cmpSdkId: number
): Promise<Map<String, any>> {
  return await RNAdPlacementSettings.userConsent(
    subjectToGDPR,
    consent,
    tcfVersion,
    cmpSdkId
  );
}

//RNAdRequestSettings
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

export async function enableValidationMode(): Promise<Map<String, any>> {
  return await RNAdRequestSettings.enableValidationMode();
}

export async function pageUrl(urlString: String): Promise<Map<String, any>> {
  return await RNAdRequestSettings.pageUrl(urlString);
}

export async function addExtraSetting(
  key: String,
  value: String
): Promise<Map<String, any>> {
  return await RNAdRequestSettings.addExtraSetting(key, value);
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

export async function createInReadPlacement(
  pid: number,
  settingsMap: Map<String, any>
) {
  console.log('iterator', settingsMap);
  await RNTeads.createInReadPlacement(pid, settingsMap);
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

export async function delegate(): Promise<void> {
  return await RNAd.delegate();
}

export async function playback(): Promise<void> {
  return await RNAd.playback();
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

export async function bind(requestIdentifier: String): Promise<void> {
  return await RNTeadsInReadAdView.bind(requestIdentifier);
}

//RNInReadAdPlacement
const RNInReadAdPlacement = NativeModules.RNInReadAdPlacement
  ? NativeModules.RNInReadAdPlacement
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export async function requestAd(
  settingsMap: Map<String, any>
): Promise<String> {
  console.log('settingsfromJS', settingsMap);
  return await RNInReadAdPlacement.requestAd(settingsMap);
}

//RNAdRatio to add when no more problem
