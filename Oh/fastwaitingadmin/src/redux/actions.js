import axios from 'axios';

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      // 비동기 작업 수행
      const response = await axios.post('/api/register', userData);

      // 작업 완료 후 액션 디스패치
      dispatch({
        type: 'REGISTER_USER',
        payload: response.data,
      });
    } catch (error) {
      // 에러 발생 시 처리
      console.error('Register User Error:', error);
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      // 비동기 작업 수행
      const response = await axios.post('/api/login', userData);

      // 작업 완료 후 액션 디스패치
      dispatch({
        type: 'LOGIN_USER',
        payload: response.data,
      });
    } catch (error) {
      // 에러 발생 시 처리
      console.error('Login User Error:', error);
    }
  };
};
