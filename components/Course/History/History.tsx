import React, { useState } from 'react';
import { useEffect } from 'react';
import CourseHistory from './CourseHistory';
import CourseTab from '~/components/Course/Tab';
import { useCourseHistoriesState } from './CourseHistory/CourseHistoryState';
import {
  Wrap,
  Sidebar,
  Content,
  ContentInner,
} from '~/components/Course/CourseView';

import Storage from '~/lib/storage';

import styled from 'styled-components';
export const CourseImage = styled.img`
  display: block;
  width: 1200px;
  height: 900px;
`;

const History: React.FC = () => {
  const [couseHistories, setCouseHistories] = useCourseHistoriesState();
  const [courseImage, setCourseImage] = useState(
    'https://storage.googleapis.com/sticker_images/tmp_image.png'
  );

  useEffect(() => {
    const courses = Storage.getCourseCards();
    setCouseHistories(courses);
  }, []);

  const handleClickCourse = (courseImage: string): void => {
    setCourseImage(courseImage);
  };

  return (
    <Wrap>
      <Sidebar>
        <CourseHistory
          courses={couseHistories}
          onClickCourse={handleClickCourse}
        />
      </Sidebar>
      <Content>
        <ContentInner>
          <CourseImage src={courseImage} />
          <CourseTab />
        </ContentInner>
      </Content>
    </Wrap>
  );
};

export default History;
