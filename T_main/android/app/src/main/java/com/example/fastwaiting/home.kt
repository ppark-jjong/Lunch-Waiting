package com.example.fastwaiting

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import com.google.android.material.bottomsheet.BottomSheetDialog

class home : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

        val areaBtn = findViewById<ImageView>(R.id.areaBtn)

        areaBtn.setOnClickListener{
            val bottomDialog = bottom_sheet_dialog_area.newInstance()
            bottomDialog.show(supportFragmentManager, bottomDialog.tag)
        }



    }
}