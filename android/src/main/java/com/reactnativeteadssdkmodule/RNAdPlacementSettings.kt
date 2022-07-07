package com.reactnativeteadssdkmodule

import android.util.Log
import com.facebook.react.bridge.*
import tv.teads.sdk.AdPlacementSettings
import tv.teads.sdk.utils.userConsent.TCFVersion
import kotlin.reflect.typeOf


class RNAdPlacementSettings(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  private var placementSettingsBuilder = AdPlacementSettings.Builder()

  init {
    placementSettingsBuilder.build()
  }

  override fun getName(): String {
    return "RNAdPlacementSettings"
  }

  @ReactMethod
  fun disableCrashMonitoring(promise: Promise) {
    val hm: MutableMap<String?, Any?> = placementSettingsBuilder.disableCrashMonitoring().build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(hm)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }

  @ReactMethod
  fun disableTeadsAudioSessionManagement(promise: Promise) {
    //IOS only
    promise.resolve(placementSettingsBuilder.build().toMap().toString())
  }

  //enableDebug
  @ReactMethod
  fun enableDebug(promise: Promise) {
    promise.resolve(placementSettingsBuilder.enableDebug().build().toMap().toString())
  }

  //userConsent
  @ReactMethod
  fun userConsent( subjectToGDPR :String,
                   consent :String,
                   tcfVersion: Int,
                   cmpSdkId:Int,
                   promise: Promise) {
    promise.resolve(placementSettingsBuilder.userConsent(subjectToGDPR, consent, TCFVersion.fromInt(tcfVersion), cmpSdkId).build().toMap().toString())
  }

  //setUsPrivacy
  @ReactMethod
  fun setUsPrivacy( consent:String,
                   promise: Promise) {
    promise.resolve(placementSettingsBuilder.setUsPrivacy(consent).build().toMap().toString())
  }

  //disableBatteryMonitoring
  @ReactMethod
  fun disableBatteryMonitoring( promise: Promise) {
    // iOS Only
    promise.resolve(placementSettingsBuilder.build().toMap().toString())
  }

  //addExtras
  @ReactMethod
  fun addExtras(key:String, value:String, promise: Promise) {
    promise.resolve(placementSettingsBuilder.addPlacementExtra(key, value).build().toMap().toString())
  }

  //enableLocation
  @ReactMethod
  fun enableLocation(promise: Promise) {
    promise.resolve(placementSettingsBuilder.enableLocation().build().toMap().toString())
  }

  //useLightEndScreen
  @ReactMethod
  fun useLightEndScreen(promise: Promise) {
    promise.resolve(placementSettingsBuilder.useLightEndScreen().build().toMap().toString())
  }

  //hideBrowserUrl
  @ReactMethod
  fun hideBrowserUrl(promise: Promise) {
    promise.resolve(placementSettingsBuilder.hideBrowserUrl().build().toMap().toString())
  }

  //toolBarBackgroundColor
  @ReactMethod
  fun toolBarBackgroundColor(color:Int, promise: Promise) {
    promise.resolve(placementSettingsBuilder.toolBarBackgroundColor(color).build().toMap().toString())
  }
}
