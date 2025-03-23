// frontend/src/pages/MainPage.js
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