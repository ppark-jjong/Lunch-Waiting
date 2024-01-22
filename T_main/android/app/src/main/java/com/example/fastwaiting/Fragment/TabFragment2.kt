package com.example.fastwaiting.Fragment

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import com.example.fastwaiting.R

class TabFragment2 : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val view = inflater.inflate(R.layout.fragment_tab2, container, false)

        // Kotlin 코드에서 해당 레이아웃 참조 가져오기
        val noWaitingLayout: LinearLayout = view.findViewById(R.id.noWaiting)
        val waitingListLayout: LinearLayout = view.findViewById(R.id.waiting_list)

        // noWaitingLayout 보이게 하기
        noWaitingLayout.visibility = View.GONE

        // waitingListLayout 숨기기
        waitingListLayout.visibility = View.VISIBLE

        return view
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
        }
    }
}
