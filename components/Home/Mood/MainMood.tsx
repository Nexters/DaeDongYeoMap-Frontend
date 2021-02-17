import React, { useState } from 'react';
import * as $ from './MainMoodView';

const buttons = [
  { key: 'all', label: '전체' },
  { key: 'sugar0', label: '당도 0%' },
  { key: 'sugar30', label: '당도 30%' },
  { key: 'sugar50', label: '당도 50%' },
  { key: 'sugar70', label: '당도 70%' },
  { key: 'sugar100', label: '당도 100%' },
];

const MainMood: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState('all');
  const handleClickButton = (e: React.MouseEvent, key: string) => {
    e.preventDefault();
    if (selectedMood !== key) {
      setSelectedMood(key);
    }
  };

  return (
    <$.MainMood>
      {buttons.map(({ key, label }) => (
        <$.MoodButton
          key={`mood-filter-${key}`}
          color={key}
          mood-selected={key === selectedMood}
          onClick={(e) => handleClickButton(e, key)}
        >
          {label}
        </$.MoodButton>
      ))}
    </$.MainMood>
  );
};

export default MainMood;
