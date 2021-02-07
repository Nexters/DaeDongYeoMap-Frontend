import React from 'react';
import * as $ from './MainMoodView';

const MainMood: React.FC = () => {
  // ToDo : 제일 먼저 '전체' 탭에 디폴트로 선택돼있도록 설정
  return (
    <$.MainMood>
      <$.MoodButton color="all">전체</$.MoodButton>
      <$.MoodButton color="sugar0">당도 0%</$.MoodButton>
      <$.MoodButton color="sugar30">당도 30%</$.MoodButton>
      <$.MoodButton color="sugar50">당도 50%</$.MoodButton>
      <$.MoodButton color="sugar70">당도 70%</$.MoodButton>
      <$.MoodButton color="sugar100">당도 100%</$.MoodButton>
    </$.MainMood>
  );
};

export default MainMood;
