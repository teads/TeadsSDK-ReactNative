import android .util.Log
import android.widget.TextView
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
    if (newId != null) {
      Log.d("from ad result react",newId)
    }
    if (newId == null || newId == adId) return
    adId = newId
    Log.d("from ad result react2", adId!!)
    adView=RNAdInstanceManager.shared.instance(newId).inReadAdView

  }


  override fun createViewInstance(reactContext: ThemedReactContext): CustomView {

    var customView=CustomView(reactContext)
    Log.d("fromId", "1return view")

    adView?.let { customView.setInReadAdView(it) }

    adId?.let { Log.d("id from react", it) }

    adId?.let { customView.addView(TextView(reactContext).apply {
      text=it
    }) }

    if (adView!=null){Log.d("from kot1","adView is null")}
    adView?.let { Log.d("from kot2","adView is null")}

    //inReadAdView = adId?.let { RNAdInstanceManager.shared.instance(it).inReadAdView }!!
    Log.d("fromId", "2return view")

    adView?.let { customView.addView(adView) }

    return customView
  }
}
