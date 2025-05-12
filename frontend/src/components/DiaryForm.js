import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const DiaryForm = () => {
  const navigate = useNavigate();

  // 사용자 입력 상태 관리
  const [situation, setSituation] = useState('');
  const [duration, setDuration] = useState('');
  const [impact, setImpact] = useState('');
  const [score, setScore] = useState(5);
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ situation, duration, impact, score, reason });
    navigate('/drawing-process');
  };

  return (
    <div className="outer-container">
      <div className="phone-frame">
        <button className="back-button" onClick={() => navigate('/main')}>
          ←
        </button>

        <div className="diary-form-container">
          <img 
            src="test_screen.png" 
            alt="SNS Screen Time" 
            className="screen-image small-screen"  // 이미지 크기 줄임
          />

          <form onSubmit={handleSubmit} className="diary-form">
            <h2>오늘 핸드폰 사용 상황을 떠올려보세요</h2>

            <textarea
              placeholder="어떤 상황이었나요?"
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              required
            />
            <textarea
              placeholder="얼마나 사용하셨나요?"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
            <textarea
              placeholder="그 결과 나에게 어떤 영향이 있었나요?"
              value={impact}
              onChange={(e) => setImpact(e.target.value)}
              required
            />

            <h3>오늘 내가 핸드폰 사용을 얼마나 잘 조절했나요?</h3>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="score-range"
            />
            <p>점수: {score}</p>

            <textarea
              placeholder="그렇게 평가한 이유는 무엇인가요?"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <button type="submit" className="submit-button">
              Drawing Start
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiaryForm;
