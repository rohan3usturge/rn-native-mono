package com.rsu.rnnativemono;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class PurelyAndroidActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_purely_android);
    }

    /**
     * Called when the user taps the Send button
     */
    public void sendMessage(View view) {
        startActivity(new Intent(this, MultiOffersScreenActivity.class));
    }
}
