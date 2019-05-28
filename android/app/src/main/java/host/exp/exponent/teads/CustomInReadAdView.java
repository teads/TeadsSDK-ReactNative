package host.exp.exponent.teads;

import android.content.Context;
import android.util.AttributeSet;

import tv.teads.sdk.android.InReadAdView;

public class CustomInReadAdView extends InReadAdView {
    public CustomInReadAdView(Context context) {
        super(context);
    }

    public CustomInReadAdView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
    }

    public CustomInReadAdView(Context context, AttributeSet attributeSet, int i) {
        super(context, attributeSet, i);
    }

    public CustomInReadAdView(Context context, AttributeSet attributeSet, int i, int i1) {
        super(context, attributeSet, i, i1);
    }

    @Override
    public void setMaxHeight(int i) {
        super.setMaxHeight(i);
    }

    @Override
    public void requestLayout() {
        super.requestLayout();

        // Teads relies on a measure + layout pass happening after it calls requestLayout().
        // Without this, the view never actually resize inside and doesn't call the
        // appropriate listeners.
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
