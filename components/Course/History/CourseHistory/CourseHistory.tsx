import React, { useEffect } from 'react';
import CourseCard from './CourseCard';
import {
  useCourseHistoriesState,
  useFormDateState,
} from './CourseHistoryState';
import { CourseView } from '../HistoryState';

import storage from '~/storage';

import * as $ from './CourseHistoryView';
import DatePicker from '~/components/_common/DatePicker';
import CalendarDate from '~/util/Calendar/CalendarDate';

const CourseHistory: React.FC = () => {
  const [couseHistories, setCouseHistories] = useCourseHistoriesState();
  const [formDate, setFormDate] = useFormDateState();

  useEffect(() => {
    const courses = storage.getCourses();
    setCouseHistories(courses);
  }, []);

  const handleClickDate = (calendarDate: CalendarDate): void => {
    setFormDate(calendarDate.getFullDate());
  };

  return (
    <>
      <$.DatePickerLayer>
        <DatePicker selected={formDate} onClickDate={handleClickDate} />
      </$.DatePickerLayer>

      <$.CoursePickerLayer>
        <div>코스 리스트</div>
        <$.CourseList>
          {couseHistories.map(
            ({ _id, title, stickers, courseImage, timestamp }) => (
              <$.CourseItem key={`course-${_id}`}>
                <CourseCard
                  id={_id}
                  title={title}
                  stickers={stickers}
                  courseImage={courseImage}
                  numStickers={stickers.length}
                  timestamp={timestamp}
                />
              </$.CourseItem>
            )
          )}
        </$.CourseList>
      </$.CoursePickerLayer>
    </>
  );
};

export default CourseHistory;
