import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.fastwaiting.R
import com.example.fastwaiting.RestaurantItem

class RestaurantAdapter(private val context: Context, private val items: List<RestaurantItem>) :
    RecyclerView.Adapter<RestaurantAdapter.ViewHolder>() {

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val profileImageView: ImageView = itemView.findViewById(R.id.iv_profile)
        val nameTextView: TextView = itemView.findViewById(R.id.iv_name)
        val scoreTextView: TextView = itemView.findViewById(R.id.iv_score)
        val numberTextView: TextView = itemView.findViewById(R.id.iv_number)
        val categoryTextView: TextView = itemView.findViewById(R.id.iv_category)
        val cityTextView: TextView = itemView.findViewById(R.id.iv_city)
        val distanceTextView: TextView = itemView.findViewById(R.id.iv_distance)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = LayoutInflater.from(parent.context).inflate(R.layout.item_restaurant_list, parent, false)
        return ViewHolder(itemView)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val currentItem = items[position]

        // 데이터를 뷰에 설정
        holder.nameTextView.text = currentItem.name
        holder.scoreTextView.text = currentItem.score.toString()
        holder.numberTextView.text = "(${currentItem.number})"
        holder.categoryTextView.text = currentItem.category
        holder.cityTextView.text = currentItem.city
        holder.distanceTextView.text = currentItem.distance

        // 프로필 이미지를 설정하는 코드를 추가해야 합니다.
    }

    override fun getItemCount(): Int {
        return items.size
    }
}
