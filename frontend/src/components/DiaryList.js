import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DiaryList = () => {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/diary');
        if (response.status === 200) {
          setDiaries(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="diary-list">
      <h2>작성된 일지 목록</h2>
      {diaries.length === 0 ? (
        <p>저장된 일지가 없습니다.</p>
      ) : (
        diaries.map((diary) => (
          <div key={diary.id} className="diary-item">
            <h3>{diary.date}</h3>
            <p>{diary.content}</p>
            <p>SNS 사용 시간: {diary.sns_usage}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DiaryList;
