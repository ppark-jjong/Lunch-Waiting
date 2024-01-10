package com.example.fastwaiting.Fragment

import android.graphics.drawable.Drawable
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.DividerItemDecoration
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.fastwaiting.R
import com.example.fastwaiting.announcementTestData
import com.example.fastwaiting.announcement_list_Adapter


class TabFragment1 : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_tab1, container, false)

        val recyclerView: RecyclerView = view.findViewById(R.id.announcementRecyclerView)

        // Dummy data for the RecyclerView
        val dummyData = listOf(
            announcementTestData("[공지] 페이팅 전산시스템 점검에 따른 서비스 일시 중단 안내 (09월 21일 05시~06시)", "2023년 10월 17일"),
            announcementTestData("[공지] 페이팅 전산시스템 점검에 따른 서비스 일시 중단 안내 (09월 21일 05시~06시)", "2023년 10월 17일"),
            announcementTestData("[공지] 페이팅 전산시스템 점검에 따른 서비스 일시 중단 안내 (09월 21일 05시~06시)", "2023년 10월 17일")
            // Add more items as needed
        )

        // Create a divider drawable
        val dividerDrawable: Drawable? = ContextCompat.getDrawable(requireContext(), R.drawable.divider_line)

        // Set up RecyclerView with LinearLayoutManager and add divider
        recyclerView.layoutManager = LinearLayoutManager(requireContext())
        dividerDrawable?.let {
            recyclerView.addItemDecoration(DividerItemDecoration(requireContext(), DividerItemDecoration.VERTICAL).apply {
                setDrawable(it)
            })
        }

        // Set your RecyclerView adapter and data
        val adapter = announcement_list_Adapter(dummyData)
        recyclerView.adapter = adapter

        return view
    }
}

