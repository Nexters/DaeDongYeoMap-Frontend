import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const ShareCard = styled.div`
  height: 100%;
  border-radius: 16px;
  padding: 40px;
  background-color: #fff;
  text-align: center;
`;

export const AreaCourse = styled.div`
  height: 416px;
`;

export const CourseImage = styled.img`
  display: block;
  width: 416px;
  height: 416px;
`;

export const Title = styled.strong`
  display: block;
  height: 28px;
  margin-top: 36px;
  font-size: 20px;
  line-height: 28px;
  color: ${painter.grayscale[10]};
`;

export const DownloadButton = styled.a`
  display: block;
  width: 56px;
  margin: 16px auto 0;
  cursor: pointer;
`;

export const DownloadButtonImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${painter.grayscale[2]};
`;

export const DownloadButtonText = styled.div`
  height: 20px;
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  color: ${painter.grayscale[9]};
`;

export const AreaCopy = styled.div`
  margin-top: 36px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const CopyButton = styled.a.attrs({ href: '#' })`
  float: right;
  height: 40px;
  margin-left: 8px;
  padding: 0 24px;
  border-radius: 8px;
  background-color: ${painter.grayscale[9]};
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  color: ${painter.basic.white};
`;

export const CopyUrl = styled.div`
  overflow: hidden;
  height: 40px;
`;

export const CopyUrlInner = styled.p`
  overflow-x: auto;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  border-radius: 8px;
  background-color: ${painter.grayscale[1]};
  font-size: 14px;
  line-height: 40px;
  text-align: left;
  color: ${painter.grayscale[6]};
`;
