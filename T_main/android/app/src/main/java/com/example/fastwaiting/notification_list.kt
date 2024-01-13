package com.example.fastwaiting

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.fragment.app.FragmentActivity
import androidx.viewpager2.widget.ViewPager2
import com.google.android.material.tabs.TabLayout
import com.google.android.material.tabs.TabLayoutMediator

class notification_list : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_notification_list)

        val tabLayout: TabLayout = findViewById(R.id.notification_Tab)
        val viewPager: ViewPager2 = findViewById(R.id.notification_ViewPager)

        val adapter = notification_list_Adapter(this)
        viewPager.adapter = adapter

        // TabLayout과 ViewPager 연결
        TabLayoutMediator(tabLayout, viewPager) { tab, position ->
            // 직접 탭의 텍스트를 설정
            when (position) {
                0 -> tab.text = "공지"
                1 -> tab.text = "웨이팅"
                2 -> tab.text = "예약"
            }
        }.attach()
    }
}
