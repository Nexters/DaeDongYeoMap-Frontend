import React, { useState } from 'react';
import * as $ from './MainMoodView';

const buttons = [
  { id: 'Icon_0.png', label: '당도 0%:풋풋한 데이트' },
  { id: 'Icon_30.png', label: '당도 30%:유쾌한 데이트' },
  { id: 'Icon_50.png', label: '당도 50%:설레는 데이트' },
  { id: 'Icon_70.png', label: '당도 70%:강렬한 데이트' },
  { id: 'Icon_100.png', label: '당도 100%:화끈한 데이트' },
];

const MainMood: React.FC = () => {
  const [moodShow, setMoodShow] = useState(false);
  const [selectedMood, setSelectedMood] = useState('');
  const handleClickButton = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (selectedMood !== id) {
      setSelectedMood(id);
      console.log(selectedMood, 'mood');
    }
    console.log(selectedMood, 'mood');
  };

  return (
    <$.MainMood>
      {/* {buttons.map(({ key, label }) => (
        <$.MoodButton
          key={`mood-filter-${key}`}
          color={key}
          mood-selected={key === selectedMood}
          onClick={(e) => handleClickButton(e, key)}
        >
          {label}
        </$.MoodButton>
      ))} */}
      <$.MoodDropDownBtn onClick={() => setMoodShow(!moodShow)} />
      <$.MoodBtnsContainer is-moodShow={!moodShow}>
        {buttons.map(({ id, label }) => (
          <$.MoodBtn
            key={id}
            src={id}
            mood-selected={id == selectedMood}
            onClick={(e) => handleClickButton(e, id)}
          ></$.MoodBtn>
        ))}
      </$.MoodBtnsContainer>
    </$.MainMood>
  );
};

export default MainMood;
