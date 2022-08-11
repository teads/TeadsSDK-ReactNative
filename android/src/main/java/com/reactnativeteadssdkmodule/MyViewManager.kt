import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.mypackage.CustomView

class MyViewManager : SimpleViewManager<CustomView>() {
  companion object {
    private const val REACT_CLASS = "CustomView"
  }

  override fun getName(): String {
    return REACT_CLASS
  }

  override fun createViewInstance(reactContext: ThemedReactContext): CustomView {
    return CustomView(reactContext)
  }
}
