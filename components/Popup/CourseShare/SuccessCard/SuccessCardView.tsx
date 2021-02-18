import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const SuccessCard = styled.div`
  height: 100%;
  border-radius: 16px;
  background-color: #fff;
`;

export const AreaCourse = styled.div`
  height: 497px;
  border-bottom: 1px solid ${painter.grayscale[1]};
`;

export const CourseImage = styled.img`
  display: block;
  width: 496px;
  height: 496px;
`;

export const AreaFooter = styled.div`
  padding: 40px 40px 0;
  text-align: center;
`;

export const Title = styled.strong`
  display: block;
  height: 28px;
  font-size: 20px;
  line-height: 28px;
  color: ${painter.grayscale[10]};
`;

export const Description = styled.p`
  margin-top: 12px;
  font-size: 14px;
  line-height: 20px;
  color: ${painter.grayscale[7]};
`;

export const Buttons = styled.div`
  height: 40px;
  line-height: 40px;
  margin-top: 48px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const CloseButton = styled.a.attrs({ href: '#' })`
  float: left;
  height: 100%;
  padding: 0 24px;
  border-radius: 8px;
  background-color: ${painter.grayscale[2]};
  font-size: 14px;
  text-align: center;
  color: ${painter.grayscale[7]};
`;

export const ShareButton = styled.a.attrs({ href: '#' })`
  float: right;
  height: 100%;
  padding: 0 24px;
  border-radius: 8px;
  background-color: ${painter.grayscale[9]};
  font-size: 14px;
  text-align: center;
  color: ${painter.basic.white};
`;
