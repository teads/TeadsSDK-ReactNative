package com.reactnativeteadssdkmodule

import RNInReadAdViewManager
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext


class TeadsSdkModulePackage : ReactPackage {
  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    return listOf(
      RNAdPlacementSettings(reactContext),
      RNAdRequestSettings(reactContext),
      RNTeads(reactContext),
      RNInReadAdPlacement(reactContext),
      RNAdRatio(reactContext),

    )
  }

  override fun createViewManagers(
    reactContext: ReactApplicationContext
  ) = listOf(RNInReadAdViewManager())
}

