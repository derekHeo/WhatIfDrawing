import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Clicked! Moving to Main Menu");
    navigate('/main');
  };

  return (
    <div className="outer-container">
      <div className="phone-frame splash-screen" onClick={handleClick}>
        <img 
          src="test_splash.png" 
          alt="What if Drawing" 
          className="splash-image" 
        />
      </div>
    </div>
  );
};

export default SplashScreen;
