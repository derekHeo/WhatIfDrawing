import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const BackButton = ({ target }) => {
  const navigate = useNavigate();
  
  return (
    <button className="back-button" onClick={() => navigate(target)}>
      ⬅︎
    </button>
  );
};

export default BackButton;
