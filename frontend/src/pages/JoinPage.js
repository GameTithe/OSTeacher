import React from 'react';
import { useNavigate } from 'react-router-dom';
import JoinForm from '../components/JoinForm';

function JoinPage() {
  const navigate = useNavigate();

  const handleJoinSuccess = () => {
    alert('회원가입 성공!');
    navigate('/login');
  };

  return (
    <div className="join-page">
      <JoinForm onJoinSuccess={handleJoinSuccess} />
    </div>
  );
}

export default JoinPage;