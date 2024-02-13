import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./StoreMain.css";
import Header from "../../components/Header";

const StoreMain = () => {
  // 임시 설정
  const [waitingList, setWaitingList] = useState([
    // 임시 웨이팅 리스트 데이터
    { id: 26, type: '어플', teamMembers: 5, phoneNumber: '010-2324-0312', name: '윌리엄', waitingTime: 30, visits: 5 },
    { id: 2, type: '현장', teamMembers: 2, phoneNumber: '010-2324-0312', name: '윌리엄', waitingTime: 40, visits: 0 },
  ]);

  // 호출 버튼 클릭 시 처리
  const handleCallButtonClick = (id) => {
    // 호출 버튼이 클릭된 요소를 삭제
    const updatedList = waitingList.filter(item => item.id !== id);
    setWaitingList(updatedList);
  };

  // 취소 버튼 클릭 시 처리
  const handleCancelButtonClick = (id) => {
    // 취소 버튼이 클릭된 요소를 삭제
    const updatedList = waitingList.filter(item => item.id !== id);
    setWaitingList(updatedList);
  };

  // 모든 팀의 멤버 수를 더한 값 계산
  const totalMembers = waitingList.reduce((total, item) => total + item.teamMembers, 0);

  return (
    <div className="main">
      <Header/>
      <div className="mainBody">
        <nav className="mainNav">
          <div className="navBg" />
          <div className="navTitleGroupSpace">
            {/* 로그인한 회원의 성명이 나오도록 수정 */}
            <div className="navTitle">홍길동님, 반가워요!</div>
            <div className="navWaitingGroup">
              <Link to="/storemain" className="navMainWaiting">
                <div className="navMainWaitingTitle">웨이팅 관리</div>
                <div className="navMainWaitingButton"/>
              </Link>
              <Link to="/storewaitingset" className="navWaitingSetTitle">웨이팅 설정</Link>
            </div>
          </div>
          <div className="navGroup">
            <Link to="/reservemain" className="navReserve">예약 관리</Link>
            <div className="navStore">가게 관리</div>
            <div className="navReview">리뷰 관리</div>
          </div>
        </nav>
        <section className="waitingList">
          <div className="sectionOutBg" />
          <div className="sectionWaitingListGroup">
            <div className="sectionBgWhite" />
            <div className="waitingListHeader">
              <div className="waitingListHeaderBg" />
              <div className="waitingListHeaderTitle">웨이팅 관리</div>
            </div>
            <div className="waitingListBodyGroup">
              <div className="sectionBgBlue" />
              <div className="waitingListTopInfoGroup1">
                <div className="waitingListTopInfoGroup2">
                  <div className="waitingListTopInfoGroup3">
                    <div className="waitingListTopTeamInfo">{`총 ${waitingList.length}팀 `}</div>
                    <div className="waitingListTopInfoDot" />
                    <div className="waitingListTopMemberInfo">{`총 ${totalMembers}명 `}</div>
                  </div>
                  {/* 서버에 저장된(업주가 설정한) 시간을 가져오도록 변경 */}
                  <div className="waitingListTopTimeInfo">웨이팅 예상시간 30분</div>
                </div>
              </div>
              <div className="waitingListGroup">
                {waitingList.map(item => (
                  <div key={item.id} className="waitingListInfo">
                    <div className="waitingListBox" />
                    <div className="waitingListInfoLeftGroup">
                      <div className="waitingListNumberLocalGroup">
                        <div className="waitingNumber">{item.id}</div>
                        <div className="waitingLocalGroup">
                          <div className="waitingLocal">{item.type}</div>
                        </div>
                      </div>
                      <div className="waitingInfoGroup">
                        <div className="waitingTeamMember">{`총 ${item.teamMembers}명`}</div>
                        <div className="waitingInfoUnderGroup">
                          <div className="waitingPhoneNameTimeGroup">
                            <div className="waitingPhoneNameGroup">
                              <div className="waitingPhone">{item.phoneNumber}</div>
                              <div className="waitingPhoneNameDotLeft" />
                              <div className="waitingName">{item.name}</div>
                              <div className="waitingPhoneNameDotRight" />
                            </div>
                            <div className="waitingTime">{`${item.waitingTime}분 대기`}</div>
                          </div>
                          <div className="waitingVisit">{`${item.visits}회 방문`}</div>
                        </div>
                      </div>
                    </div>
                    <div className="callAndCancelButton">
                      <button className="callButton" onClick={() => handleCallButtonClick(item.id)}>
                        <div className="callBox" />
                        <div className="callTitle">호출</div>
                      </button>
                      <button className="cancleButton" onClick={() => handleCancelButtonClick(item.id)}>
                        <div className="cancleBox" />
                        <div className="cancleTitle">취소</div>
                      </button>
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

export default StoreMain;

////////////////////////데이터를 서버에서 가져오는///////////////////////////////
// import React, { useState, useEffect } from 'react';
// import "./StoreMain.css";

// const StoreMain = () => {
//   // 초기 상태 설정
//   const [waitingList, setWaitingList] = useState([]);

//   // useEffect를 사용하여 컴포넌트가 마운트된 후에 서버에서 데이터를 가져옴
//   useEffect(() => {
  // const fetchWaitingList = async () => {
  //   try {
  //     // 서버에서 웨이팅 리스트 데이터를 가져오는 API 호출
  //     const response = await fetch('/api/waiting-list');
  //     if (!response.ok) {
  //       throw new Error('서버 응답 실패');
  //     }
  //     const waitingListData = await response.json();
      
  //     // 웨이팅 리스트 데이터를 시간순으로 정렬
  //     const sortedWaitingList = waitingListData.sort((a, b) => a.timestamp - b.timestamp);
  //     setWaitingList(sortedWaitingList);
  //   } catch (error) {
  //     console.error('데이터 가져오기 실패', error);
  //   }
  // };

//     fetchWaitingList();
//   }, []); // 빈 배열을 전달하면 컴포넌트가 마운트될 때 한 번만 실행됨

//   // 호출 버튼 클릭 시 처리
//   const handleCallButtonClick = (id) => {
//     // 호출 버튼이 클릭된 요소를 삭제
//     const updatedList = waitingList.filter(item => item.id !== id);
//     setWaitingList(updatedList);
//   };

//   // 취소 버튼 클릭 시 처리
//   const handleCancelButtonClick = (id) => {
//     // 취소 버튼이 클릭된 요소를 삭제
//     const updatedList = waitingList.filter(item => item.id !== id);
//     setWaitingList(updatedList);
//   };

//   return (
//     <div className="main">
//       {/* ... 이하 생략 */}
//       <section className="waitingList">
//         <div className="sectionOutBg" />
//         <div className="sectionWaitingListGroup">
//           <div className="sectionBgWhite" />
//           <div className="waitingListHeader">
//             <div className="waitingListHeaderBg" />
//             <div className="waitingListHeaderTitle">웨이팅 관리</div>
//           </div>
//           <div className="waitingListBodyGroup">
//             <div className="sectionBgBlue" />
//             <div className="waitingListTopInfoGroup1">
//               <div className="waitingListTopInfoGroup2">
//                 <div className="waitingListTopInfoGroup3">
//                   <div className="waitingListTopTeamInfo">{`총 ${waitingList.length}팀 `}</div>
//                   <div className="waitingListTopInfoDot" />
//                   <div className="waitingListTopMemberInfo">{`7명 `}</div>
//                 </div>
//                 <div className="waitingListTopTimeInfo">웨이팅 예상시간 30분</div>
//               </div>
//             </div>
//             <div className="waitingListGroup">
//               {waitingList.map(item => (
//                 <div key={item.id} className="waitingListInfo">
//                   {/* ... 이하 생략 */}
//                   <div className="callAndCancelButton">
//                     <button className="callButton" onClick={() => handleCallButtonClick(item.id)}>
//                       <div className="callBox" />
//                       <div className="callTitle">호출</div>
//                     </button>
//                     <button className="cancleButton" onClick={() => handleCancelButtonClick(item.id)}>
//                       <div className="cancleBox" />
//                       <div className="cancleTitle">취소</div>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default StoreMain;
