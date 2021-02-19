import React, { useState } from 'react';
import * as $ from './CourseShareView';
import { usePopupCloser } from '~/lib/apollo/hooks/usePopup';
import SuccessCard from './SuccessCard';
import ShareCard from './ShareCard';
import type { PopupChildProps } from '~/@types/popup.d';

export type Props = PopupChildProps & {
  course: GQL.Course;
};

const CourseShare: React.FC<Props> = ({ zIndex, course }) => {
  const [isSharePage, setIsSharePage] = useState(false);
  const closePopup = usePopupCloser();

  const handleClickCloseButton = (e: React.MouseEvent) => {
    e.preventDefault();
    closePopup();
  };

  const handleClickShareButton = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSharePage(true);
  };

  return (
    <$.CourseShare zIndex={zIndex}>
      <$.Layer>
        <$.CloseLayerButton onClick={handleClickCloseButton} />
        {!isSharePage ? (
          <SuccessCard
            course={course}
            onClickShareButton={handleClickShareButton}
          />
        ) : (
          <ShareCard course={course} />
        )}
      </$.Layer>
    </$.CourseShare>
  );
};

export default CourseShare;
