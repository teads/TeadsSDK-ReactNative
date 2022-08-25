// replace with your package
package com.mypackage

import android.content.Context
import android.graphics.Color
import android.util.Log
import android.widget.FrameLayout
import android.widget.TextView
import tv.teads.sdk.renderer.InReadAdView

class CustomView(context: Context) : FrameLayout(context) {
  private lateinit var inReadAdView: InReadAdView


  init {
    // set padding and background color
    setPadding(10,10,10,10)
    setBackgroundColor(Color.parseColor("#5FD3F3"))

    // add default text view
    /*addView(TextView(context).apply {
      text = "Welcome to Android view with React Native. lets show some ads now"
    })
*/



    //addView(RNTeadsInReadAdView.getView())
  }

  fun setInReadAdView(inReadAdView: InReadAdView) {
    this.inReadAdView=inReadAdView
  }


}
