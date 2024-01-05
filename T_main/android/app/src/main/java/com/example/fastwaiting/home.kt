package com.example.fastwaiting

import RestaurantAdapter
import android.app.Activity
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import android.widget.ListView
import androidx.recyclerview.widget.RecyclerView
import com.example.fastwaiting.databinding.ActivityHomeBinding
import com.google.android.material.bottomsheet.BottomSheetDialog

private lateinit var binding: ActivityHomeBinding

class home : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityHomeBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val areaBtn = findViewById<ImageView>(R.id.areaBtn)

        areaBtn.setOnClickListener {
            val bottomDialog = bottom_sheet_dialog_area.newInstance()
            bottomDialog.show(supportFragmentManager, bottomDialog.tag)
        }

//        setBottomNavigationView()
//
//        // 앱 초기 실행 시 홈화면으로 설정
//        if (savedInstanceState == null) {
//            binding.bottomNavigationView.selectedItemId = R.id.fragment_home
//        }

        val recyclerView: RecyclerView = findViewById(R.id.restaurantRecyclerView)

        // 여러 개의 테스트 데이터 생성
        val restaurantItems = listOf(
            RestaurantItem("브레디포스트 성수점", 4.5, 181, "카페/베이커리", "성수동", "0.5km"),
            RestaurantItem("맛있는 음식점", 3.8, 90, "한식", "강남구", "1.2km"),
            RestaurantItem("피자 킹", 4.2, 120, "피자", "서대문구", "2.5km"),
            RestaurantItem("피자 킹", 4.2, 120, "피자", "서대문구", "2.5km"),
            RestaurantItem("피자 킹", 4.2, 120, "피자", "서대문구", "2.5km"),
            RestaurantItem("피자 킹", 4.2, 120, "피자", "서대문구", "2.5km")

            // 여러 개의 아이템을 추가하십시오.
        )

        // 어댑터 설정
        val adapter = RestaurantAdapter(this, restaurantItems)
        recyclerView.adapter = adapter

    }

//    fun setBottomNavigationView() {
//        binding.bottomNavigationView.setOnItemSelectedListener { item ->
//            when (item.itemId) {
//                R.id.fragment_home -> {
//                    supportFragmentManager.beginTransaction().replace(R.id.main_container, HomeFragment()).commit()
//                    true
//                }
//                R.id.fragment_waiting -> {
//                    supportFragmentManager.beginTransaction().replace(R.id.main_container, WaitingFragment()).commit()
//                    true
//                }
//                R.id.fragment_favorite -> {
//                    supportFragmentManager.beginTransaction().replace(R.id.main_container, FavoriteFragment()).commit()
//                    true
//                }
//                R.id.fragment_user -> {
//                    supportFragmentManager.beginTransaction().replace(R.id.main_container, UserFragment()).commit()
//                    true
//                }
//                else -> false
//            }
//        }
//    }
}