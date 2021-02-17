import React, { useState } from 'react';
import * as $ from './CourseShareView';
import { usePopupCloser } from '~/lib/apollo/hooks/usePopup';
import SuccessCard from './SuccessCard';
import type { PopupChildProps } from '~/@types/popup.d';

export type Props = PopupChildProps;

const CourseShare: React.FC<Props> = ({ zIndex }) => {
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
          <SuccessCard onClickShareButton={handleClickShareButton} />
        ) : null}
      </$.Layer>
    </$.CourseShare>
  );
};

export default CourseShare;
