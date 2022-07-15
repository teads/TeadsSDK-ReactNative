package com.reactnativeteadssdkmodule
import android.util.Log
import com.facebook.react.bridge.*
import tv.teads.sdk.AdRequestSettings
import tv.teads.sdk.utils.userConsent.TCFVersion


class RNAdRequestSettings(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private val adRequestSettings = AdRequestSettings.Builder()

  override fun getName(): String {
    return "RNAdRequestSettings"
  }

  //enableValidationMode
  @ReactMethod
  fun enableValidationMode(promise: Promise) {
    val map: MutableMap<String?, Any?> =adRequestSettings.enableValidationMode().build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }

  //pageUrl
  @ReactMethod
  fun pageUrl(urlString:String, promise: Promise) {
    val map: MutableMap<String?, Any?> =adRequestSettings.pageSlotUrl(urlString).build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }

  //addExtraSetting
  @ReactMethod
  fun addExtraSetting(key:String, value:String, promise: Promise) {
    val map: MutableMap<String?, Any?> =adRequestSettings.addExtra(key, value).build().toMap() as MutableMap<String?, Any?>
    val result :WritableMap = MapUtil.toWritableMap(map)
    //convert into WritableMap for ReactNative compatibility
    promise.resolve(result)
  }


}
