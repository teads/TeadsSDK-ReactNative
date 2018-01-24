package tv.teads.teadssdk_reactnative.react.components.teads;

import android.content.Context;
import android.support.annotation.AttrRes;
import android.support.annotation.NonNull;
import android.util.AttributeSet;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.facebook.react.bridge.ReactContext;

import tv.teads.sdk.adContent.views.ScrollViewAdContentView;
import tv.teads.sdk.publisher.TeadsAd;
import tv.teads.sdk.publisher.TeadsAdListener;
import tv.teads.sdk.publisher.TeadsContainerType;
import tv.teads.sdk.publisher.TeadsLog;
import tv.teads.utils.TeadsError;

public class TeadsAdView extends FrameLayout implements TeadsAdListener {

    private TeadsAd                 mTeadsAd;
    private Context                 mContext;
    private TeadsEventEmitter       mEventEmitter;
    private ScrollViewAdContentView mTeadsView;

    public TeadsAdView(@NonNull Context context) {
        super(context);
        init(context);
    }

    public TeadsAdView(@NonNull Context context, @android.support.annotation.Nullable AttributeSet attrs) {
        super(context, attrs);
        init(context);
    }

    public TeadsAdView(@NonNull Context context, @android.support.annotation.Nullable AttributeSet attrs, @AttrRes int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init(context);
    }

    private void init(Context context) {
        mContext = context;
        this.setLayoutParams(new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
        this.setPadding(0, 0, 0, 0);
        mEventEmitter = new TeadsEventEmitter((ReactContext) context);
    }

    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (mTeadsAd == null) {
            createTeads();
        }
        if (mTeadsAd != null && !mTeadsAd.isLoaded()) {
            loadTeadsAd();
        }
    }

    @Override
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        if (mTeadsAd != null) {
            mTeadsAd.onPause();
        }
    }

    private void createTeads() {
        TeadsLog.setLogLevel(TeadsLog.LogLevel.verbose);
        mTeadsAd = new TeadsAd.TeadsAdBuilder(mContext.getApplicationContext(), "84242")
                .viewGroup(this)
                .containerType(TeadsContainerType.inRead)
                .eventListener(this)
                .build();
    }

    public void loadTeadsAd() {
        mTeadsView = (ScrollViewAdContentView) this.getChildAt(0);

        mTeadsAd.load();
        mTeadsAd.onResume();
    }

    @Override
    public void setId(int id) {
        super.setId(id);
        mEventEmitter.setViewId(id);
    }

    @Override
    public void requestLayout() {
        super.requestLayout();

        // Teads relies on a measure + layout pass happening after it calls requestLayout().
        // Without this, the view never actually resize inside and doesn't call the
        // appropriate listeners. Since we override onLayout in our ViewGroups, a layout pass never
        // happens after a call to requestLayout, so we simulate one here.
        post(measureAndLayout);
    }

    private final Runnable measureAndLayout = new Runnable() {
        @Override
        public void run() {
            measure(
                    MeasureSpec.makeMeasureSpec(getWidth(), MeasureSpec.EXACTLY),
                    MeasureSpec.makeMeasureSpec(getHeight(), MeasureSpec.EXACTLY));
            layout(getLeft(), getTop(), getRight(), getBottom());
        }
    };

    @Override
    public void teadsAdDidFailLoading(TeadsError teadsError) { }

    @Override
    public void teadsAdWillLoad() { }

    @Override
    public void teadsAdDidLoad() {
        this.requestLayout();
    }

    @Override
    public void teadsAdWillStart() {
    }

    @Override
    public void teadsAdDidStart() { }

    @Override
    public void teadsAdWillStop() {
        this.requestLayout();
    }

    @Override
    public void teadsAdDidStop() {
        this.requestLayout();
    }

    @Override
    public void teadsAdDidResume() { }

    @Override
    public void teadsAdDidPause() { }

    @Override
    public void teadsAdDidMute() { }

    @Override
    public void teadsAdDidUnmute() { }

    @Override
    public void teadsAdDidOpenInternalBrowser() { }

    @Override
    public void teadsAdDidClickBrowserClose() { }

    @Override
    public void teadsAdWillTakerOverFullScreen() { }

    @Override
    public void teadsAdDidTakeOverFullScreen() {

    }

    @Override
    public void teadsAdWillDismissFullscreen() { }

    @Override
    public void teadsAdDidDismissFullscreen() { }

    @Override
    public void teadsAdSkipButtonTapped() { }

    @Override
    public void teadsAdSkipButtonDidShow() { }

    @Override
    public void teadsAdWillExpand() {
        float density = getResources().getDisplayMetrics().density;
        mEventEmitter.onTeadsLayout((int) (getWidth() / density), (int) (mTeadsView.getOptimalHeight() / density));
    }

    @Override
    public void teadsAdDidExpand() {
        this.requestLayout();
    }

    @Override
    public void teadsAdWillCollapse() {
        this.requestLayout();
    }

    @Override
    public void teadsAdDidCollapse() {
        this.requestLayout();
    }

    @Override
    public void teadsAdDidClean() { }

    @Override
    public void teadsAdNoSlotAvailable() { }
}
