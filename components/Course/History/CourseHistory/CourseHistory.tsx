import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import { useFormDateState } from './CourseHistoryState';
import { CourseView } from '../HistoryState';

import * as $ from './CourseHistoryView';
import DatePicker from '~/components/_common/DatePicker';
import CalendarDate from '~/util/Calendar/CalendarDate';

import { formatDate } from '~/util';

type Props = {
  courses: CourseView[];
  onClickCourse?: (courseImage: string) => void;
};

const CourseHistory: React.FC<Props> = ({ courses, onClickCourse }) => {
  const [formDate, setFormDate] = useFormDateState();
  const [DateText, setDateText] = useState('');

  const handleClickDate = (calendarDate: CalendarDate): void => {
    setFormDate(calendarDate.getFullDate());
  };

  const handleClickCourse = (courseImage: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onClickCourse && onClickCourse(courseImage);
  };

  useEffect(() => {
    const year = String(formDate[0]);
    let month = String(formDate[1]);
    let date = String(formDate[2]);

    if (formDate[1] < 10) {
      month = '0' + String(formDate[1]);
    }
    if (formDate[2] < 10) {
      date = '0' + String(formDate[2]);
    }

    setDateText(`${year}.${month}.${date}`);
    console.log(formDate, 'formDate');
    console.log(DateText, 'DateText');
  }, [formDate]);

  return (
    <>
      <$.DatePickerLayer>
        <DatePicker selected={formDate} onClickDate={handleClickDate} />
      </$.DatePickerLayer>

      <$.CoursePickerLayer>
        <$.CourseList>
          {courses.map(({ id, title, stickers, courseImage, timestamp }) => (
            <$.CourseItem
              key={`course-${id}`}
              selectedTrue={formatDate(timestamp, true) != DateText}
            >
              <CourseCard
                id={id}
                title={title}
                stickers={stickers}
                courseImage={courseImage}
                numStickers={stickers.length}
                timestamp={timestamp}
                courseClicked={handleClickCourse}
              />
            </$.CourseItem>
          ))}
        </$.CourseList>
      </$.CoursePickerLayer>
    </>
  );
};

export default CourseHistory;
