'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.addExtraSetting = addExtraSetting
exports.addExtras = addExtras
exports.bind = bind
exports.createInReadPlacement = createInReadPlacement
exports.delegate = delegate
exports.disableBatteryMonitoring = disableBatteryMonitoring
exports.disableCrashMonitoring = disableCrashMonitoring
exports.disableTeadsAudioSessionManagement = disableTeadsAudioSessionManagement
exports.enableDebug = enableDebug
exports.enableLocation = enableLocation
exports.enableValidationMode = enableValidationMode
exports.hideBrowserUrl = hideBrowserUrl
exports.multiply = multiply
exports.pageUrl = pageUrl
exports.playback = playback
exports.requestAd = requestAd
exports.setUsPrivacy = setUsPrivacy
exports.toolBarBackgroundColor = toolBarBackgroundColor
exports.useLightEndScreen = useLightEndScreen
exports.userConsent = userConsent

var _reactNative = require('react-native')

const LINKING_ERROR =
  `The package 'react-native-teads-sdk-module' doesn't seem to be linked. Make sure: \n\n` +
  _reactNative.Platform.select({
    ios: "- You have run 'pod install'\n",
    default: ''
  }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n' //model from react native doc

const TeadsSdkModule = _reactNative.NativeModules.TeadsSdkModule
  ? _reactNative.NativeModules.TeadsSdkModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )

async function multiply(a, b) {
  return await TeadsSdkModule.multiply(a, b)
} //RNAdPlacementSettings

const RNAdPlacementSettings = _reactNative.NativeModules.RNAdPlacementSettings
  ? _reactNative.NativeModules.RNAdPlacementSettings
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )

async function disableCrashMonitoring() {
  return await RNAdPlacementSettings.disableCrashMonitoring() //return a Map thanks to WrittableMap from Kotlin
}

async function disableBatteryMonitoring() {
  return await RNAdPlacementSettings.disableBatteryMonitoring()
}

async function disableTeadsAudioSessionManagement() {
  return await RNAdPlacementSettings.disableTeadsAudioSessionManagement()
}

async function enableDebug() {
  return await RNAdPlacementSettings.enableDebug()
}

async function setUsPrivacy(consent) {
  return await RNAdPlacementSettings.setUsPrivacy(consent)
}

async function addExtras(key, value) {
  return await RNAdPlacementSettings.addExtras(key, value)
}

async function enableLocation() {
  return await RNAdPlacementSettings.enableLocation()
}

async function useLightEndScreen() {
  return await RNAdPlacementSettings.useLightEndScreen()
}

async function hideBrowserUrl() {
  return await RNAdPlacementSettings.hideBrowserUrl()
}

async function toolBarBackgroundColor(color) {
  return await RNAdPlacementSettings.toolBarBackgroundColor(color)
}

async function userConsent(subjectToGDPR, consent, tcfVersion, cmpSdkId) {
  return await RNAdPlacementSettings.userConsent(subjectToGDPR, consent, tcfVersion, cmpSdkId)
} //RNAdRequestSettings

const RNAdRequestSettings = _reactNative.NativeModules.RNAdRequestSettings
  ? _reactNative.NativeModules.RNAdRequestSettings
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )

async function enableValidationMode() {
  return await RNAdRequestSettings.enableValidationMode()
}

async function pageUrl(urlString) {
  return await RNAdRequestSettings.pageUrl(urlString)
}

async function addExtraSetting(key, value) {
  return await RNAdRequestSettings.addExtraSetting(key, value)
} //RNTeads

const RNTeads = _reactNative.NativeModules.RNTeads
  ? _reactNative.NativeModules.RNTeads
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )

async function createInReadPlacement(pid, settingsMap) {
  console.log('iterator', settingsMap)
  await RNTeads.createInReadPlacement(pid, settingsMap)
} //RNAd

const RNAd = _reactNative.NativeModules.RNAd
  ? _reactNative.NativeModules.RNAd
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )

async function delegate() {
  return await RNAd.delegate()
}

async function playback() {
  return await RNAd.playback()
} //RNTeadsInReadAdView

const RNTeadsInReadAdView = _reactNative.NativeModules.RNTeadsInReadAdView
  ? _reactNative.NativeModules.RNTeadsInReadAdView
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )

async function bind(requestIdentifier) {
  return await RNTeadsInReadAdView.bind(requestIdentifier)
} //RNInReadAdPlacement

const RNInReadAdPlacement = _reactNative.NativeModules.RNInReadAdPlacement
  ? _reactNative.NativeModules.RNInReadAdPlacement
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        }
      }
    )

async function requestAd(settingsMap) {
  console.log('settings', settingsMap)
  return await RNInReadAdPlacement.requestAd(settingsMap)
} //RNAdRatio to add when no more problem
//# sourceMappingURL=index.js.map
