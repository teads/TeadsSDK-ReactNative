package com.reactnativeteadssdkmodule
import com.facebook.react.bridge.*
import tv.teads.sdk.AdPlacementSettings
import tv.teads.sdk.TeadsSDK


class RNTeads(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "RNTeads"
  }

  //createInReadPlacement
  @ReactMethod
  fun createInReadPlacement( pid :Int, settingsMap :ReadableMap, promise: Promise) {
    RNAdInstanceManager.shared.new(RNAdInstanceManager.AdPlacementMap(
      TeadsSDK.createInReadPlacement( reactApplicationContext, pid, AdPlacementSettings.fromMap(settingsMap.toHashMap().toMap())),
      pid
    ))
    promise.resolve("ok")
  }

}

