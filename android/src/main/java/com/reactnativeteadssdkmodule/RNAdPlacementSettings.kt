package com.reactnativeteadssdkmodule


import com.facebook.react.bridge.*
import tv.teads.sdk.AdPlacementSettings
import tv.teads.sdk.utils.userConsent.TCFVersion



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
    try {
      val map: MutableMap<String?, Any?> = placementSettingsBuilder.disableCrashMonitoring().build().toMap() as MutableMap<String?, Any?>
      val result :WritableMap = MapUtil.toWritableMap(map)
      //convert into WritableMap for ReactNative compatibility
      promise.resolve(result)
    } catch (e: Throwable) {
      promise.reject("error on native:", e)
    }
  }

  @ReactMethod
  fun disableTeadsAudioSessionManagement(promise: Promise) {
    //IOS only
    val map: MutableMap<String?, Any?> =placementSettingsBuilder.build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }

  //enableDebug
  @ReactMethod
  fun enableDebug(promise: Promise) {
    val map: MutableMap<String?, Any?> =placementSettingsBuilder.enableDebug().build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }

  //userConsent
  @ReactMethod
  fun userConsent( subjectToGDPR :String,
                   consent :String,
                   tcfVersion: Int,
                   cmpSdkId:Int,
                   promise: Promise) {
    val map: MutableMap<String?, Any?> =placementSettingsBuilder.userConsent(subjectToGDPR, consent, TCFVersion.fromInt(tcfVersion), cmpSdkId).build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }

  //setUsPrivacy
  @ReactMethod
  fun setUsPrivacy( consent:String,
                   promise: Promise) {
    val map: MutableMap<String?, Any?> =placementSettingsBuilder.setUsPrivacy(consent).build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }

  //disableBatteryMonitoring
  @ReactMethod
  fun disableBatteryMonitoring( promise: Promise) {
    // iOS Only

      val map: MutableMap<String?, Any?> =placementSettingsBuilder.build().toMap() as MutableMap<String?, Any?>
      val result :WritableMap = MapUtil.toWritableMap(map)
      //convert into WritableMap for ReactNative compatibility
      promise.resolve(result)

  }

  //addExtras
  @ReactMethod
  fun addExtras(key:String, value:String, promise: Promise) {
    val map: MutableMap<String?, Any?> =placementSettingsBuilder.addPlacementExtra(key, value).build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }

  //enableLocation
  @ReactMethod
  fun enableLocation(promise: Promise) {
    val map: MutableMap<String?, Any?> =placementSettingsBuilder.enableLocation().build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }

  //useLightEndScreen
  @ReactMethod
  fun useLightEndScreen(promise: Promise) {
    val map: MutableMap<String?, Any?> =placementSettingsBuilder.useLightEndScreen().build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }

  //hideBrowserUrl
  @ReactMethod
  fun hideBrowserUrl(promise: Promise) {
    val map: MutableMap<String?, Any?> =placementSettingsBuilder.hideBrowserUrl().build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }

  //toolBarBackgroundColor
  @ReactMethod
  fun toolBarBackgroundColor(color:Int, promise: Promise) {
    val map: MutableMap<String?, Any?> =placementSettingsBuilder.toolBarBackgroundColor(color).build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }
}
