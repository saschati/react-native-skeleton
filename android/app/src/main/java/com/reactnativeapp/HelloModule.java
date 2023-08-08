package com.reactnativeapp;

import android.util.Log;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class HelloModule extends ReactContextBaseJavaModule {
    HelloModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "HelloModule";
    }

    @ReactMethod
    public void sayHello(String name, Promise promise) {
        Log.d("HelloModule",  String.format("Say \"Hello %s!\"", name));

        promise.resolve(String.format("Hello %s!", name));
    }
}
