import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import MainMenu from './components/MainMenu';
import DiaryForm from './components/DiaryForm';
import DrawingProcess from './components/DrawingProcess';
import DrawingResult from './components/DrawingResult';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 시작 화면 */}
        <Route path="/" element={<SplashScreen />} />
        
        {/* 메인 메뉴 */}
        <Route path="/main" element={<MainMenu />} />
        
        {/* 일지 작성 화면 */}
        <Route path="/diary-form" element={<DiaryForm />} />
        
        {/* 그림 생성 대기 화면 */}
        <Route path="/drawing-process" element={<DrawingProcess />} />
        
        {/* 그림 생성 결과 화면 */}
        <Route path="/drawing-result" element={<DrawingResult />} />
      </Routes>
    </Router>
  );
};

export default App;
