import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState(""); 

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="group-nearby-fast">
      <div className="component-frame-rect">
        <div className="text-search-bar">
          <div className="main-logo-bar">
            <div className="vector-arrow">
              <img
                className="main-logo-img"
                loading="eager"
                alt=""
                src="/main-logo.png"
              />
              <div className="main-logo-text">페이팅</div>
            </div>
          </div>
          <div className="search-parent">
            <div className="search-child" />
            <img
              className="search-img"
              alt=""
              src="/magnifier.svg"
            />
            <input
              className="input-search"
              placeholder="지역, 음식, 매장명 검색"
              type="text"
              value={search}
              onChange={onChangeSearch}
            />
          </div>
          <div className="component-user-login">
            <div className="user-login-container">

              <a href="/main" target="_blank" rel="noopener noreferrer" className="login-link">
                <span className="user-login-text">로그인</span>
              </a>

            </div>
            <div className="line-separator" />
            <div className="component-user-join">
              <div className="user-join-container">

                <a href="/main" target="_blank" rel="noopener noreferrer" className="join-link">
                  <span className="user-login-text">회원가입</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
