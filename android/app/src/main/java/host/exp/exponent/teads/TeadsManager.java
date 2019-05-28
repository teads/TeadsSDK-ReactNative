package host.exp.exponent.teads;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

import javax.annotation.Nullable;

import tv.teads.sdk.android.AdFailedReason;
import tv.teads.sdk.android.TeadsListener;

public class TeadsManager extends SimpleViewManager<CustomInReadAdView> {

    public static final String REACT_CLASS = "TeadsAdView";

    private boolean mShouldLoadWhenPidReceived;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public CustomInReadAdView createViewInstance(final ThemedReactContext context) {
        final CustomInReadAdView adView            = new CustomInReadAdView(context);
        final TeadsEventEmitter  teadsEventEmitter = new TeadsEventEmitter(context);

        adView.setListener(new TeadsListener() {
            @Override
            public void onAdLoaded(float adRatio) {
                super.onAdLoaded(adRatio);
                teadsEventEmitter.setViewId(adView.getId());
                teadsEventEmitter.onAdLoaded(adRatio);
                adView.setExpanded();
            }

            @Override
            public void onAdFailedToLoad(AdFailedReason adFailedReason) {
                super.onAdFailedToLoad(adFailedReason);
                teadsEventEmitter.setViewId(adView.getId());
                teadsEventEmitter.onAdFailedToLoad();
            }

            @Override
            public void onAdDisplayed() {
                super.onAdDisplayed();
                teadsEventEmitter.setViewId(adView.getId());
                teadsEventEmitter.onAdDisplayed();
            }
        });
        return adView;
    }

    @Override
    public @Nullable
    Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        MapBuilder.Builder<String, Object> builder = MapBuilder.builder();
        for (String event : TeadsEventEmitter.Events) {
            builder.put(event, MapBuilder.of("registrationName", event));
        }
        return builder.build();
    }

    @ReactProp(name = "pid")
    public void setPid(CustomInReadAdView view, int pid) {
        view.setPid(pid);
        if (mShouldLoadWhenPidReceived) {
            view.load();
        }
    }

    @ReactProp(name = "enableDebug")
    public void enableDebug(CustomInReadAdView view, @Nullable Boolean enableDebug) {
        if (enableDebug != null && enableDebug) {
            view.enableDebug();
        }
    }

    @ReactProp(name = "load")
    public void load(CustomInReadAdView view, @Nullable Boolean enableDebug) {
        if (view.getPlacementId() != null && !view.getPlacementId().equals("0")) {
            view.load();
        } else {
            mShouldLoadWhenPidReceived = true;
        }
    }
}
