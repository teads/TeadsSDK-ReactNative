import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.reactnativeteadssdkmodule.RNAdInstanceManager
import com.reactnativeteadssdkmodule.RNInReadAdView

class RNInReadAdViewManager : SimpleViewManager<RNInReadAdView>() {
  companion object {
    private const val REACT_CLASS = "RNInReadAdView"
  }

  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactProp(name = "adId")
  fun setAdId(view: RNInReadAdView, adId: String?) {
    if (adId != null) {
      view.adId = adId
      view.inReadAdView = RNAdInstanceManager.shared.instance(adId).inReadAdView
      view.addView(view.inReadAdView)
    }
    view.invalidate()
  }


  override fun createViewInstance(reactContext: ThemedReactContext): RNInReadAdView {
    return RNInReadAdView(reactContext)
  }

}
