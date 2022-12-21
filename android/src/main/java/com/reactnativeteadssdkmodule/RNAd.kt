package com.reactnativeteadssdkmodule
import android.util.Log
import com.facebook.react.bridge.*


class RNAd(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {


  override fun getName(): String {
    return "RNAd"
  }

  //delegate
  //auto on android
  @ReactMethod
  fun delegate( promise: Promise) {
    promise.resolve("ok")
  }

  //playback
  //auto on android
  fun playback( promise: Promise) {
    promise.resolve("ok")
  }

}
