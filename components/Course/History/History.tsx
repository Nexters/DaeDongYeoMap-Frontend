import React from 'react';
import CourseHistory from './CourseHistory';

import CourseTab from '~/components/Course/Tab';

import {
  Wrap,
  Sidebar,
  Content,
  ContentInner,
} from '~/components/Course/CourseView';

import styled from 'styled-components';
export const CourseImage = styled.img`
  display: block;
  width: 1200px;
  height: 900px;
`;

const History: React.FC = () => {
  const tmpImage =
    'https://storage.googleapis.com/sticker_images/tmp_image.png';
  return (
    <Wrap>
      <Sidebar>
        <CourseHistory />
      </Sidebar>
      <Content>
        <ContentInner>
          <CourseImage src={tmpImage} />
          <CourseTab />
        </ContentInner>
      </Content>
    </Wrap>
  );
};

export default History;
