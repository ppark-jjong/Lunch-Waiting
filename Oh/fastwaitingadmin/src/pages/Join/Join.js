import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions';
import axios from 'axios';
import './Join.css';

const Join = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [storeNumber, setStoreNumber] = useState('');
  const [name, setName] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [isStoreNumberValid, setIsStoreNumberValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);

  const dispatch = useDispatch();

// 아이디 유효성 검사
const handleUsernameChange = (e) => {
    const value = e.target.value;
    const isValid = /^[a-zA-Z0-9]{6,20}$/.test(value);
    setIsUsernameValid(isValid);
    setUsername(value);
  };
  
  // 비밀번호 유효성 검사
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const isValid = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,12}$/.test(value);
    setIsPasswordValid(isValid);
    setPassword(value);
  };
  
  // 비밀번호 확인 유효성 검사
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    const isValid = value === password;
    setIsConfirmPasswordValid(isValid);
    setConfirmPassword(value);
  };  

  

  const handleJoin = async () => {
    // 유효성 검사
    if (!username || !password || !confirmPassword || !storeNumber || !name) {
      alert('모든 필수 정보를 입력하세요.');
      return;
    }

    // 중복된 아이디 확인
    try {
      const response = await axios.post('/api/checkUsername', { username });
      if (!response.data.isUsernameAvailable) {
        alert('이미 사용 중인 아이디입니다.');
        setIsUsernameValid(false);
        return;
      } else {
        setIsUsernameValid(true);
      }
    } catch (error) {
      console.error('아이디 중복 확인 중 에러:', error);
      alert('아이디 중복 확인 중 에러가 발생했습니다.');
      return;
    }

    // 비밀번호 확인
    if (password !== confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      setIsPasswordValid(false);
      setIsConfirmPasswordValid(false);
      return;
    } else {
      setIsPasswordValid(true);
      setIsConfirmPasswordValid(true);
    }

    // 가입 요청
    try {
      const response = await axios.post('/api/register', {
        username,
        password,
        storeNumber,
        name,
      });
      dispatch(registerUser(response.data));
      alert('가입이 완료되었습니다.');
    } catch (error) {
      console.error('가입 중 에러:', error);
      alert('가입 중 에러가 발생했습니다.');
    }
  };

  // 매장번호 유효성 검사
const handleStoreNumberChange = (e) => {
    const value = e.target.value;
  
    // 입력값이 숫자인 경우에만 처리
    if (/^\d*$/.test(value)) {
      // 숫자만 남기고 나머지 문자 제거
      const numericValue = value.replace(/\D/g, '');
  
      // 0000000000 형식으로 변환
      const formattedValue = numericValue.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
  
      setStoreNumber(formattedValue);
  
      // 매장번호 유효성 검사 로직
      const isValid = validateStoreNumber(numericValue);
      setIsStoreNumberValid(isValid);
    }
  };
  
  // 이름 유효성 검사
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  
    // 이름 유효성 검사 로직
    const isValid = validateName(value);
    setIsNameValid(isValid);
  };
  
  // 매장번호 유효성 검사 함수
  const validateStoreNumber = (value) => {
    // 숫자만 남기고 나머지 문자 제거
    const numericValue = value.replace(/\D/g, '');
  
    // 000-00-00000 형식으로 변환
    const formattedValue = numericValue.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
  
    // 변환된 값이 유효한지 검사
    return /^\d{3}-\d{2}-\d{5}$/.test(formattedValue);
  };
  
  // 이름 유효성 검사 함수
  const validateName = (value) => {
    // 유효성 검사 로직
    return value.trim() !== '';
  };

  const isAllFieldsFilled = () => {
    return username && password && confirmPassword && storeNumber && name;
  };
    
  

  return (
    <div className="join">
      <form className="joinFrame">
      <img className="joinLogoIcon" loading="eager" alt="" src="/logo.png" />
        <div className="joinUserId">
          <b className="joinuserIdText">아이디</b>
          <div className={`joinUserIdBox ${!isUsernameValid ? 'error' : ''}`}>
            <input
              className="joinUserIdInput"
              placeholder="6~20 영문, 숫자"
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        </div>
        <div className="joinUserPassword">
          <b className="joinUserPasswordText">비밀번호</b>
          <div className={`joinUserPasswordBox ${!isPasswordValid ? 'error' : ''}`}>
            <input
              className="joinUserPasswordInput"
              placeholder="8~12 영문, 숫자, 특수문자"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="joinUserPasswordCheck">
          <b className="joinUserPasswordCheckText">비밀번호 확인</b>
          <div className={`joinUserPasswordCheckBox ${!isConfirmPasswordValid ? 'error' : ''}`}>
            <input
              className="joinUserPasswordCheckInput"
              placeholder="8~12 영문, 숫자, 특수문자"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        </div>
        <div className="joinUserStoreNumber">
          <b className="joinUserStoreNumberText">사업자등록번호</b>
          <div className={`joinUserStoreNumberBox ${!isStoreNumberValid ? 'error' : ''}`}>
            <input
              className="joinUserStoreNumberInput"
              placeholder="000-00-00000"
              type="text"
              name="storeNumber"
              value={storeNumber}
              onChange={handleStoreNumberChange}
            />
          </div>
        </div>
        <div className="joinUserName">
          <b className="joinUserNameText">성명</b>
          <div className={`joinUserNameBox ${!isNameValid ? 'error' : ''}`}>
            <input
              className="joinUserNameInput"
              placeholder="대표자 성명을 입력해주세요."
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <button
            onClick={handleJoin}
             className={`joinButton ${isAllFieldsFilled() ? 'active' : ''}`}
        >
            <b className="joinCompleteText">가입하기</b>
        </button>
      </form>
    </div>
  );
};

export default Join;