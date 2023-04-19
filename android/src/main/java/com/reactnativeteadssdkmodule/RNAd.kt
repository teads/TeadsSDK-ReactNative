package com.reactnativeteadssdkmodule

import com.facebook.react.bridge.*


class RNAd(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {


  override fun getName(): String {
    return "RNAd"
  }

  //delegate
  //auto on android
  @ReactMethod
  fun delegate(promise: Promise) {
    promise.resolve(true)
  }

  //playback
  //auto on android
  fun playback(promise: Promise) {
    promise.resolve(true)
  }

}

