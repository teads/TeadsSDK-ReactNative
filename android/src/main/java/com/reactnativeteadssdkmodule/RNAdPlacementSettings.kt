package com.reactnativeteadssdkmodule

import com.facebook.react.bridge.*
import com.facebook.react.modules.systeminfo.ReactNativeVersion
import tv.teads.sdk.AdPlacementSettings
import tv.teads.sdk.utils.userConsent.TCFVersion

class RNAdPlacementSettings(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  private var placementSettingsBuilder = AdPlacementSettings.Builder()

  init {
    placementSettingsBuilder.build()
    placementSettingsBuilder.addPlacementExtra("plugin", "react_native")
    placementSettingsBuilder.addPlacementExtra(
      "pluginVersion",
      ReactNativeVersion.VERSION.get("major")
        .toString() + "." + ReactNativeVersion.VERSION.get("minor")
        .toString() + "." + ReactNativeVersion.VERSION.get("patch").toString()
    )
  }

  override fun getName(): String {
    return "RNAdPlacementSettings"
  }

  private fun convertSettingsAsWritableMap(settings: AdPlacementSettings.Builder): WritableMap {
    //convert AdPlacementSettings into WritableMap for ReactNative compatibility
    val map: MutableMap<String?, Any?> = settings.build().toMap() as MutableMap<String?, Any?>
    return MapUtil.toWritableMap(map)
  }

  @ReactMethod
  fun disableCrashMonitoring(promise: Promise) {
    try {
      placementSettingsBuilder.disableCrashMonitoring()
      promise.resolve(convertSettingsAsWritableMap(placementSettingsBuilder))
    } catch (e: Throwable) {
      promise.reject("error on native:", e)
    }
  }

  @ReactMethod
  fun disableTeadsAudioSessionManagement(promise: Promise) {
    //IOS only
    promise.resolve(convertSettingsAsWritableMap(placementSettingsBuilder))
  }

  //enableDebug
  @ReactMethod
  fun enableDebug(promise: Promise) {
    placementSettingsBuilder.enableDebug()
    promise.resolve(convertSettingsAsWritableMap(placementSettingsBuilder))
  }

  //userConsent
  @ReactMethod
  fun userConsent(
    subjectToGDPR: String,
    consent: String,
    tcfVersion: Int,
    cmpSdkId: Int,
    promise: Promise
  ) {
    placementSettingsBuilder.userConsent(
      subjectToGDPR,
      consent,
      TCFVersion.fromInt(tcfVersion),
      cmpSdkId
    )
    promise.resolve(convertSettingsAsWritableMap(placementSettingsBuilder))
  }

  //setUsPrivacy
  @ReactMethod
  fun setUsPrivacy(
    consent: String,
    promise: Promise
  ) {
    placementSettingsBuilder.setUsPrivacy(consent)
    promise.resolve(convertSettingsAsWritableMap(placementSettingsBuilder))
  }

  //disableBatteryMonitoring
  @ReactMethod
  fun disableBatteryMonitoring(promise: Promise) {
    // iOS Only
    promise.resolve(convertSettingsAsWritableMap(placementSettingsBuilder))
  }

  //addExtras
  @ReactMethod
  fun addExtras(key: String, value: String, promise: Promise) {
    placementSettingsBuilder.addPlacementExtra(key, value)
    promise.resolve(convertSettingsAsWritableMap(placementSettingsBuilder))
  }

  //enableLocation
  @ReactMethod
  fun enableLocation(promise: Promise) {
    placementSettingsBuilder.enableLocation()
    promise.resolve(convertSettingsAsWritableMap(placementSettingsBuilder))
  }

  //useLightEndScreen
  @ReactMethod
  fun useLightEndScreen(promise: Promise) {
    placementSettingsBuilder.useLightEndScreen()
    promise.resolve(convertSettingsAsWritableMap(placementSettingsBuilder))
  }

  //hideBrowserUrl
  @ReactMethod
  fun hideBrowserUrl(promise: Promise) {
    placementSettingsBuilder.hideBrowserUrl()
    promise.resolve(convertSettingsAsWritableMap(placementSettingsBuilder))
  }

  //toolBarBackgroundColor
  @ReactMethod
  fun toolBarBackgroundColor(color: Int, promise: Promise) {
    placementSettingsBuilder.toolBarBackgroundColor(color)
    promise.resolve(convertSettingsAsWritableMap(placementSettingsBuilder))
  }
}
