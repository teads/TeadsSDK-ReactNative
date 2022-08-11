package com.reactnativeteadssdkmodule
import MyViewManager
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext


class TeadsSdkModulePackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return listOf(TeadsSdkModuleModule(reactContext),RNAdPlacementSettings(reactContext),RNAdRequestSettings(reactContext),RNTeads(reactContext),RNTeadsInReadAdView(reactContext),RNInReadAdPlacement(reactContext))
    }

  override fun createViewManagers(
    reactContext: ReactApplicationContext) = listOf(MyViewManager())
}

