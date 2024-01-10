package com.example.fastwaiting

import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.example.fastwaiting.Fragment.TabFragment1
import com.example.fastwaiting.Fragment.TabFragment2
import com.example.fastwaiting.Fragment.TabFragment3

class notification_list_Adapter(activity: FragmentActivity) : FragmentStateAdapter(activity) {

    override fun getItemCount(): Int {
        // 탭 개수 반환
        return 3
    }

    override fun createFragment(position: Int): Fragment {
        // 각 탭에 해당하는 프래그먼트를 반환
        return when (position) {
            0 -> TabFragment1()
            1 -> TabFragment2()
            2 -> TabFragment3()
            else -> throw IllegalArgumentException("Invalid position: $position")
        }
    }
}
