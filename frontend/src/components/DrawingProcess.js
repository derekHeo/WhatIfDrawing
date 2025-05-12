import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const DrawingProcess = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      navigate('/drawing-result');
    }

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  return (
    <div className="outer-container">
      <div className="phone-frame">
        <button className="back-button" onClick={() => navigate('/main')}>
          ←
        </button>
        <div className="drawing-process">
          <img src="test_agent_img.png" alt="Drawing Agent" className="drawing-agent" />
          <div className="speech-bubble">
            잠시만 기다려주세요...
            <br />
            남은 시간: {Math.floor(timeLeft / 60)}분 {timeLeft % 60}초
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingProcess;
