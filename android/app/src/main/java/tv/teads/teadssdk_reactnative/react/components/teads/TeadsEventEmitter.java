package tv.teads.teadssdk_reactnative.react.components.teads;

import android.support.annotation.StringDef;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

public class TeadsEventEmitter {

    private static final String ON_TEADS_LAYOUT = "onTeadsLayout";

    private final RCTEventEmitter mEventEmitter;
    private int mViewId = View.NO_ID;

    TeadsEventEmitter(ReactContext reactContext) {
        this.mEventEmitter = reactContext.getJSModule(RCTEventEmitter.class);
    }

    static final String[] Events = {
            ON_TEADS_LAYOUT,
    };

    @Retention(RetentionPolicy.SOURCE)
    @StringDef({
            ON_TEADS_LAYOUT,
    })
    @interface TeadsEvents {
    }

    void setViewId(int viewId) {
        this.mViewId = viewId;
    }

    void onTeadsLayout(int width, int height) {
        WritableMap event  = Arguments.createMap();
        WritableMap layout = Arguments.createMap();
        layout.putInt("width", width);
        layout.putInt("height", height);
        event.putMap("layout", layout);
        receiveEvent(ON_TEADS_LAYOUT, event);
    }

    private void receiveEvent(@TeadsEvents String type, WritableMap event) {
        mEventEmitter.receiveEvent(mViewId, type, event);
    }
}
