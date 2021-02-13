import React from 'react';
import SpotCard from './SpotCard';
import * as $ from './CandidateSpotsView';

const mockSpots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => ({
  id: `candidate-spot-${key}`,
  stickerId: 'sticker0',
  title: '애버랜드',
  partner: '남자친구',
  timestamp: 1609513200,
}));

const CandidateSpots: React.FC = () => {
  return (
    <$.CandidateSpots>
      <$.AreaTitle>스팟 리스트</$.AreaTitle>
      <$.AreaSpots>
        <$.SpotList>
          {mockSpots.map(({ id, stickerId, title, partner, timestamp }, i) => (
            <$.SpotItem key={`candidate-spot-${i}`}>
              <SpotCard
                id={id}
                stickerId={stickerId}
                title={title}
                partner={partner}
                timestamp={timestamp}
              />
            </$.SpotItem>
          ))}
        </$.SpotList>
      </$.AreaSpots>
    </$.CandidateSpots>
  );
};

export default CandidateSpots;
