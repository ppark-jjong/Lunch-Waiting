import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomDatePicker from '../../components/CustomDatePicker';
import "./ReserveApplication.css";
import Header from "../../components/Header";

const ReserveApplication = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // 임시 데이터
    const [reserveApplicationList, setReserveApplication] = useState([
        { bookDate: '23.12.31 (일) 오후 20:00', bookName: '홍길동', bookMembers: 5, bookPhoneNumber: '010-2324-0312', requestedTerm: '땅콩 알레르기 있습니다.', beforeBook: 0 },
        { bookDate: '23.12.31 (일) 오후 20:00', bookName: '홍길동', bookMembers: 2, bookPhoneNumber: '010-0210-0312', requestedTerm: '없음', beforeBook: 4 },
    ]);

    const handleDatePickerButtonClick = () => {
        setShowDatePicker(!showDatePicker);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setShowDatePicker(false);
    };

    const handlefixButtonClick = (bookPhoneNumber) => {
        const updatedList = reserveApplicationList.filter(item => item.bookPhoneNumber !== bookPhoneNumber);
        setReserveApplication(updatedList);
    };

    const handleCancelButtonClick = (bookPhoneNumber) => {
        const updatedList = reserveApplicationList.filter(item => item.bookPhoneNumber !== bookPhoneNumber);
        setReserveApplication(updatedList);
    };

    const totalMembers = reserveApplicationList.reduce((total, item) => total + item.bookMembers, 0);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}년 ${month}월 ${day}일`;
    };

    useEffect(() => {
        const today = new Date();
        setSelectedDate(today);
    }, []);

    return (
        <div className="reserveApplication">
            <Header/>
            <div className="reserveApplicationBody">
                <nav className="reserveMainNav">
                    <div className="navBg" />
                    <div className="navTitle">홍길동님, 반가워요!</div>
                    <div className="reserveMainNavGroup">
                        <Link to="/storemain" className="navWaiting">웨이팅 관리</Link>
                        <Link to="/reservemain" className="navReserveMain">예약 관리</Link>
                        <div className="navReserveMainGroup">
                            <Link to="/reserveapplication" className="navReserveApplicationMain">신청</Link>
                            <div className="navReserveDecide">확정</div>
                            <div className="navReserveCancle">취소</div>
                            <div className="navReserveComplete">완료</div>
                        </div>
                        <div className="navStore">가게 관리</div>
                        <div className="navReview">리뷰 관리</div>
                    </div>
                </nav>
                <section className="reserveApplicationList">
                    <div className="reserveApplicationListBgGrey" />
                    <div className="reserveApplicationListGroup">
                        <div className="reserveApplicationListBgWhite" />
                        <div className="reserveApplicationListHeaderGroup">
                            <div className="reserveApplicationBox" />
                            <div className="reserveApplicationTitle">예약 신청</div>
                        </div>
                        <div className="reserveApplicationInfoGroup">
                            <div className="reserveApplicationInfoBgBlue" />
                            <div className="reserveApplicationInfoTop">
                                <div className="reserveApplicationInfoTopGroup">
                                    <div className="reserveApplicationInfoChooseDate">
                                        <div className="reserveApplicationInfoChooseDateTitle">{formatDate(selectedDate)}</div>
                                            <img
                                                className="reserveApplicationInfoChooseDateButton"
                                                onClick={handleDatePickerButtonClick}
                                                alt=""
                                                src="/reserveApplicationInfoChooseDateButton.svg"
                                            />
                                    </div>
                                    <div className="reserveTotalTeamMember">
                                        <div className="reserveTotalTeamTitle">{`총 ${reserveApplicationList.length}팀 `}</div>
                                        <div className="reserveTotalTeamMemberDot" />
                                        <div className="reserveTotalMemberTitle">{`${totalMembers}명 `}</div>
                                    </div>
                                </div>
                            </div>        
                            <div id='datePickerChoose'>
                                <CustomDatePicker
                                    selectedDate={selectedDate}
                                    handleDateSelect={handleDateSelect}
                                    showDatePicker={showDatePicker}
                                />
                            </div>
                            <div className="reserveApplicationTotalGroup">
                                {reserveApplicationList.map(item => (
                                    <div key={item.bookPhoneNumber} className="reserveApplicationGroup">
                                        <div className="reserveApplicationGroupBox" />
                                        <div className="reserveApplicationGroupTop">
                                            <div className="reserveApplicationDateButtonGroup">
                                                <div className="reserveApplicationDate">{`예약 날짜 : ${item.bookDate}`}</div>
                                                <div className="reserveApplicationButtonGroup">
                                                    <button className="reserveFixButton" onClick={() => handlefixButtonClick(item.bookPhoneNumber)}>
                                                        <div className="reserveFixBox" />
                                                        <div className="reserveFixTitle">확정</div>
                                                    </button>
                                                    <button className="reserveCancleButton" onClick={() => handleCancelButtonClick(item.bookPhoneNumber)}>
                                                        <div className="reserveCancleBox" />
                                                        <div className="reserveCancleTitle">취소</div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="reserveApplicationListBoxLine" />
                                        </div>
                                        <div className="reserveApplicationNameMemberGroup">
                                            <div className="reserveApplicationNameMemberBox">
                                                {/* 사용자가 선택한 날짜의 예약 신청 건을 반영하도록 수정 필요, 아래 날짜는 임시 */}
                                                <div className="reserveApplicationName">{`예약자 명 : ${item.bookName}`}</div>
                                                <div className="reserveApplicationMember">{`인원 : ${item.bookMembers}명`}</div>
                                            </div>
                                        </div>
                                        <div className="reserveApplicationPhoneNumberGroup">
                                            <div className="reserveApplicationPhoneNumber">{`전화번호 : ${item.bookPhoneNumber}`}</div>
                                        </div>
                                        <div className="reserveApplicationTermBookGroup">
                                            <div className="reserveApplicationTermBookGroupSpace">
                                                <div className="reserveApplicationTerm">{`요청사항 : ${item.requestedTerm}`}</div>
                                                <div className="reserveApplicationBook">{`이전 예약 : ${item.beforeBook}회`}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>  
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReserveApplication;

