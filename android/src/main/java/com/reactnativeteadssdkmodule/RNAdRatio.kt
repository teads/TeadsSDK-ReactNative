package com.reactnativeteadssdkmodule

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RNAdRatio(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  //voir avec thibault ce qu'on avait fait pour flutter jme rappelle plus

  override fun getName(): String {
    return "RNAdRatio"
  }

  //calculateHeight
  @ReactMethod
  fun calculateHeight(width:Double, requestIdentifier:String, promise: Promise) {
    promise.resolve("ok")
    //d'ont work because some value is private
    //promise.resolve(RNAdInstanceManager.shared.instance(requestIdentifier).inReadAdView.inReadAd.adRatio.calculateHeight(width.toInt()).toDouble())
  }

  //value
  @ReactMethod
  fun value(width:Double, requestIdentifier:String, promise: Promise) {
    promise.resolve("ok")
    //promise.resolve(RNAdInstanceManager.shared.instance(requestIdentifier).inReadAdView.inReadAd.adRatio.getAdSlotRatio(width.toInt()).toDouble())
  }

}


