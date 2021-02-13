import React, { useEffect } from 'react';
import SpotCard from './SpotCard';
import {
  DraggedStatus,
  DraggedStatusMap,
  useDraggedStatus,
} from './CandidateSpotsState';
import * as $ from './CandidateSpotsView';
import { SpotView } from '../EditorState';

const mockSpots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => ({
  id: `candidate-spot-${key}`,
  stickerId: 'sticker0',
  title: '애버랜드',
  partner: '남자친구',
  timestamp: 1609513200,
}));

const CandidateSpots: React.FC = () => {
  const [status, setStatus] = useDraggedStatus();

  useEffect(() => {
    const initialStatus = mockSpots.reduce(
      (obj: DraggedStatusMap, spot: SpotView) => {
        obj[spot.id] = DraggedStatus.Wait;
        return obj;
      },
      {}
    );

    setStatus(initialStatus);
  }, []);

  return (
    <$.CandidateSpots>
      <$.AreaTitle>스팟 리스트</$.AreaTitle>
      <$.AreaSpots>
        <$.SpotList>
          {mockSpots.map(({ id, stickerId, title, partner, timestamp }, i) => (
            <$.SpotItem key={`candidate-spot-${i}`}>
              <SpotCard
                status={status[id]}
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
