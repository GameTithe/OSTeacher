import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/PostDetail.css';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // 실제 API 호출 예시:
    // fetch(`http://localhost:8080/api/posts/${id}`)
    //   .then(res => res.json())
    //   .then(data => setPost(data))
    //   .catch(err => console.error(err));

    // 예시용 더미 데이터
    const dummyPost = {
      id: id,
      title: `제목 ${id}`,
      content: `팀원 모집합니다.`
    };
    setPost(dummyPost);
  }, [id]);

  if (!post) return <div>로딩 중...</div>;

  return (
    <div>
      <div className="top-bar">
        <div className="top-left">
          <button onClick={() => window.location.href = '/main'}>홈</button>
        </div>
        <div className="top-right">
          <button onClick={() => window.location.href = '/write'}>게시글 작성</button>
        </div>
      </div>
      <div className="post-detail">
        <h2 className="post-title">{post.title}</h2>
        {post.imageUrl && (
          <img className="post-image" src={post.imageUrl} alt={post.title} />
        )}
        <p className="post-content">{post.content}</p>
      </div>
    </div>
  );
}

export default PostDetail;