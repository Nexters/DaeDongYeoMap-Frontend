import React from 'react';
import * as $ from './CourseCardView';
import type { CourseView } from '~/components/Course/History/HistoryState';
import { formatDate } from '~/util';

type Props = CourseView & {
  courseClicked: (courseImage: string) => (e: React.MouseEvent) => void;
};

const CourseCard: React.FC<Props> = ({
  title,
  stickers,
  courseImage,
  numStickers,
  timestamp,
  courseClicked,
}) => {
  function getDay(date) {
    console.log(date, 'date');
    const weekName = ['일', '월', '화', '수', '목', '금', '토'];
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const week = new Date(year, month - 1, day, 0, 0, 0, 0);
    const dayName = weekName[week.getDay()];
    return dayName;
  }

  function getStickerImage(sweet_percent: number, sticker_index: number) {
    const baseUrl =
      'https://storage.googleapis.com/sticker_images/sweets_76_76';
    return `${baseUrl}/${sweet_percent}_${sticker_index}.png`;
  }

  return (
    <$.CourseCard onClick={courseClicked(courseImage)}>
      {stickers &&
        stickers.map(({ sweet_percent, sticker_index }, idx) => (
          <$.CourseSticker
            key={idx}
            src={getStickerImage(sweet_percent, sticker_index)}
          />
        ))}

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
