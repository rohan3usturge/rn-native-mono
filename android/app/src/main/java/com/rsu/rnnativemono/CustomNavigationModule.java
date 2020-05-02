package com.rsu.rnnativemono;

import android.app.Activity;
import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CustomNavigationModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public CustomNavigationModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "CustomNavigation";
    }

    @ReactMethod
    public void navigateToPureNative() {
        Activity activity = getCurrentActivity();
        activity.startActivity(new Intent(activity, PurelyAndroidActivity.class));
    }

    @ReactMethod
    public void navigateToHome() {
        Activity activity = getCurrentActivity();
        activity.startActivity(new Intent(activity, HomeScreenReactActivity.class));
    }
}
