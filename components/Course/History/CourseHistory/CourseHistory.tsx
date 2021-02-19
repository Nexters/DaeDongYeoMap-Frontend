import React, { useEffect } from 'react';
import CourseCard from './CourseCard';
import {
  useCourseHistoriesState,
  useFormDateState,
} from './CourseHistoryState';
import { CourseView } from '../HistoryState';

import * as $ from './CourseHistoryView';
import DatePicker from '~/components/_common/DatePicker';
import CalendarDate from '~/util/Calendar/CalendarDate';

type Props = {
  courses: CourseView[];
  onClickCourse?: (courseImage: string) => void;
};

const CourseHistory: React.FC<Props> = ({ courses, onClickCourse }) => {
  const [formDate, setFormDate] = useFormDateState();

  const handleClickDate = (calendarDate: CalendarDate): void => {
    setFormDate(calendarDate.getFullDate());
  };

  const handleClickCourse = (courseImage: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onClickCourse && onClickCourse(courseImage);
  };

  return (
    <>
      <$.DatePickerLayer>
        <DatePicker selected={formDate} onClickDate={handleClickDate} />
      </$.DatePickerLayer>

      <$.CoursePickerLayer>
        <div>코스 리스트</div>
        <$.CourseList>
          {courses.map(({ _id, title, stickers, courseImage, timestamp }) => (
            <$.CourseItem key={`course-${_id}`}>
              <CourseCard
                id={_id}
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
