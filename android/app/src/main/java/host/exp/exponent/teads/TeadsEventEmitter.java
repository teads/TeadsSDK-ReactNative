package host.exp.exponent.teads;

import android.support.annotation.StringDef;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

public class TeadsEventEmitter {

    private static final String ON_TEADS_ADLOADED = "onTeadsAdLoaded";
    private static final String ON_TEADS_ADFAILEDTOLOAD = "onTeadsAdFailedToLoad";
    private static final String ON_TEADS_AD_DISPLAYED = "onTeadsAdDisplayed";

    static final String[] Events = {
            ON_TEADS_ADLOADED,
            ON_TEADS_ADFAILEDTOLOAD,
            ON_TEADS_AD_DISPLAYED,
    };

    @Retention(RetentionPolicy.SOURCE)
    @StringDef({
            ON_TEADS_ADLOADED,
            ON_TEADS_ADFAILEDTOLOAD,
            ON_TEADS_AD_DISPLAYED,
    })
    @interface TeadsEvents {
    }

    private final RCTEventEmitter mEventEmitter;
    private int mViewId = View.NO_ID;

    TeadsEventEmitter(ReactContext reactContext) {
        mEventEmitter = reactContext.getJSModule(RCTEventEmitter.class);
    }

    void setViewId(int viewId) {
        mViewId = viewId;
    }

    public void onAdLoaded(float adRatio) {
        WritableMap event = Arguments.createMap();
        event.putDouble("adRatio", adRatio);
        receiveEvent(ON_TEADS_ADLOADED, event);
    }

    public void onAdFailedToLoad() {
        receiveEvent(ON_TEADS_ADFAILEDTOLOAD, Arguments.createMap());
    }

    public void onAdDisplayed() {
        receiveEvent(ON_TEADS_AD_DISPLAYED, Arguments.createMap());
    }

    private void receiveEvent(@TeadsEvents String type, WritableMap event) {
        mEventEmitter.receiveEvent(mViewId, type, event);
    }
}
