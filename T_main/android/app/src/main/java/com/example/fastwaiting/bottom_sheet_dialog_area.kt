package com.example.fastwaiting

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.DialogFragment
import com.google.android.material.bottomsheet.BottomSheetDialogFragment

class bottom_sheet_dialog_area : BottomSheetDialogFragment() {
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.activity_bottom_sheet_dialog_area, container, false)
    }

    companion object {
        fun newInstance(): bottom_sheet_dialog_area {
            return bottom_sheet_dialog_area()
        }
    }
}