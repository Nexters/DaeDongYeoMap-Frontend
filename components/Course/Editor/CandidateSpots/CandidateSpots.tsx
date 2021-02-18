import React, { useEffect } from 'react';
import SpotCard from './SpotCard';
import {
  DraggedStatus,
  DraggedStatusMap,
  useCandidateSpotsState,
  useDraggedStatus,
} from './CandidateSpotsState';
import * as $ from './CandidateSpotsView';
import { SpotView } from '../EditorState';
import storage from '~/storage';

const CandidateSpots: React.FC = () => {
  const [candidateSpots, setCandidateSpots] = useCandidateSpotsState();
  const [status, setStatus] = useDraggedStatus();

  useEffect(() => {
    const spots = storage.getSpots();

    setCandidateSpots(spots);
  }, []);

  useEffect(() => {
    const initialStatus = candidateSpots.reduce(
      (obj: DraggedStatusMap, spot: SpotView) => {
        obj[spot.id] = DraggedStatus.Wait;
        return obj;
      },
      {}
    );

    setStatus(initialStatus);
  }, [candidateSpots]);

  return (
    <$.CandidateSpots>
      <$.AreaTitle>스팟 리스트</$.AreaTitle>
      <$.AreaSpots>
        <$.SpotList>
          {candidateSpots.map(
            ({ id, stickerId, title, partner, timestamp }) => (
              <$.SpotItem key={`candidate-${id}`}>
                <SpotCard
                  status={status[id]}
                  id={id}
                  stickerId={stickerId}
                  title={title}
                  partner={partner}
                  timestamp={timestamp}
                />
              </$.SpotItem>
            )
          )}
        </$.SpotList>
      </$.AreaSpots>
    </$.CandidateSpots>
  );
};

export default CandidateSpots;
