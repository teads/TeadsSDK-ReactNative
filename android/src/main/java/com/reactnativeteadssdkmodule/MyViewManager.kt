import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.mypackage.CustomView
import com.reactnativeteadssdkmodule.RNAdInstanceManager
import tv.teads.sdk.renderer.InReadAdView

class MyViewManager : SimpleViewManager<CustomView>() {
  companion object {
    private const val REACT_CLASS = "CustomView"
  }

  override fun getName(): String {
    return REACT_CLASS
  }

  @ReactProp(name = "adId")
  fun setAdId(view: CustomView, adId: String?) {
    if (adId != null || adId == view.adId) {
      view.adId = adId
      view.inReadAdView=RNAdInstanceManager.shared.instance(adId).inReadAdView
      view.addView(RNAdInstanceManager.shared.instance(adId).inReadAdView)
    }
    view.invalidate()
  }


  override fun createViewInstance(reactContext: ThemedReactContext): CustomView {

    return CustomView(reactContext)
  }
}
