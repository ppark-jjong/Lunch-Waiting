import { useState } from 'react';
import '../Main/Main.css';
import Navbar from "../../components/Navbar";
import DropDownArea from "../../components/DropDownArea";
import RestaurantList from "../../components/RestaurantList";

const Main = () => {
  const [filter, setFilter] = useState('');

  const onChangeSearch = (search) => {
    setFilter(search);
  };

    return (
      <div className="main">
    <section className="main-header-post">
    <Navbar onSearch={onChangeSearch}/>
        <div className="container-frame" />
          <div className="map-container">
              <img className="map-icon" alt="" src="/i3d01-1@2x.png" />
              <DropDownArea />
          </div>
        <div className="main-frame">
          <div className="restaurant-box" />
          <div className="group-frames">
            <h2 className="h2">주변 맛집 다 모여라!</h2>
          </div>
          <div className="filter-div-box">
            <div className="waiting-fast-sort">
              <button className="rectangle-container">
                <div className="frame-inner" />
                <div className="div3">가까운 순</div>
              </button>
              <button className="rectangle-container">
                <div className="frame-inner" />
                <div className="div4">웨이팅 빠른 순</div>
              </button>
              <button className="rectangle-container">
                <div className="frame-inner" />
                <div className="div5">평점 높은 순</div>
              </button>
            </div>
          </div>
          <RestaurantList filter={filter}/>
        </div>
      </section>
    </div>
    );
};

export default Main;