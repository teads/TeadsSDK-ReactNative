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

  private var adView: InReadAdView? = null
  private var adId: String? = null

  @ReactProp(name = "adId")
  fun setAdId(view: CustomView, newId: String?) {
    if (newId == null || newId == adId) return
    adId = newId
    adView=RNAdInstanceManager.shared.instance(newId).inReadAdView

  }


  override fun createViewInstance(reactContext: ThemedReactContext): CustomView {

    var customView=CustomView(reactContext)

    adView?.let { customView.setInReadAdView(it) }

    adView?.let { customView.addView(adView) }

    return customView
  }
}
