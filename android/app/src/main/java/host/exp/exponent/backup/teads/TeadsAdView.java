package host.exp.exponent.backup.teads;

import android.content.Context;
import android.support.annotation.AttrRes;
import android.support.annotation.NonNull;
import android.util.AttributeSet;
import android.util.Log;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.facebook.react.bridge.ReactContext;

import tv.teads.logger.ConsoleLog;
import tv.teads.sdk.android.AdFailedReason;
import tv.teads.sdk.android.AdSettings;
import tv.teads.sdk.android.InReadAdView;
import tv.teads.sdk.android.TeadsListener;


public class TeadsAdView extends FrameLayout {

    private InReadAdView      mTeadsAdView;
    private Context           mContext;
    private TeadsEventEmitter mEventEmitter;

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
        //this.setLayoutParams(new FrameLayout.LayoutParams(400, 400));
        this.setPadding(0, 0, 0, 0);
        mEventEmitter = new TeadsEventEmitter((ReactContext) context);

    }

    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();

        if (mTeadsAdView == null) {
            createTeads();
        }
        if(this.getParent() != null) {
            Log.d("Toto 2", "addToParent: , parent: " + this.getParent());
            ((ViewGroup)this.getParent()).addView(mTeadsAdView);
            this.setLayoutParams(new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
            mTeadsAdView.setLayoutParams(new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
        } else {

            Log.d("Toto 2", "no parent: , parent: " + this.getParent());
            this.setLayoutParams(new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
            mTeadsAdView.setLayoutParams(new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        }
        if (mTeadsAdView != null && !mTeadsAdView.isReady()) {
            loadTeadsAd();
        }
    }

    private void createTeads() {
        mTeadsAdView = new InReadAdView(mContext);
    }

    public void loadTeadsAd() {
        mTeadsAdView.setListener(new TeadsListener(){
            @Override
            public void onAdLoaded(float adRatio) {
                super.onAdLoaded(adRatio);
                float density = getResources().getDisplayMetrics().density;
                float width   = getWidth() / density;
                mEventEmitter.onTeadsLayout((int) width, (int) (width/adRatio));
                ConsoleLog.d("Toto 2", "Ad size: " + mTeadsAdView.getWidth() + " - " + mTeadsAdView.getHeight());
                TeadsAdView.this.requestLayout();
            }

            @Override
            public void onAdFailedToLoad(AdFailedReason adFailedReason) {
                super.onAdFailedToLoad(adFailedReason);
            }

            @Override
            public void onAdDisplayed() {
                super.onAdDisplayed();
                float density = getResources().getDisplayMetrics().density;
                float width   = getWidth() / density;
                mEventEmitter.onTeadsLayout((int) width, (int) (width/1.5));
                ConsoleLog.d("Toto3 ", "Ad size: " + mTeadsAdView.getWidth() + " - " + mTeadsAdView.getHeight());
                TeadsAdView.this.requestLayout();

                TeadsAdView.this.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        float density = getResources().getDisplayMetrics().density;
                        float width   = getWidth() / density;
                        mEventEmitter.onTeadsLayout((int) width, (int) (width/1.5));
                        ConsoleLog.d("Toto3 ", "Ad size: " + mTeadsAdView.getWidth() + " - " + mTeadsAdView.getHeight());
                        TeadsAdView.this.requestLayout();
                    }
                }, 2000);
            }

            @Override
            public void onRatioUpdated(float v) {
                super.onRatioUpdated(v);
                float density = getResources().getDisplayMetrics().density;
                float width   = getWidth() / density;
                mEventEmitter.onTeadsLayout((int) width, (int) (width/1.5));

                ConsoleLog.d("Toto", "Ad size: " + mTeadsAdView.getWidth() + " - " + mTeadsAdView.getHeight());
                TeadsAdView.this.requestLayout();
            }


        });
        mTeadsAdView.setPid(84242);
        mTeadsAdView.load(new AdSettings.Builder().enableDebug().build());
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
}
