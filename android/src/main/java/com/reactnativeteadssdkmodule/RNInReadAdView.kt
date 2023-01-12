// replace with your package
package com.reactnativeteadssdkmodule
import android.content.Context
import android.widget.FrameLayout
import tv.teads.sdk.renderer.InReadAdView

class RNInReadAdView(context: Context) : FrameLayout(context) {
  var inReadAdView: InReadAdView = InReadAdView(context)
  var adId : String = ""

  init {
    // set padding
    setPadding(10,10,10,10)
  }
}

