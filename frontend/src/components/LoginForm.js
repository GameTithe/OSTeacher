import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';

function LoginForm({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    memberEmail: '',
    memberPassword: ''
  });

  // input 변경 핸들러
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // form 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 동작 막기 (페이지 새로고침 방지)
    try {
      // 백엔드 API 호출 (/api/members/login)
      const res = await fetch('http://localhost:8080/api/members/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      if (res.ok) {
        alert('로그인 성공!');
        onLoginSuccess && onLoginSuccess();
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      alert('로그인 중 에러 발생');
    }
  };

return (
    <div className="auth">
      <div className="auth__bg"></div>
      <div className="auth__forms">
        <h1 className="auth__title">로그인</h1>
        <form onSubmit={handleSubmit}>
          <div className="auth__box">
            <i className="bx bx-user auth__icon"></i>
            <input
              type="text"
              name="memberEmail"
              placeholder="이메일"
              className="auth__input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth__box">
            <i className="bx bx-lock auth__icon"></i>
            <input
              type="password"
              name="memberPassword"
              placeholder="비밀번호"
              className="auth__input"
              onChange={handleChange}
              required
            />
          </div>
          <a className="auth__forgot">비밀번호를 잊으셨나요?</a>
          <button type="submit" className="auth__button">로그인</button>
          <div>
            <span className="auth__account">계정이 없으신가요?</span>
            <button
              type="button"
              className="auth__signin"
              onClick={() => navigate('/join')}
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;