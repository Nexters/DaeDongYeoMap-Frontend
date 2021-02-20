import React from 'react';
import { sticker } from '~/constants/sugar';
import * as $ from './CourseCardView';
import type { CourseView } from '~/components/Course/History/HistoryState';
import { formatDate } from '~/util';

type Props = CourseView & {
  courseClicked: (courseImage: string) => (e: React.MouseEvent) => void;
};

const CourseCard: React.FC<Props> = ({
  id,
  title,
  stickers,
  courseImage,
  numStickers,
  timestamp,
  courseClicked,
}) => {
  // const StickerIcon = sticker[stickerId] && sticker[stickerId].IconWithSugar;

  return (
    // <$.CourseCard onClick={handleClick}>
    <$.CourseCard onClick={courseClicked(courseImage)}>
      id: {id}
      <br />
      title: {title}
      <br />
      numsticker: {numStickers}
      <br />
      time: {formatDate(timestamp, true)}
    </$.CourseCard>
  );
};

export default CourseCard;
