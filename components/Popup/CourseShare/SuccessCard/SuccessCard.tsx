import React from 'react';
import * as $ from './SuccessCardView';
import { usePopupCloser } from '~/lib/apollo/hooks/usePopup';

export type Props = {
  course: GQL.Course;
  onClickShareButton: (e: React.MouseEvent) => void;
};

const CourseShare: React.FC<Props> = ({ course, onClickShareButton }) => {
  const closePopup = usePopupCloser();

  const handleClickCloseButton = (e: React.MouseEvent) => {
    e.preventDefault();
    closePopup();
  };

  return (
    <$.SuccessCard>
      <$.AreaCourse>
        <$.CourseImage src={course.courseImage} />
      </$.AreaCourse>
      <$.AreaFooter>
        <$.Title>데이트 코스가 등록되었어요!</$.Title>
        <$.Description>
          01월 23일 ‘남자친구랑 데이트❤️’가 등록되었습니다.
          <br />
          데이트 코스를 공유하시겠어요?
        </$.Description>
        <$.Buttons>
          <$.CloseButton onClick={handleClickCloseButton}>닫기</$.CloseButton>
          <$.ShareButton onClick={onClickShareButton}>공유하기</$.ShareButton>
        </$.Buttons>
      </$.AreaFooter>
    </$.SuccessCard>
  );
};

export default CourseShare;
