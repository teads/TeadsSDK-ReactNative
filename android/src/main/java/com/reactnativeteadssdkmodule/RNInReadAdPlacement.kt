package com.reactnativeteadssdkmodule

import android.os.Handler
import android.os.Looper
import android.util.Log
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule
import tv.teads.sdk.*
import tv.teads.sdk.renderer.InReadAdView
import java.util.*


class RNInReadAdPlacement(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "RNInReadAdPlacement"
  }

  private fun sendEvent(reactContext: ReactContext, eventName: String, params: WritableMap?) {
    reactContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit(eventName, params)
  }

  //requestAd
  @ReactMethod
  fun requestAd(pid: Int, settingsMap: ReadableMap, promise: Promise) {
    val instanceIdentifier = UUID.randomUUID().toString()
    RNAdInstanceManager.instance(pid).inReadAdPlacement.requestAd(AdRequestSettings.fromMap(
      settingsMap.toHashMap().toMap()
    ),
      object : InReadAdListener {
        override fun adOpportunityTrackerView(trackerView: AdOpportunityTrackerView) {
          val params = Arguments.createMap()
          params.putString("didPlay", "didPlay")
          sendEvent(reactApplicationContext, "didPlay", params)
        }

        override fun onAdReceived(
          inReadAdView: InReadAdView,
          adRatio: AdRatio
        ) {
          RNAdInstanceManager.new(
            RNAdInstanceManager.AdInstanceMap(
              inReadAdView,
              instanceIdentifier
            )
          )
          promise.resolve(instanceIdentifier)
          val params = Arguments.createMap()
          params.putString("didReceiveAd", "didReceiveAd")
          sendEvent(reactApplicationContext, "didReceiveAd", params)
          Handler(Looper.getMainLooper()).post {
            Log.d("from ad", "didReceiveAd")

          }
        }

        override fun onAdClicked() {
          val params = Arguments.createMap()
          params.putString("didRecordClick", "didRecordClick")
          sendEvent(reactApplicationContext, "didRecordClick", params)
          Handler(Looper.getMainLooper()).post {
            Log.d("form ad", "didRecordClick")
          }
        }

        override fun onAdClosed() {
          val params = Arguments.createMap()
          params.putString("didClose", "didClose")
          sendEvent(reactApplicationContext, "didClose", params)
          Handler(Looper.getMainLooper()).post {
            Log.d(
              "from ad",
              "didClose"
            )
          }
        }

        override fun onAdError(code: Int, description: String) {
          val params = Arguments.createMap()
          params.putString("didCatchError", "didCatchError")
          sendEvent(reactApplicationContext, "didCatchError", params)
          Handler(Looper.getMainLooper()).post {
            Log.d(
              "from ad",
              "didCatchError"
            )
            Log.d("from error", description)
          }
        }

        override fun onAdImpression() {
          val params = Arguments.createMap()
          params.putString("didRecordImpression", "didRecordImpression")
          sendEvent(reactApplicationContext, "didRecordImpression", params)
          Handler(Looper.getMainLooper()).post {
            Log.d(
              "from ad",
              "didRecordImpression"
            )
          }
        }

        override fun onAdExpandedToFullscreen() {
          val params = Arguments.createMap()
          params.putString("didExpandedToFullscreen", "didExpandedToFullscreen")
          sendEvent(reactApplicationContext, "didExpandedToFullscreen", params)
          Handler(Looper.getMainLooper()).post {
            Log.d(
              "from ad",
              "didExpandedToFullscreen"
            )
          }
        }

        override fun onAdCollapsedFromFullscreen() {
          val params = Arguments.createMap()
          params.putString("didCollapsedFromFullscreen", "didCollapsedFromFullscreen")
          sendEvent(reactApplicationContext, "didCollapsedFromFullscreen", params)
          Handler(Looper.getMainLooper()).post {
            Log.d("from ad", "didCollapsedFromFullscreen")
          }
        }

        override fun onAdRatioUpdate(adRatio: AdRatio) {
          val params = Arguments.createMap()
          params.putString("didUpdateRatio", "didUpdateRatio")
          sendEvent(reactApplicationContext, "didUpdateRatio", params)
          Handler(Looper.getMainLooper()).post {
            Log.d(
              "from ad",
              "didUpdateRatio"
            )

          }
        }

        override fun onFailToReceiveAd(failReason: String) {
          val params = Arguments.createMap()
          params.putString("didFailToReceiveAd", "didFailToReceiveAd")
          sendEvent(reactApplicationContext, "didFailToReceiveAd", params)
          Handler(Looper.getMainLooper()).post {
            Log.d(
              "from Ad",
              "didFailToReceiveAd"
            )
            Log.d("from fail", failReason)
          }
        }
      },
      object : VideoPlaybackListener {
        override fun onVideoComplete() {
          val params = Arguments.createMap()
          params.putString("didComplete", "didComplete")
          sendEvent(reactApplicationContext, "didComplete", params)
          Handler(Looper.getMainLooper()).post {
            Log.d(
              "from ad",
              "didComplete"
            )
          }
        }

        override fun onVideoPause() {
          val params = Arguments.createMap()
          params.putString("didPause", "didPause")
          sendEvent(reactApplicationContext, "didPause", params)
          Handler(Looper.getMainLooper()).post {
            Log.d(
              "from ad",
              "didPause"
            )
          }
        }

        override fun onVideoPlay() {
          val params = Arguments.createMap()
          params.putString("didPlay", "didPlay")
          sendEvent(reactApplicationContext, "didPlay", params)
          Handler(Looper.getMainLooper()).post {
            Log.d(
              "from ad",
              "didPlay"
            )

          }
        }

      })

  }


}


