import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  // 더미 데이터: 10개의 게시글 (번호로 표시)
  const posts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `팀원 모집 ${i + 1}`
  }));

  return (
    <div className="main-page">
      <div className="top-bar">
        <div className="top-left">
          <button onClick={() => navigate('/main')}>홈</button>
        </div>
        <div className="top-center">
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>검색</button>
        </div>
        <div className="top-right">
          <button onClick={() => navigate('/login')}>로그인 / 회원가입</button>
        </div>
      </div>
      <h2>프로젝트 구인</h2>
      <div className="grid-container">
        {posts.map((post) => (
          <div
            className="grid-item"
            key={post.id}
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;