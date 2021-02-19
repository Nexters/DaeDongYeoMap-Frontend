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
  selectedDate,
  courseClicked,
}) => {
  // const StickerIcon = sticker[stickerId] && sticker[stickerId].IconWithSugar;

  function getDay(date) {
    console.log(date, 'date');
    const weekName = new Array('일', '월', '화', '수', '목', '금', '토');
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    let week = new Date(year, month - 1, day, 0, 0, 0, 0);
    let dayName = weekName[week.getDay()];
    return dayName;
  }

  return (
    // <$.CourseCard onClick={handleClick}>
    <$.CourseCard onClick={courseClicked(courseImage)}>
      {/* <$.CourseSticker src={courseImage}></$.CourseSticker> */}
      <$.CourseTitle>{title}</$.CourseTitle>
      <$.CourseSpotsAndDate>
        <$.CourseSpots>총 {numStickers}개 스팟</$.CourseSpots>
        <$.CourseDate>
          {formatDate(timestamp, true)}
          {getDay(formatDate(timestamp, true))}요일
        </$.CourseDate>
      </$.CourseSpotsAndDate>
    </$.CourseCard>
  );
};

export default CourseCard;
