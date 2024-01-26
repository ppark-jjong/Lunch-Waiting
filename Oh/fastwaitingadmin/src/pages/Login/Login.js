import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputFilled, setInputFilled] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername && !trimmedPassword) {
      alert('아이디와 비밀번호를 입력하세요.');
      return;
    }

    if (!trimmedUsername) {
      alert('아이디를 입력하세요.');
      return;
    }

    if (!trimmedPassword) {
      alert('비밀번호를 입력하세요.');
      return;
    }

    try {
      const response = await axios.post('/api/login', { username: trimmedUsername, password: trimmedPassword });
      dispatch(loginUser(response.data));
    } catch (error) {
      console.error('로그인에 실패했습니다.', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
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
          className={`loginButtonBox ${inputFilled ? 'filled' : ''}`}
        >
          <b className="loginButton">로그인</b>
        </button>
        <a href="/join" target="_blank" rel="noopener noreferrer" className="LoginJoin">
          <span className="LoginJoinText">회원가입</span>
          <img
            className="LoginJoinArrow"
            loading="eager"
            alt=""
            src="/joinArrow.svg"
          />
        </a>
      </form>
    </div>
  );
};

export default Login;
