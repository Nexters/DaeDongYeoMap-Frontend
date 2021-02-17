import React from 'react';
import * as $ from './ShareCardView';

const ShareCard: React.FC = () => {
  const handleClickCopyButton = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <$.ShareCard>
      <$.AreaCourse></$.AreaCourse>
      <$.Title>코스 이미지 공유하기</$.Title>
      <$.DownloadButton>
        <$.DownloadButtonImage></$.DownloadButtonImage>
        <$.DownloadButtonText>다운받기</$.DownloadButtonText>
      </$.DownloadButton>
      <$.AreaCopy>
        <$.CopyButton onClick={handleClickCopyButton}>링크 복사</$.CopyButton>
        <$.CopyUrl>
          <$.CopyUrlInner>https://www.daedongyeomap.com/</$.CopyUrlInner>
        </$.CopyUrl>
      </$.AreaCopy>
    </$.ShareCard>
  );
};

export default ShareCard;
