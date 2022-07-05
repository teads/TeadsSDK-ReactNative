package com.reactnativeteadssdkmodule
import android.util.Log
import com.facebook.react.bridge.*
import tv.teads.sdk.AdRequestSettings



class RNAdRequestSettings(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private val adRequestSettings = AdRequestSettings.Builder()

  override fun getName(): String {
    return "RNAdRequestSettings"
  }

  //enableValidationMode
  @ReactMethod
  fun enableValidationMode(promise: Promise) {
    promise.resolve(adRequestSettings.enableValidationMode().build().toMap().toString())
    Log.d("enablevalidationmode",adRequestSettings.enableValidationMode().build().toString())
  }

  //pageUrl
  @ReactMethod
  fun pageUrl(urlString:String, promise: Promise) {
    promise.resolve(adRequestSettings.pageSlotUrl(urlString).build().toMap().toString())
    Log.d("pageurl", adRequestSettings.pageSlotUrl(urlString).build().toMap().toString())
  }

  //addExtraSetting
  @ReactMethod
  fun addExtraSetting(key:String, value:String, promise: Promise) {
    promise.resolve(adRequestSettings.addExtra(key, value).build().toMap().toString())
    Log.d("addExtras", adRequestSettings.addExtra(key, value).build().toMap().toString())
  }


}
