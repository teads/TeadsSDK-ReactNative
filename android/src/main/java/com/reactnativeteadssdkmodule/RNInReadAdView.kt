
package com.reactnativeteadssdkmodule
import android.content.Context
import android.widget.FrameLayout
import tv.teads.sdk.renderer.InReadAdView

class RNInReadAdView(context: Context) : FrameLayout(context) {
  var inReadAdView: InReadAdView = InReadAdView(context)
  var adId : String = ""

  init {
    setPadding(16,16,16,16)
  }
}

