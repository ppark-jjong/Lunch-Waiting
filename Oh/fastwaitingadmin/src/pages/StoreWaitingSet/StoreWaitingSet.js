import { useState, useEffect, useMemo } from "react";
import { Link } from 'react-router-dom';
import "./StoreWaitingSet.css";
import Header from "../../components/Header";

const MemberSet = ({ prop, prop1, propWidth, value, onChange }) => {
  const navStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="memberTimeSet">
      <div className="memberTimeSetBox" />
      <div className="memberTimeSetTitle">{prop}</div>
      <div className="memberInputGroup" style={navStyle}>
        <div className="memberInput">
          <div className="memberinputbox" />
          <input
            className="memberInputValue"
            type="number"
            min="0"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <div className="personTimeTitle">{prop1}</div>
      </div>
    </div>
  );
};

const StoreWaitingSet = () => {
  const [totalMembers, setTotalMembers] = useState(0);
  const [waitingTime, setWaitingTime] = useState(0);

  useEffect(() => {
    // 페이지 로딩 시 서버에서 설정 값을 불러오기
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      // 서버에서 설정 값을 가져오는 API 호출
      const response = await fetch('/api/settings');
      if (!response.ok) {
        throw new Error('서버 응답 실패');
      }
      const settings = await response.json();

      // 가져온 설정 값을 상태에 반영
      setTotalMembers(settings.totalMembers || 0);
      setWaitingTime(settings.waitingTime || 0);
    } catch (error) {
      console.error('데이터 가져오기 실패', error);
    }
  };

  const handleCompleteClick = async () => {
    try {
      // 완료 버튼 클릭 시 서버에 설정 값을 저장하는 API 호출
      await saveSettings({
        totalMembers,
        waitingTime,
      });

      // 설정을 저장한 후 다시 가져와서 화면에 반영
      fetchSettings();
    } catch (error) {
      console.error('데이터 저장 실패', error);
    }
  };

  const saveSettings = async (data) => {
    try {
      // 서버에 설정 값을 저장하는 API 호출
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('서버 응답 실패');
      }
    } catch (error) {
      console.error('데이터 저장 실패', error);
    }
  };

  return (
    <div className="main">
      <Header/>
      <div className="mainBody">
        <nav className="storeWaitingSetNav">
          <div className="storeWaitingSetNavBg" />
          <div className="navTitleGroupSpace">
            <div className="navTitle">홍길동님, 반가워요!</div>
            <div className="navWaitingGroup">
              <Link to="/storemain" className="navMainWaiting">
                <div className="navMainWaitingTitle">웨이팅 관리</div>
                <div className="navMainWaitingButton" />
              </Link> 
              <Link to="/storewaitingset" className="navWaitingSetTitle_storewaitingset">웨이팅 설정</Link>
            </div>
          </div>
          <div className="navGroup">
            <Link to="/reservemain" className="navReserve">예약 관리</Link>
            <div className="navStore">가게 관리</div>
            <div className="navReview">리뷰 관리</div>
          </div>
        </nav>
        <section className="storeWaitingSetBody">
          <div className="storeWaitingSetBgBlue" />
          <div className="storeWaitingSetBodyFrame">
            <div className="storeWaitingSetBgWhite" />
            <div className="storeWaitingSetHeader">
              <div className="storeWaitingSetHeaderBox" />
              <div className="storeWaitingSetHeaderTitle">웨이팅 설정</div>
            </div>
            <div className="memberTimeSet">
              <div className="memberTimeSetBox" />
              <MemberSet
                prop="총 인원수 설정"
                prop1="명"
                value={totalMembers}
                onChange={setTotalMembers}
              />
              <div className="membersetUnder">
                <MemberSet
                  prop="예상 대기시간 설정"
                  prop1="분"
                  propWidth="3.75rem"
                  value={waitingTime}
                  onChange={setWaitingTime}
                />
                <button className="completeGroup" onClick={handleCompleteClick}>
                  <div className="completeBox" />
                  <div className="completeTitle">완료</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StoreWaitingSet;
