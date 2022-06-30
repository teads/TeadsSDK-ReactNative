import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-teads-sdk-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const TeadsSdkModule = NativeModules.TeadsSdkModule  ? NativeModules.TeadsSdkModule  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const RNAdPlacementSettings = NativeModules.RNAdPlacementSettings  ? NativeModules.RNAdPlacementSettings  : new Proxy(
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

export function disableCrashMonitoring():Promise<void>{
return RNAdPlacementSettings.disableCrashMonitoring()
}

export function disableBatteryMonitoring():Promise<void>{
  return RNAdPlacementSettings.disableBatteryMonitoring()
}

export function disableTeadsAudioSessionManagement():Promise<void>{
  return RNAdPlacementSettings.disableTeadsAudioSessionManagement()
}

export function enableDebug(): Promise<void> {
  return RNAdPlacementSettings.enableDebug();
}

export function setUsPrivacy(consent: String): Promise<void> {
  return RNAdPlacementSettings.setUsPrivacy(consent);
}

export function addExtras(key:String, value:String):Promise<void>{
  return RNAdPlacementSettings.addExtras(key,value);
}

export function enableLocation():Promise<void>{
  return RNAdPlacementSettings.enableLocation();
}

export function useLightEndScreen():Promise<void>{
  return RNAdPlacementSettings.useLightEndScreen();
}

export function hideBrowserUrl():Promise<void>{
  return RNAdPlacementSettings.hideBrowserUrl();
}

export function toolBarBackgroundColor(color:number):Promise<void>{
  return RNAdPlacementSettings.toolBarBackgroundColor(color);
}

export function userConsent(subjectToGDPR :String,
  consent :String,
  tcfVersion:  number,
  cmpSdkId: number ,
): Promise<void> {
  return RNAdPlacementSettings.userConsent(subjectToGDPR,consent,tcfVersion,cmpSdkId);
}
