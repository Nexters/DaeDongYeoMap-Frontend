import React from 'react';
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
      <Sidebar></Sidebar>
      <Content>
        <ContentInner>
          <CourseTab />
        </ContentInner>
      </Content>
    </Wrap>
  );
};

export default History;
