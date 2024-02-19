import './RestaurantList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const RestaurantList = ({filter}) => {
    const restaurants = [
        { id: 1, name: '부천대학교 꿈집', score: 4.5, count: 1000, sort: '중식', area: '성수동', km: 0.5, price: 1000, img: 'twosome.jpeg' },
        { id: 2, name: '부천대학교 꿈집', score: 4.5, count: 1000, sort: '중식', area: '성수동', km: 0.5, price: 1000, img: 'twosome.jpeg' },
        { id: 3, name: '부천대학교 꿈집', score: 4.5, count: 1000, sort: '중식', area: '성수동', km: 0.5, price: 1000, img: 'twosome.jpeg' },
        { id: 4, name: '부천대학교 꿈집', score: 4.5, count: 1000, sort: '중식', area: '성수동', km: 0.5, price: 1000, img: 'twosome.jpeg' }
    ];

    const filteredRestaurantList = restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <div className="product-list-container">
            {filteredRestaurantList.map((restaurant) => (
                <div key={restaurant.id} className="product-item">
                    <div className='product-img-box'>
                        <img src={restaurant.img} alt={restaurant.name} className='product-img' />
                    </div>
                    <div className='product-name'>{restaurant.name}</div>
                    <div className='product-review'>
                        <img src='star.png' alt='별' id='star-icon' />
                        <div id='product-number'>{restaurant.number}</div>
                        <div id='product-count'>{'('}{restaurant.count}{')'}</div>
                    </div>
                    <div className='product-group'>
                        <div id='product-sort'>{restaurant.sort}</div>
                        <FontAwesomeIcon icon={faCircle} id='dot-icon' />
                        {/* <img src='dot.png' alt='점' id='dot-icon'/> */}
                        <div id='product-area'>{restaurant.area}</div>
                        <FontAwesomeIcon icon={faCircle} id='dot-icon' />
                        {/* <img src='dot.png' alt='점' id='dot-icon'/> */}
                        <div className='km-group'>
                            <div id='product-km'>{restaurant.km}</div>
                            <div id='km-txt'>km</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default RestaurantList;