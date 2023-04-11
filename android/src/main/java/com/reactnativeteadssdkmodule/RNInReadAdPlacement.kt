package com.reactnativeteadssdkmodule

import android.os.Handler
import android.os.Looper
import android.util.Log
import com.facebook.react.bridge.*
import tv.teads.sdk.*
import tv.teads.sdk.renderer.InReadAdView
import java.util.*


class RNInReadAdPlacement(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "RNInReadAdPlacement"
  }

  //requestAd
  @ReactMethod
  fun requestAd( pid: Int, settingsMap : ReadableMap, promise: Promise) {
    val instanceIdentifier = UUID.randomUUID().toString()
    RNAdInstanceManager.shared.instance(pid).inReadAdPlacement.requestAd(AdRequestSettings.fromMap(settingsMap.toHashMap().toMap()),
      object : InReadAdListener {
        override fun adOpportunityTrackerView(trackerView: AdOpportunityTrackerView) {
        }

        override fun onAdReceived(
          inReadAdView: InReadAdView,
          adRatio: AdRatio
        ) {
          RNAdInstanceManager.shared.new(
            RNAdInstanceManager.AdInstanceMap(
              inReadAdView,
              instanceIdentifier
            )
          )

          Handler(Looper.getMainLooper()).post {
            Log.d("from ad","didReceiveAd")
          }


        }

        override fun onAdClicked() {
          Handler(Looper.getMainLooper()).post {
            Log.d("form ad", "didRecordClick")
          }
        }

        override fun onAdClosed() {
          Handler(Looper.getMainLooper()).post {
            Log.d("from ad",
              "didClose"
            )
          }
        }

        override fun onAdError(code: Int, description: String) {

          Handler(Looper.getMainLooper()).post {
           Log.d("from ad",
              "didCatchError")
            Log.d("from error",description)
          }
        }

        override fun onAdImpression() {
          Handler(Looper.getMainLooper()).post {
            Log.d("from ad",
              "didRecordImpression")
          }
        }

        override fun onAdExpandedToFullscreen() {
          Handler(Looper.getMainLooper()).post {
            Log.d("from ad",
              "didExpandedToFullscreen"
            )
          }
        }

        override fun onAdCollapsedFromFullscreen() {
          Handler(Looper.getMainLooper()).post {
            Log.d("from ad", "didCollapsedFromFullscreen")
          }
        }

        override fun onAdRatioUpdate(adRatio: AdRatio) {
          Handler(Looper.getMainLooper()).post {
            Log.d("from ad",
              "didUpdateRatio")

          }
        }

        override fun onFailToReceiveAd(failReason: String) {
          Handler(Looper.getMainLooper()).post {
            Log.d("from Ad",
              "didFailToReceiveAd")
            Log.d("from fail",failReason)
          }
        }
      },
      object : VideoPlaybackListener {
        override fun onVideoComplete() {
          Handler(Looper.getMainLooper()).post {
            Log.d("from ad",
              "didComplete")
          }
        }

        override fun onVideoPause() {
          Handler(Looper.getMainLooper()).post {
            Log.d("from ad",
              "didPause"
            )
          }
        }

        override fun onVideoPlay() {
          Handler(Looper.getMainLooper()).post {
            Log.d("from ad",
              "didPlay")

          }
        }

      })
    Log.d("placement instanceID", instanceIdentifier)
    promise.resolve(instanceIdentifier)

  }


}


