// frontend/src/pages/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/main');
  };

  return (
    <div className="login">
      <div className="login__bg"></div>
      <div className="login__content">
        <div className="login__forms">
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;