package com.numa.maurin.Project.teadsInReadModule;



import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import androidx.annotation.NonNull;

public class InReadModule extends ReactContextBaseJavaModule {
    InReadModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "InReadModule";
    }

    @ReactMethod
    public void createInRead(String name, String location) {
        Log.d("InReadModule", "print a InRead name: " + name
                + " and location: " + location);
    }
}