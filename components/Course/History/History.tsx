import React from 'react';
import CourseHistory from './CourseHistory';

import CourseTab from '~/components/Course/Tab';

import {
  Wrap,
  Sidebar,
  Content,
  ContentInner,
} from '~/components/Course/CourseView';

const History: React.FC = () => {
  return (
    <Wrap>
      <Sidebar>
        <CourseHistory />
      </Sidebar>
      <Content>
        <ContentInner>
          <CourseTab />
        </ContentInner>
      </Content>
    </Wrap>
  );
};

export default History;
