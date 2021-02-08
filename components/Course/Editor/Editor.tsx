import React from 'react';
import CandidateSpots from './CandidateSpots';
import Preview from './Preview';
import CourseTab from '~/components/Course/Tab';
import {
  Wrap,
  Sidebar,
  Content,
  ContentInner,
} from '~/components/Course/CourseView';

const Editor: React.FC = () => {
  return (
    <Wrap>
      <Sidebar>
        <CandidateSpots />
      </Sidebar>
      <Content>
        <ContentInner>
          <CourseTab />
          <Preview />
        </ContentInner>
      </Content>
    </Wrap>
  );
};

export default Editor;
