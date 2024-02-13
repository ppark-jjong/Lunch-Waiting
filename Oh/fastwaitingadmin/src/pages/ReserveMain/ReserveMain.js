import React, { useState } from "react";
import { Link } from 'react-router-dom';
import CalendarDay from "./CalendarDay";
import "./ReserveMain.css";
import Header from "../../components/Header";

const ReserveMain = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth() + 1); // 월은 0부터 시작하므로 1을 더해줍니다.

  const handlePrevYear = () => {
    setYear(year - 1);
  };

  const handlePrevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextYear = () => {
    setYear(year + 1);
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  // 해당 년도와 달의 첫째 날을 가져오는 함수
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month - 1, 1).getDay(); // 월은 0부터 시작하므로 1을 빼고 첫째 날의 요일을 반환합니다.
  };

  // 해당 년도와 달의 마지막 날을 가져오는 함수
  const getLastDayOfMonth = (year, month) => {
    return new Date(year, month, 0).getDate(); // 달의 마지막 날을 반환합니다.
  };

  // 해당 년도와 달의 달력을 생성하는 함수
  const generateCalendar = (year, month) => {
    const firstDay = getFirstDayOfMonth(year, month);
    const lastDay = getLastDayOfMonth(year, month);
    const calendar = [];

    // 한 주의 요일을 담는 배열
    const weekDaysOrder = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    // 각 열(column)을 만들어서 날짜를 출력합니다.
    for (let i = 0; i < 7; i++) {
      const weekDays = [];

      for (let j = 0; j < 6; j++) {
        const dayOfMonth = j * 7 + i - firstDay + 1;
        if (dayOfMonth < 1 || dayOfMonth > lastDay) {
          // 날짜가 달력의 범위를 벗어난 경우 빈 칸을 채웁니다.
          weekDays.push(<div className="calendarBlank" key={`blank-${j}-${i}`} />);
        } else {
          const dayClassName = weekDaysOrder[i];
          weekDays.push(<CalendarDay prop={dayOfMonth} key={`day-${j}-${i}`} className={dayClassName} />);
        }
      }

      calendar.push(<div className="calendar-column" key={`column-${i}`}>{weekDays}</div>);
    }

    return calendar;
  };

  return (
    <div className="reserveMain">
      <Header/>
      <div className="mainBody">
        <nav className="reserveMainNav">
          <div className="navBg" />
          <div className="navTitle">홍길동님, 반가워요!</div>
          <div className="reserveMainNavGroup">
            <Link to="/storemain" className="navWaiting">웨이팅 관리</Link>
            <Link to="/reservemain" className="navReserveMain">예약 관리</Link>
            <div className="navReserveMainGroup">
              <Link to="/reserveapplication" className="navReserveApplication">신청</Link>
              <div className="navReserveDecide">확정</div>
              <div className="navReserveCancle">취소</div>
              <div className="navReserveComplete">완료</div>
            </div>
            <div className="navStore">가게 관리</div>
            <div className="navReview">리뷰 관리</div>
          </div>
        </nav>
        <section className="reserveMainBody">
          <div className="reserveMainBgBlue" />
          <div className="reserveMainBodyGroup">
            <div className="reserveMainBgWhite" />
            <div className="reserveMainHeader">
              <div className="reserveMainHeaderBox" />
              <div className="reserveMainHeaderTitle">예약 관리</div>
            </div>
            <div className="calendar">
              <div className="calendarBgBlue" />
              <div className="calendarHeader">
                <div className="calendarHeaderBox" />
                <div className="calendarBeforeGroup">
                  <img
                    className="calendarYearBeforeArrow"
                    loading="eager"
                    alt=""
                    src="/calendarYearBeforeArrow.svg"
                    onClick={handlePrevYear}
                  />
                  <img
                    className="calendarMonthBeforeArrow"
                    loading="eager"
                    alt=""
                    src="/calendarMonthBeforeArrow.svg"
                    onClick={handlePrevMonth}
                  />
                </div>
                <div className="calendarYearMonth">{`${year}.${month < 10 ? '0' + month : month}.`}</div>
                <div className="calendarNextGroup">
                  <img
                    className="calendarMonthNextArrow"
                    loading="eager"
                    alt=""
                    src="/calendarMonthNextArrow.svg"
                    onClick={handleNextMonth}
                  />
                  <img
                    className="calendarYearNextArrow"
                    loading="eager"
                    alt=""
                    src="/calendarYearNextArrow.svg"
                    onClick={handleNextYear}
                  />
                </div>
              </div>
              <div className="calendarWeekendGroup">
                <div className="sun">
                  <div className="sunBox" />
                  <div className="sunTitle">일</div>
                </div>
                <div className="mon">
                  <div className="monBox" />
                  <div className="monTitle">월</div>
                </div>
                <div className="tue">
                  <div className="tueBox" />
                  <div className="tueTitle">화</div>
                </div>
                <div className="wed">
                  <div className="wedBox" />
                  <div className="wedTitle">수</div>
                </div>
                <div className="thu">
                  <div className="thuBox" />
                  <div className="thuTitle">목</div>
                </div>
                <div className="fri">
                  <div className="friBox" />
                  <div className="friTitle">금</div>
                </div>
                <div className="sat">
                  <div className="satBox" />
                  <div className="satTitle">토</div>
                </div>
              </div>
              <div className="calenderdayGroup">
                {generateCalendar(year, month)}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReserveMain;
