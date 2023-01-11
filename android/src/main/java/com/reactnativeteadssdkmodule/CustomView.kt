// replace with your package
package com.mypackage
import android.content.Context
import android.widget.FrameLayout
import com.reactnativeteadssdkmodule.RNAdInstanceManager
import tv.teads.sdk.renderer.InReadAdView

class CustomView(context: Context) : FrameLayout(context) {
  var inReadAdView: InReadAdView = InReadAdView(context)
  var adId : String = ""

  init {
    // set padding
    setPadding(10,10,10,10)

  }

}

