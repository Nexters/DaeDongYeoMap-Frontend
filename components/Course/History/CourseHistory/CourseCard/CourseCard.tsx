import React from 'react';
import { sticker } from '~/constants/sugar';
import * as $ from './CourseCardView';
import type { CourseView } from '~/components/Course/History/HistoryState';
import { formatDate } from '~/util';

const CourseCard: React.FC<any> = ({
  id,
  title,
  stickers,
  courseImage,
  numStickers,
  timestamp,
}) => {
  // const StickerIcon = sticker[stickerId] && sticker[stickerId].IconWithSugar;

  return (
    // <$.CourseCard onClick={handleClick}>
    <$.CourseCard>
      id: {id}
      <br />
      title: {title}
      <br />
      sticekrs: {stickers}
      <br />
      numsticker: {numStickers}
      <br />
      time: {formatDate(timestamp, true)}
      <br />
      image: {courseImage}
    </$.CourseCard>
  );
};

export default CourseCard;
