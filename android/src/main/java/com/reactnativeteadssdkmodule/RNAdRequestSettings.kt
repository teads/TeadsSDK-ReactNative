package com.reactnativeteadssdkmodule
import com.facebook.react.bridge.*
import tv.teads.sdk.AdPlacementSettings
import tv.teads.sdk.AdRequestSettings


class RNAdRequestSettings(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private val adRequestSettings = AdRequestSettings.Builder()

  override fun getName(): String {
    return "RNAdRequestSettings"
  }

  private fun convertSettingsAsWritableMap(settings : AdRequestSettings.Builder): WritableMap {
    //tool to convert AdRequestSettings into WritableMap for ReactNative compatibility
    val map: MutableMap<String?, Any?> = settings.build().toMap() as MutableMap<String?, Any?>
    return MapUtil.toWritableMap(map)
  }

  //enableValidationMode
  @ReactMethod
  fun enableValidationMode(promise: Promise) {
    adRequestSettings.enableValidationMode()
    promise.resolve(convertSettingsAsWritableMap(adRequestSettings))
  }

  //pageUrl
  @ReactMethod
  fun pageUrl(urlString:String, promise: Promise) {
    adRequestSettings.pageSlotUrl(urlString)
    promise.resolve(convertSettingsAsWritableMap(adRequestSettings))
  }

  //addExtraSetting
  @ReactMethod
  fun addExtraSetting(key:String, value:String, promise: Promise) {
    adRequestSettings.addExtra(key, value)
    promise.resolve(convertSettingsAsWritableMap(adRequestSettings))
  }


}
