package com.reactnativeteadssdkmodule
import android.util.Log
import com.facebook.react.bridge.*
import tv.teads.sdk.renderer.InReadAdView


class RNTeadsInReadAdView(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private lateinit var inReadAdView: InReadAdView

  override fun getName(): String {
    return "RNTeadsInReadAdView"
  }

  //bind
  @ReactMethod
  fun bind( requestIdentifier :String, promise: Promise) {
    //inReadAdView = RNAdInstanceManager.shared.instance(requestIdentifier).inReadAdView
    Log.d("test2","not working")
    promise.resolve("ok")
  }

}

