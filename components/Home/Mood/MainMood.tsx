import React from 'react';
import * as $ from './MainMoodView';

const MainMood: React.FC = () => {
  return (
    <$.MainMood>
      <$.MoodButton>전체</$.MoodButton>
      <$.MoodButton color="#ff7474">로맨틱한</$.MoodButton>
      <$.MoodButton color="#6e5be7">신나는</$.MoodButton>
      <$.MoodButton color="#35d6b9">시크한</$.MoodButton>
      <$.MoodButton color="#3a87fc">자유로운</$.MoodButton>
    </$.MainMood>
  );
};

export default MainMood;
