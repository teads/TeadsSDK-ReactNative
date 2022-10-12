import { NativeModules, Platform } from 'react-native'
const LINKING_ERROR =
  `The package 'react-native-teads-sdk-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({
    ios: "- You have run 'pod install'\n",
    default: ''
  }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n' //model from react native doc

const TeadsSdkModule = NativeModules.TeadsSdkModule
  ? NativeModules.TeadsSdkModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )
export async function multiply(a, b) {
  return await TeadsSdkModule.multiply(a, b)
} //RNAdPlacementSettings

const RNAdPlacementSettings = NativeModules.RNAdPlacementSettings
  ? NativeModules.RNAdPlacementSettings
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )
export async function disableCrashMonitoring() {
  return await RNAdPlacementSettings.disableCrashMonitoring() //return a Map thanks to WrittableMap from Kotlin
}
export async function disableBatteryMonitoring() {
  return await RNAdPlacementSettings.disableBatteryMonitoring()
}
export async function disableTeadsAudioSessionManagement() {
  return await RNAdPlacementSettings.disableTeadsAudioSessionManagement()
}
export async function enableDebug() {
  return await RNAdPlacementSettings.enableDebug()
}
export async function setUsPrivacy(consent) {
  return await RNAdPlacementSettings.setUsPrivacy(consent)
}
export async function addExtras(key, value) {
  return await RNAdPlacementSettings.addExtras(key, value)
}
export async function enableLocation() {
  return await RNAdPlacementSettings.enableLocation()
}
export async function useLightEndScreen() {
  return await RNAdPlacementSettings.useLightEndScreen()
}
export async function hideBrowserUrl() {
  return await RNAdPlacementSettings.hideBrowserUrl()
}
export async function toolBarBackgroundColor(color) {
  return await RNAdPlacementSettings.toolBarBackgroundColor(color)
}
export async function userConsent(subjectToGDPR, consent, tcfVersion, cmpSdkId) {
  return await RNAdPlacementSettings.userConsent(subjectToGDPR, consent, tcfVersion, cmpSdkId)
} //RNAdRequestSettings

const RNAdRequestSettings = NativeModules.RNAdRequestSettings
  ? NativeModules.RNAdRequestSettings
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )
export async function enableValidationMode() {
  return await RNAdRequestSettings.enableValidationMode()
}
export async function pageUrl(urlString) {
  return await RNAdRequestSettings.pageUrl(urlString)
}
export async function addExtraSetting(key, value) {
  return await RNAdRequestSettings.addExtraSetting(key, value)
} //RNTeads

const RNTeads = NativeModules.RNTeads
  ? NativeModules.RNTeads
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )
export async function createInReadPlacement(pid, settingsMap) {
  console.log('iterator', settingsMap)
  await RNTeads.createInReadPlacement(pid, settingsMap)
} //RNAd

const RNAd = NativeModules.RNAd
  ? NativeModules.RNAd
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )
export async function delegate() {
  return await RNAd.delegate()
}
export async function playback() {
  return await RNAd.playback()
} //RNTeadsInReadAdView

const RNTeadsInReadAdView = NativeModules.RNTeadsInReadAdView
  ? NativeModules.RNTeadsInReadAdView
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )
export async function bind(requestIdentifier) {
  return await RNTeadsInReadAdView.bind(requestIdentifier)
} //RNInReadAdPlacement

const RNInReadAdPlacement = NativeModules.RNInReadAdPlacement
  ? NativeModules.RNInReadAdPlacement
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )
export async function requestAd(settingsMap) {
  console.log('settings', settingsMap)
  return await RNInReadAdPlacement.requestAd(settingsMap)
} //RNAdRatio to add when no more problem
//# sourceMappingURL=index.js.map
