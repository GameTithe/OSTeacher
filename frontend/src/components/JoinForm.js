import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';

function JoinForm({ onJoinSuccess }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    memberEmail: '',
    memberPassword: '',
    memberName: '',
    memberSkillStack: ''
  });

  // input 변경 핸들러
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // form 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 동작 막기 (페이지 새로고침 방지)
    try {
      // 백엔드 API로 POST (URL은 실제 API 경로로)
      const res = await fetch('http://localhost:8080/api/members/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('회원가입 성공!');
        // 성공 후 동작 (ex: 로그인 페이지로 이동)
        onJoinSuccess && onJoinSuccess();
      } else {
        alert('회원가입 실패');
      }
    } catch (error) {
      console.error('회원가입 에러:', error);
      alert('회원가입 중 에러가 발생했습니다.');
    }
  };

    return (
      <div className="auth">
        <div className="auth__bg"></div>
        <div className="auth__forms">
          <h1 className="auth__title">회원가입</h1>
          <form onSubmit={handleSubmit}>
            <div className="auth__box">
              <i className="bx bx-at auth__icon"></i>
              <input
                type="email"
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
            <div className="auth__box">
              <i className="bx bx-user auth__icon"></i>
              <input
                type="text"
                name="memberName"
                placeholder="이름"
                className="auth__input"
                onChange={handleChange}
                required
              />
            </div>
            <div className="auth__box">
              <i className="bx bx-code-alt auth__icon"></i>
              <input
                type="text"
                name="memberSkillStack"
                placeholder="기술 스택"
                className="auth__input"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="auth__button">회원가입</button>
          </form>
        </div>
      </div>
    );
}

export default JoinForm;