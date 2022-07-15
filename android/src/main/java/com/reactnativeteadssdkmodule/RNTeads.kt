package com.reactnativeteadssdkmodule
import android.util.Log
import com.facebook.react.bridge.*
import tv.teads.sdk.AdPlacementSettings
import tv.teads.sdk.TeadsSDK
import tv.teads.sdk.utils.userConsent.TCFVersion


class RNTeads(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {


  override fun getName(): String {
    return "RNTeads"
  }

  //createInReadPlacement
  @ReactMethod
  fun createInReadPlacement( pid :Int, settingsMap :ReadableMap, promise: Promise) {
    Log.d("test",settingsMap.toString())
    RNAdInstanceManager.shared.placement = TeadsSDK.createInReadPlacement( reactApplicationContext, pid, AdPlacementSettings.fromMap(settingsMap.toHashMap().toMap()))
    Log.d("ehehi", RNAdInstanceManager.shared.placement.toString())
    promise.resolve("ok")
  }

}

