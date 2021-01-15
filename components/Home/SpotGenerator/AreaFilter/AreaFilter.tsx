import React from 'react';
import moods from '../../../../constants/moods';
import * as $ from './AreaFilterView';

const AreaFilter: React.FC = () => {
  const handleClickMood = (e) => {
    e.preventDefault();
    // TODO: 무드 필터링 기능
  };

  return (
    <$.AreaFilter>
      <$.MoodList>
        {moods.map((mood, i) => (
          <$.MoodItem key={`mood-button-${i}`}>
            <$.MoodButton color={mood.color} onClick={handleClickMood}>
              {mood.label}
            </$.MoodButton>
          </$.MoodItem>
        ))}
      </$.MoodList>
    </$.AreaFilter>
  );
};

export default AreaFilter;
