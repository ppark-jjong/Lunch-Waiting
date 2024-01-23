// src/components/Login.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions';
import axios from 'axios';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputFilled, setInputFilled] = useState(false);
  const dispatch = useDispatch();

  const isUsernameValid = (username) => /^[a-z0-9]+$/.test(username);

  const isPasswordValid = (password) => {
    return /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,16}$/.test(password);
  };

  const handleLogin = async () => {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername) {
      alert('아이디를 입력하세요.');
      return;
    }

    if (!isUsernameValid(trimmedUsername)) {
      alert('아이디는 영문 소문자와 숫자로만 구성되어야 합니다.');
      return;
    }

    if (!trimmedPassword) {
      alert('비밀번호를 입력하세요.');
      return;
    }

    if (!isPasswordValid(trimmedPassword)) {
      alert('비밀번호는 최소 8자에서 최대 16자, 대문자, 특수문자, 숫자가 포함되어야 합니다.');
      return;
    }

    try {
      const response = await axios.post('/api/login', { username: trimmedUsername, password: trimmedPassword });
      dispatch(loginUser(response.data));
    } catch (error) {
      console.error('로그인에 실패했습니다.', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFilled(name === 'username' ? value.trim() !== '' : password.trim() !== '');
  };

  return (
    <div className="login">
      <form className="loginFrame">
        <img className="logoIcon" loading="eager" alt="" src="/logo.png" />
        <div className="userid">
          <b className="idText">아이디</b>
          <div className="idbox">
            <input
              className="idInput"
              placeholder="아이디를 입력해주세요."
              type="text"
              name="username"
              value={username}
              onChange={(e) => { setUsername(e.target.value); handleInputChange(e); }}
            />
          </div>
        </div>
        <div className="password">
          <b className="passwordText">비밀번호</b>
          <div className="passwordbox">
            <input
              className="passwordInput"
              placeholder="비밀번호를 입력해주세요."
              type="password"
              name="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); handleInputChange(e); }}
            />
          </div>
        </div>
        <button
          onClick={handleLogin}
          className={`login1 ${inputFilled ? 'filled' : ''}`}
        >
          <b className="loginButton">로그인</b>
        </button>
        <div className="join">
          <b className="joinText">회원가입</b>
          <img
            className="joinArrow "
            loading="eager"
            alt=""
            src="/joinArrow.svg"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
