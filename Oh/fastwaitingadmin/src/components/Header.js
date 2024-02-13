import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="headerBg">
        <div className="headerBgLine" />
        <div className="headerBgWhite" />
        <Link to="/storemain" className='headerLogoTitle'>
          <img
            className="headerLogo"
            loading="eager"
            alt=""
            src="/logo.png"
          />
          <div className="headerTitle">페이팅 사장님 센터</div>
        </Link>
        {/* 서버에 로그아웃 요청 및 서버에서 토큰을 만료시키는 등 필요 */}
        <Link to="/" className="headerLogout">
          로그아웃
        </Link>
      </header>
    );
};

export default Header;