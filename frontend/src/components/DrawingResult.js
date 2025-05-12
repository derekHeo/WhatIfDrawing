import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const DrawingResult = () => {
  const navigate = useNavigate();

  return (
    <div className="outer-container">
      <div className="phone-frame">
        <button className="back-button" onClick={() => navigate('/main')}>
          ←
        </button>

        <div className="drawing-result">
          <img src="test_screen.png" alt="SNS Screen Time" className="screen-image" />
          
          <div className="result-container">
            <h3>4컷 만화 결과</h3>
            <img src="comic_result.png" alt="4컷 만화 이미지" className="comic-image" />
            
            <div className="scenario">
              <h4>시나리오 설명:</h4>
              <p>
                SNS를 사용하지 않았을 때의 하루 모습을 상상해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingResult;
