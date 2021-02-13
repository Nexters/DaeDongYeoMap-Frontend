import React from 'react';
import { sticker } from '~/constants/sugar';
import * as $ from './SpotCardView';

type Props = {
  stickerId: string;
  title: string;
  partner: string;
  timestamp: number;
};

const SpotCard: React.FC<Props> = ({
  stickerId,
  title,
  partner,
  timestamp,
}) => {
  const StickerIcon = sticker[stickerId] && sticker[stickerId].IconWithSugar;

  return (
    <$.SpotCard>
      <$.AreaSticker>
        <StickerIcon width="72" height="72" />
      </$.AreaSticker>
      <$.AreaDescription>
        <$.SpotTitle>{title}</$.SpotTitle>
        <$.SpotInfo>
          <$.Partner>{partner}</$.Partner>
          <$.Timestamp>{timestamp}</$.Timestamp>
        </$.SpotInfo>
      </$.AreaDescription>
    </$.SpotCard>
  );
};

export default SpotCard;
