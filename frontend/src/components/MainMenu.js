import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../styles.css';

const MainMenu = () => {
  const navigate = useNavigate();

  // 반응형 설정
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 600px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div className="outer-container">
      <div className="phone-frame">
        <div className="main-menu">
          <button className={`main-button ${isMobile ? 'mobile-button' : ''}`} onClick={() => navigate('/diary-form')}>
            일지 작성하기
          </button>
          <button className={`main-button ${isMobile ? 'mobile-button' : ''}`} onClick={() => navigate('/diaries')}>
            작성한 일지 보기
          </button>
          <button className={`main-button ${isMobile ? 'mobile-button' : ''}`} onClick={() => navigate('/analysis')}>
            SNS 사용 분석
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
