package com.reactnativeteadssdkmodule

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RNAdRatio(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  // Only for iOS
  //Not implemented Yet

  override fun getName(): String {
    return "RNAdRatio"
  }

  //calculateHeight
  @ReactMethod
  fun calculateHeight(width:Double, requestIdentifier:String, promise: Promise) {
    promise.resolve(RNAdInstanceManager.shared.instance(requestIdentifier).inReadAdView.inReadAd.adRatio.calculateHeight(width.toInt()).toDouble())
  }

  //value
  @ReactMethod
  fun value(width:Double, requestIdentifier:String, promise: Promise) {
    promise.resolve(RNAdInstanceManager.shared.instance(requestIdentifier).inReadAdView.inReadAd.adRatio.getAdSlotRatio(width.toInt()).toDouble())
  }

}


