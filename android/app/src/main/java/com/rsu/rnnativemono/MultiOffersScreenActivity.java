package com.rsu.rnnativemono;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.facebook.react.ReactFragment;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;

public class MultiOffersScreenActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

    private static final String COMPONENT_NAME = "MultiOffersScreen";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_multi_offers_screen);

        if (savedInstanceState == null) {
            ReactFragment reactFragment = new ReactFragment.Builder().setComponentName(COMPONENT_NAME).build();

            getSupportFragmentManager()
                    .beginTransaction()
                    .add(R.id.viewer, reactFragment)
                    .commit();
        }
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
}
