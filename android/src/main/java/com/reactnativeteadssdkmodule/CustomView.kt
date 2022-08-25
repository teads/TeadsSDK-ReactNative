// replace with your package
package com.mypackage

import android.content.Context
import android.widget.FrameLayout
import tv.teads.sdk.renderer.InReadAdView

class CustomView(context: Context) : FrameLayout(context) {
  private lateinit var inReadAdView: InReadAdView


  init {
    // set padding
    setPadding(10,10,10,10)

  }

  fun setInReadAdView(inReadAdView: InReadAdView) {
    this.inReadAdView=inReadAdView
  }


}
