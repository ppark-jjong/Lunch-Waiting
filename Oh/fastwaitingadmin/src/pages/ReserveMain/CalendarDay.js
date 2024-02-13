import "./CalendarDay.css";

const CalendarDay = ({ prop }) => {
  return (
    <div className="calendarday">
      <div className="calendardayBox" />
      <div className="calendardayWrap">{prop}</div>
      <div className="groupexample">
        <div className="reserveDayAllCount">
          {/* 임의로 전체, 신청, 확정, 취소의 수를 설정 */}
          <div className="reserveDayAllCountTitle">전체 : 32</div>
        </div>
        <div className="reserveDayAccCount">
          <div className="reserveDayAccTitle">신청 : 6</div>
        </div>
        <div className="reserveDayDecCount">
          <div className="reserveDayDecTitle">확정 : 25</div>
        </div>
        <div className="reserveDayCanCount">
          <div className="reserveDayCanTitle">취소 : 1</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarDay;
