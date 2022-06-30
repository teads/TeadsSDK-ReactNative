package com.reactnativeteadssdkmodule
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import tv.teads.sdk.AdPlacementSettings
import tv.teads.sdk.utils.userConsent.TCFVersion
import java.util.logging.LogManager


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
    promise.resolve(placementSettingsBuilder.disableCrashMonitoring().build().toMap().toString())
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
