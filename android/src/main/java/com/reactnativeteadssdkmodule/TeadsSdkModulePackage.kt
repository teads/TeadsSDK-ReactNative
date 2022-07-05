package com.reactnativeteadssdkmodule
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager


class TeadsSdkModulePackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return listOf(TeadsSdkModuleModule(reactContext),RNAdPlacementSettings(reactContext),RNAdRequestSettings(reactContext),RNTeads(reactContext),RNTeadsInReadAdView(reactContext))
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return emptyList()
    }
}
