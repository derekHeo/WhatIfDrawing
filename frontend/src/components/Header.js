import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>What If Drawing Service</h1>
      <nav>
        <Link to="/">일기 작성하기</Link>
        <Link to="/diaries">일기 목록 보기</Link>
        <Link to="/analysis">SNS 분석하기</Link>
        <Link to="/comics">4컷 만화 보기</Link>
      </nav>
    </header>
  );
};

export default Header;
